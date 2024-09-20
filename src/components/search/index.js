import React, {
  useMemo,
  useState,
  useLayoutEffect,
  useCallback,
  useRef,
  useEffect,
} from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearchSSRProvider,
  InstantSearch,
  Configure,
  useSearchBox,
} from "react-instantsearch";
import Icon, { iconNames } from "../icon/";
import { SlashIndicator, ClearButton, SearchPane } from "./formComps";
import useSiteMetadata from "../../hooks/use-sitemetadata";
import { products } from "../../constants/products";
import { Dropdown, DropdownButton } from "react-bootstrap";
// loaded client-side for use by Algolia
import aa from "search-insights"; // eslint-disable-line no-unused-vars

const searchClient = algoliasearch(
  "HXNAF5X3I8",
  "fb05499144f0399f5985485b624a0290",
);

const useClickOutside = (ref, handler, events) => {
  if (!events) events = [`mousedown`, `touchstart`];
  const detectClickOutside = useCallback(
    (event) => !ref.current.contains(event.target) && handler(),
    [handler, ref],
  );
  useLayoutEffect(() => {
    for (const event of events)
      document.addEventListener(event, detectClickOutside);
    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside);
    };
  }, [detectClickOutside, events]);
};

const Search = ({ searchProduct, onSearchProductChange }) => {
  const { clear, refine } = useSearchBox();
  const searchBarRef = useRef(null);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);
  const searchContentRef = useRef(null);
  const [arrowIndex, setArrowIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const context = searchProduct
    ? " " + (products[searchProduct]?.name || searchProduct)
    : "";

  // allow typing ahead of search loading
  useEffect(() => {
    setInputValue(inputRef.current?.value || "");
    setFocus(
      inputRef.current && inputRef.current.id === document.activeElement?.id,
    );
    if (inputRef.current?.value) refine(inputRef.current.value);
  }, [refine]);

  const onClear = useCallback(() => {
    setInputValue("");
    clear();
  }, [clear]);

  const onInputChange = useCallback(
    (e) => {
      let newValue = e.currentTarget.value;
      setInputValue(newValue);
      refine(newValue);
    },
    [refine],
  );

  const close = useCallback(() => {
    setFocus(false);
    setArrowIndex(0);
  }, []);

  const moveArrowIndex = useCallback(
    (key) => {
      const dropdownItems = searchContentRef.current
        .querySelector(".search-pane")
        .querySelectorAll(".dropdown-item");
      let nextIndex = arrowIndex;
      if (key === "ArrowDown") {
        nextIndex = Math.min(arrowIndex + 1, dropdownItems.length - 1);
      }
      if (key === "ArrowUp") {
        nextIndex = Math.max(arrowIndex - 1, 0);
      }
      setArrowIndex(nextIndex);
      if (nextIndex === dropdownItems.length - 1) {
        searchContentRef.current.scrollTop =
          searchContentRef.current.scrollHeight;
      } else if (dropdownItems[nextIndex]) {
        dropdownItems[nextIndex].scrollIntoView({ block: "nearest" });
      }
    },
    [searchContentRef, arrowIndex, setArrowIndex],
  );

  const searchKeyboardShortcuts = useCallback(
    (e) => {
      const inputFocused = inputRef.current.id === document.activeElement.id;

      if (e.key === "/" && !inputFocused) {
        inputRef.current.focus();
        e.preventDefault();
      }

      if (inputFocused) {
        switch (e.key) {
          case "Escape":
            inputRef.current.blur();
            close();
            e.preventDefault();
            break;
          case "ArrowDown":
          case "ArrowUp":
            moveArrowIndex(e.key);
            e.preventDefault();
            break;
          case "Enter":
            const dropdownItems = searchContentRef.current
              .querySelector(".search-pane")
              .querySelectorAll(".dropdown-item");
            dropdownItems[arrowIndex].click();
            e.preventDefault();
            break;
          default:
          // do nothing
        }
      }
    },
    [inputRef, searchContentRef, arrowIndex, close, moveArrowIndex],
  );

  useLayoutEffect(() => {
    document.addEventListener("keydown", searchKeyboardShortcuts);
    return () => {
      document.removeEventListener("keydown", searchKeyboardShortcuts);
    };
  }, [searchKeyboardShortcuts]);

  useClickOutside(searchBarRef, close);

  return (
    <div
      className={`${inputValue.length > 0 && focus && "shadow"}`}
      ref={searchBarRef}
    >
      <form
        noValidate
        action=""
        autoComplete="off"
        role="search"
        className={`search-form d-flex align-items-center ${
          inputValue.length > 0 && focus && "open"
        }`}
      >
        <DropdownButton
          title={
            products[searchProduct]?.name || searchProduct || "All products"
          }
          aria-label="Search in"
          role="menu"
          className="select-product"
          size="lg"
          onSelect={onSearchProductChange}
        >
          <Dropdown.Item as="button" type="button" eventKey="">
            All products
          </Dropdown.Item>
          <Dropdown.Divider />
          {Object.entries(products)
            .filter((entry) => !entry[1].noSearch)
            .sort((a, b) => a[1].name.localeCompare(b[1].name))
            .map(([id, { name }]) => (
              <Dropdown.Item as="button" type="button" eventKey={id} key={id}>
                {name}
              </Dropdown.Item>
            ))}
        </DropdownButton>
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
          placeholder={"Search" + context}
          value={inputValue}
          onChange={onInputChange}
          onFocus={() => setFocus(true)}
          ref={inputRef}
        />
        <ClearButton
          onClick={onClear}
          className={`${inputValue.length === 0 && "d-none"}`}
        />
        <SlashIndicator query={inputValue} />
      </form>

      <div
        className={`dropdown-menu w-100 p-0 quick-search-container ${
          inputValue.length > 0 && focus && "show"
        }`}
      >
        <div
          className="search-content quick-search-content mb-1 mt-1"
          ref={searchContentRef}
        >
          <SearchPane arrowIndex={arrowIndex} />
        </div>
      </div>
    </div>
  );
};

const SearchBar = ({ searchProduct, searchVersion, className }) => {
  const [currentProduct, setCurrentProduct] = useState(searchProduct);

  const { algoliaIndex } = useSiteMetadata();
  const searchConfig = useMemo(() => {
    let facets = currentProduct
      ? [`product:${currentProduct}`]
      : Object.entries(products)
          .filter(([id, { noSearch }]) => noSearch)
          .map(([id]) => `product:-${id}`);
    if (searchVersion && searchProduct === currentProduct)
      facets.push("version:" + searchVersion);
    else facets.push("isLatest:true");

    return {
      hitsPerPage: 30,
      advancedSyntax: true,
      facetFilters: facets,
    };
  }, [currentProduct, searchProduct, searchVersion]);

  // use SSR provider just to trigger static rendering of search form. Speeds this up a LOT
  return (
    <div
      className={["global-search w-100 position-relative", className].join(" ")}
    >
      <InstantSearchSSRProvider initialResults={{}}>
        <InstantSearch
          searchClient={searchClient}
          indexName={algoliaIndex}
          insights={true}
          className="dropdown"
        >
          <Configure {...searchConfig} />
          <Search
            searchProduct={currentProduct}
            onSearchProductChange={setCurrentProduct}
          />
        </InstantSearch>
      </InstantSearchSSRProvider>
    </div>
  );
};

export default SearchBar;
