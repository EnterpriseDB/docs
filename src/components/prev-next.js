import React from 'react';
import { Link } from './';
import { filterAndSortLinks, getBaseUrl } from '../constants/utils';

const getPrevAndNextLinks = (links, path) => {
  let result = { prevLink: null, nextLink: null };
  const idx = links.findIndex((element, index, array) => {
    return element.path === path;
  });
  if (idx > 0) {
    result.prevLink = links[idx - 1];
  }
  if (idx < links.length - 1) {
    result.nextLink = links[idx + 1];
  }
  return result;
};

const PrevNext = ({ navLinks, path }) => {
  const baseUrl = getBaseUrl(path, 4);
  const sortedLinks = filterAndSortLinks(navLinks, baseUrl);
  const { prevLink, nextLink } = getPrevAndNextLinks(sortedLinks, path);

  return (
    <div className="d-flex justify-content-between mt-5">
      <div className="max-w-40">
        {prevLink && (
          <Link
            to={prevLink.path}
            className="p-3 d-inline-block btn btn-outline-primary text-left"
          >
            <h5 className="m-0">&larr; Prev</h5>
            <p className="m-0 small balance-text">{prevLink.title}</p>
          </Link>
        )}
      </div>
      <div className="max-w-40">
        {nextLink && (
          <Link
            to={nextLink.path}
            className="p-3 d-inline-block btn btn-outline-primary text-right"
          >
            <h5 className="m-0">Next &rarr;</h5>
            <p className="m-0 small balance-text">{nextLink.title}</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PrevNext;
