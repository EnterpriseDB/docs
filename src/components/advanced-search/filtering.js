import React, { useEffect } from 'react';
import { Badge } from 'react-bootstrap';
import {
  connectMenu,
  connectCurrentRefinements,
  connectRefinementList,
} from 'react-instantsearch-dom';
import { products } from '../../constants/products';
import { capitalize } from '../../constants/utils';

const typeToContentType = {
  doc: { name: 'Documentation' },
  guide: { name: 'Guides' },
};

const labelForItem = (item, translation) => {
  return translation[item.label]
    ? translation[item.label].name
    : capitalize(item.label);
};

const versionSort = (a, b) => {
  return b.label.localeCompare(a.label, undefined, { numeric: true });
};

const RadioInput = ({
  labelText,
  badgeNumber,
  showBadge,
  id,
  name,
  onChange,
  checked,
}) => (
  <div className="form-check">
    <input
      type="radio"
      className="form-check-input"
      id={id}
      name={name}
      onChange={onChange}
      checked={checked}
      aria-label={id}
    />
    <label htmlFor={id} className="form-check-label">
      {labelText}
      <Badge
        variant="secondary"
        className="ml-2 align-middle search-filter-badge"
      >
        {showBadge && badgeNumber}
      </Badge>
    </label>
  </div>
);

const RadioRefinement = ({
  attribute,
  heading,
  items,
  queryActive,
  refine,
  show,
  sortFunction,
  translation = {},
}) => {
  if (items == null) {
    return null;
  }

  const radioName = `radio-refinement-${attribute}`;
  const refinedItem = items.find((item) => item.isRefined);
  const sortedItems = items.sort(
    sortFunction ||
      ((a, b) => {
        const aLabel = labelForItem(a, translation);
        const bLabel = labelForItem(b, translation);
        return aLabel.toLowerCase() > bLabel.toLowerCase() ? 1 : -1;
      }),
  );

  return (
    <div className={`mb-4 pl-1 ${!show && 'd-none'}`}>
      <div className="mb-2 font-weight-bold text-muted text-uppercase small">
        {heading || capitalize(attribute)}
      </div>
      <RadioInput
        id={`radio-refinement-${attribute}-all`}
        name={radioName}
        labelText="All"
        badgeNumber={items.reduce((total, item) => total + item.count, 0)}
        showBadge={queryActive}
        onChange={() => refine('')}
        checked={!refinedItem}
      />
      {sortedItems.map((item) => (
        <RadioInput
          key={item.label}
          id={`radio-refinement-${attribute}-${item.label}`}
          name={radioName}
          labelText={labelForItem(item, translation)}
          badgeNumber={item.count}
          showBadge={queryActive}
          onChange={() => refine(item.label)}
          checked={refinedItem === item}
        />
      ))}
    </div>
  );
};

/* eslint-disable no-unused-vars */
const ContentTypeRefinement = connectMenu(
  /* eslint-enable */
  ({ items, currentRefinement, refine, queryActive }) => (
    <RadioRefinement
      attribute="type"
      items={items}
      queryActive={queryActive}
      refine={refine}
      show={true}
      translation={typeToContentType}
    />
  ),
);

const SingleFacetRefinement = connectRefinementList(
  ({
    items,
    refine,
    queryActive,
    show,
    attribute,
    sortFunction,
    hideIfEmpty = false,
  }) => {
    const empty = !items || items.length === 0;

    return (
      <RadioRefinement
        attribute={attribute}
        items={items}
        queryActive={queryActive}
        refine={refine}
        show={show && !(hideIfEmpty && empty)}
        translation={products}
        sortFunction={sortFunction}
      />
    );
  },
);

const ClearRefinements = connectCurrentRefinements(({ items, refine }) => {
  const clear = (e) => {
    refine(items);
    e.preventDefault();
  };

  if (items.length > 0) {
    return (
      <a href="/" onClick={clear}>
        Clear Filters
      </a>
    );
  }
  return null;
});

export const AdvancedSearchFiltering = connectCurrentRefinements(
  ({ items, queryActive, refine }) => {
    const showProductVersionFilters = !items.find((item) => {
      return item.attribute === 'type' && item.currentRefinement === 'guide';
    });

    const productFilterApplied = items.some(
      (item) => item.attribute === 'product',
    );
    const versionFilterApplied = items.some(
      (item) => item.attribute === 'version',
    );

    // if we don't have a product filter applied, wipe any version filters
    useEffect(() => {
      if (versionFilterApplied && !productFilterApplied) {
        const versionFilter = items.find(
          (item) => item.attribute === 'version',
        );
        if (versionFilter.items[0]) {
          refine(versionFilter.items[0].value);
        }
      }
    });

    return (
      <>
        <SingleFacetRefinement
          attribute="product"
          limit={30}
          show={showProductVersionFilters}
          queryActive={queryActive}
        />
        <SingleFacetRefinement
          attribute="version"
          limit={30}
          show={showProductVersionFilters && productFilterApplied}
          queryActive={queryActive}
          hideIfEmpty={!versionFilterApplied}
          sortFunction={versionSort}
        />
        <ClearRefinements />
      </>
    );
  },
);
