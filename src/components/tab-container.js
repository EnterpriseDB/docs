import React, {
  Children,
  cloneElement,
  useState,
  useId,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
  useMemo,
} from "react";

export default function TabContainer({ className, syncKey, children }) {
  const id = useId();
  const [implicitSelected, tabs, processedChildren] = useMemo(() => {
    const tabs = [];
    let implicitSelected = null;
    const processedChildren = Children.map(children, (child) => {
      if (child && child.props && child.props.mdxType === "Tab") {
        // collect information on Tabs, assign identifiers and classnames
        const { title, defaultSelected } = child.props;
        if (!title) {
          console.error("Tab must have a title");
        }
        const tabIndex = tabs.length + 1;
        const tabId = id + "tab" + tabIndex;
        tabs.push({ id: tabId, title });
        if (defaultSelected || tabIndex === 1) implicitSelected = title;
        return cloneElement(child, {
          id: tabId + "panel",
          labelledById: tabId,
          panelClassName: "tab" + tabIndex,
        });
      }
      return child;
    });
    return [implicitSelected, tabs, processedChildren];
  }, [children, id]);
  const [selected, setSelected] = useState(implicitSelected);

  useEffect(() => {
    if (syncKey) {
      const updateSelected = () => {
        const newSelected = sessionStorage.getItem("selectedTab-" + syncKey);
        if (
          newSelected &&
          newSelected !== selected &&
          tabs.some((tab) => tab.title === newSelected)
        ) {
          setSelected(newSelected);
        }
      };

      updateSelected();
      window.addEventListener("tabSelected", updateSelected);
      return () => {
        window.removeEventListener("tabSelected", updateSelected);
      };
    }
  }, [syncKey, selected, tabs]);

  // there's a bit of logic here to do "scroll anchoring"
  // If there are multiple, linked (via syncKey) tab containers on a page,
  // changing a tab in one might expand or shrink others.
  // Even with a single tab container, individual tabs might have different
  // intrinsic heights - since the tab bar is sticky, it might be visible
  // far down the page for a long tab, but scrolled off for a short one.
  // Both of these scenarios are annoying - the tab bar will appear to
  // jump around or disappear, moving out from under the reader's cursor or finger
  // So *when the tab selection changes*, we record the current position and attempt
  // to restore it on the next render.
  const tabBarRef = useRef(null);
  const scrollAnchorOffset = useRef(null);

  const onTabSelect = useCallback(
    (event) => {
      setSelected(event.target.value);
      if (tabBarRef.current) {
        scrollAnchorOffset.current = getScrollOffset(tabBarRef.current);

        // notify other tab containers of the change in selected tab
        // I don't bother passing the syncKey with this - it's just as easy
        // to check sessionStorage for the key in the listener
        if (syncKey) {
          sessionStorage.setItem("selectedTab-" + syncKey, event.target.value);
          window.dispatchEvent(new Event("tabSelected"));
        }
      }
    },
    [syncKey],
  );

  useLayoutEffect(() => {
    if (!tabBarRef.current || scrollAnchorOffset.current === null) return;

    const parent = tabBarRef.current.parentElement;
    const scrollParent = getScrollParent(tabBarRef.current);
    const newScrollOffset = getScrollOffset(tabBarRef.current);
    const limit =
      parent.offsetTop + parent.offsetHeight - tabBarRef.current.offsetHeight;
    let newScrollTop =
      scrollParent.scrollTop + (newScrollOffset - scrollAnchorOffset.current);
    if (newScrollTop > limit) newScrollTop = parent.offsetTop;
    scrollParent.scrollTop = newScrollTop;
    scrollAnchorOffset.current = null;
  });

  // refer to https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
  // warnings disabled for jsx-a11y as they make no sense: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
  return (
    <div className={`tabs ${className || ""}`}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
      <ul ref={tabBarRef} className="tabs__list nav nav-tabs" role="tablist">
        {tabs.map((tab, i) => (
          <li
            className="tabs__tab"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="tab"
            aria-controls={tab.id + "panel"}
            aria-selected={selected === tab.title}
            id={tab.id}
            key={tab.title}
          >
            <label className={`tab${i + 1} nav-item nav-link`}>
              {tab.title}
              <input
                className="tabs__input"
                type="radio"
                name={id + "tab-group"}
                value={tab.title}
                checked={selected === tab.title}
                onChange={onTabSelect}
              />
            </label>
          </li>
        ))}
      </ul>

      <div className="tab-content" role="presentation">
        {processedChildren}
      </div>
    </div>
  );
}

export function Tab({
  title,
  defaultSelected,
  className,
  children,
  id,
  labelledById,
  panelClassName,
}) {
  return (
    <div
      className={`${panelClassName} tabs__content ${className || ""}`}
      data-label={title}
      role="tabpanel"
      aria-labelledby={labelledById}
      id={id}
    >
      {children}
    </div>
  );
}

function getScrollParent(element) {
  if (element === null) {
    return document?.documentElement;
  }
  const style = window.getComputedStyle(element);
  const overflowY = style.overflowY;
  if (overflowY === "auto" || overflowY === "scroll") {
    return element;
  }
  return getScrollParent(element.parentElement);
}

function getScrollOffset(element) {
  let scrollOffset = element.getBoundingClientRect().top;
  // tab bar is sticky - so it'll "bottom out" at zero, even when the
  // top of the parent is scrolled off-screen.
  // could just make the tab container the focal element, but that
  // then we'd have the opposite problem of having to figure out where
  // the tab bar was floating inside of it.
  if (scrollOffset === 0)
    scrollOffset = element.parentElement.getBoundingClientRect().top;
  return Math.ceil(scrollOffset);
}
