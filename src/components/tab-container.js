import React, {
  Children,
  cloneElement,
  useState,
  useId,
  useCallback,
} from "react";

export default function TabContainer({ className, children }) {
  const id = useId();

  const tabs = [];
  let implicitSelected = "";

  children = Children.map(children, (child) => {
    if (child && child.props && child.props.mdxType === "Tab") {
      // collect information on Tabs, assign identifiers and classnames
      const { title, defaultSelected } = child.props;
      if (!title) {
        console.error("Tab must have a title");
      }
      const tabIndex = tabs.length + 1;
      const tabId = id + "tab" + tabIndex;
      tabs.push({ id: tabId, title, defaultSelected });
      if (defaultSelected || tabIndex === 1) implicitSelected = title;
      return cloneElement(child, {
        id: tabId + "panel",
        labelledById: tabId,
        panelClassName: "tab" + tabIndex,
      });
    }
    return child;
  });
  const [selected, setSelected] = useState(implicitSelected);

  const onTabSelect = useCallback(
    (event) => {
      setSelected(event.target.value);
    },
    [setSelected],
  );

  // refer to https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
  // warnings disabled for jsx-a11y as they make no sense: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
  return (
    <div className={`tabs ${className || ""}`}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
      <ul className="tabs__list nav nav-tabs" role="tablist">
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
        {children}
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
