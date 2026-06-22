import React, { useLayoutEffect, useCallback, useRef, useState } from "react";
import { useSearchBox } from "react-instantsearch";
import Icon, { iconNames } from "../icon";
import { SlashIndicator, ClearButton } from "../search/formComps";
import { trackSearchEvent } from "../search/analytics";

export const AdvancedSearchForm = ({ initialQuery }) => {
  const { clear, refine } = useSearchBox();
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(initialQuery);
  const queryLength = (inputValue || "").length;
  const [lastSetQuery, setLastSetQuery] = useState(initialQuery);

  const onInputChange = useCallback(
    (e) => {
      let newValue = e.currentTarget.value;
      setInputValue(newValue);
      // todo: debounce
      if (newValue !== lastSetQuery) {
        // Changing a query that was already non-empty is a refinement; the
        // first characters typed into an empty box are the initial search.
        if ((lastSetQuery || "").length > 0 && newValue.length > 0)
          trackSearchEvent("searchRefined");
        setLastSetQuery(newValue);
        refine(newValue);
      }
    },
    [refine, lastSetQuery],
  );

  const onClearSearch = useCallback(
    (e) => {
      clear();
    },
    [clear],
  );

  const searchKeyboardShortcuts = useCallback((e) => {
    const inputFocused = inputRef.current.id === document.activeElement?.id;

    if (e.key === "/" && !inputFocused) {
      inputRef.current.focus();
      e.preventDefault();
    }
    if (e.key === "Escape" && inputFocused) {
      inputRef.current.blur();
      e.preventDefault();
    }
  }, []);

  useLayoutEffect(() => {
    document.addEventListener("keydown", searchKeyboardShortcuts);
    return () => {
      document.removeEventListener("keydown", searchKeyboardShortcuts);
    };
  }, [searchKeyboardShortcuts]);

  useLayoutEffect(() => {
    inputRef.current.focus();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form
      noValidate
      action=""
      autoComplete="off"
      role="search"
      className={`w-100 search-form d-flex align-items-center`}
      onSubmit={(e) => e.preventDefault()}
    >
      <Icon
        iconName={iconNames.SEARCH}
        className="fill-black ms-3 opacity-5 flex-shrink-0"
        width="22"
        height="22"
      />
      <input
        id="search-input"
        className="form-control form-control-lg border-0 ps-3"
        type="text"
        aria-label="search"
        placeholder="Search"
        value={inputValue}
        defaultValue={initialQuery}
        onChange={onInputChange}
        ref={inputRef}
      />
      <ClearButton
        onClick={onClearSearch}
        className={`${queryLength === 0 && "d-none"}`}
      />
      <SlashIndicator query={inputValue} />
    </form>
  );
};
