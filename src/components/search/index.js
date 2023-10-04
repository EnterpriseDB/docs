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
  const { clear, refine, query } = useSearchBox();
  const searchBarRef = useRef(null);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);
  const searchContentRef = useRef(null);
  const [arrowIndex, setArrowIndex] = useState(0);
  const [inputValue, setInputValue] = useState(query);
  const context = searchProduct
    ? " " + (products[searchProduct]?.name || searchProduct)
    : "";

  useEffect(() => {
    setInputValue(query);
  }, [query]);

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
          {Object.entries(products).map(([id, { name }]) => (
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
          onClick={clear}
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

const SearchBar = ({ searchProduct }) => {
  const [currentProduct, setCurrentProduct] = useState(searchProduct);

  const { algoliaIndex } = useSiteMetadata();
  const searchConfig = useMemo(() => {
    return {
      hitsPerPage: 30,
      advancedSyntax: true,
      filters: currentProduct ? `product:"${currentProduct}"` : "",
    };
  }, [currentProduct]);

  // use SSR provider just to trigger static rendering of search form. Speeds this up a LOT
  return (
    <div className="global-search w-100 position-relative">
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
