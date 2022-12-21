import React, { useEffect, useCallback, createRef } from "react";
import { connectSearchBox } from "react-instantsearch-dom";
import Icon, { iconNames } from "../icon";
import { SlashIndicator, ClearButton } from "../search/formComps";

export const AdvancedSearchForm = connectSearchBox(
  ({ currentRefinement, refine, query }) => {
    const queryLength = (query || "").length;

    const inputRef = createRef();
    const searchKeyboardShortcuts = useCallback(
      (e) => {
        const inputFocused = inputRef.current.id === document.activeElement.id;

        if (e.key === "/" && !inputFocused) {
          inputRef.current.focus();
          e.preventDefault();
        }
        if (e.key === "Escape" && inputFocused) {
          inputRef.current.blur();
          e.preventDefault();
        }
      },
      [inputRef],
    );

    useEffect(() => {
      document.addEventListener("keydown", searchKeyboardShortcuts);
      return () => {
        document.removeEventListener("keydown", searchKeyboardShortcuts);
      };
    }, [searchKeyboardShortcuts]);

    useEffect(() => {
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
          className="fill-black ml-3 opacity-5 flex-shrink-0"
          width="22"
          height="22"
        />
        <input
          id="search-input"
          className="form-control form-control-lg border-0 pl-3"
          type="text"
          aria-label="search"
          placeholder="Search"
          value={currentRefinement}
          onChange={(e) => refine(e.currentTarget.value)}
          ref={inputRef}
        />
        <ClearButton
          onClick={() => {
            refine("");
          }}
          className={`${queryLength === 0 && "d-none"}`}
        />
        <SlashIndicator query={query} />
      </form>
    );
  },
);
