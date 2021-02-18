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

const getPrevAndNextLinksTree = (navTree, path, depthLimit) => {
  const result = { prevLink: null, nextLink: null };

  const flatTree = [];
  flattenTree(flatTree, navTree.items);

  console.log(flatTree);
  const index = flatTree.findIndex((navItem) => navItem.path === path);
  const pathAtDepthLimit = getBaseUrl(path, depthLimit + 1);

  if (index > 0) {
    const potentialPrev = flatTree[index - 1];
    if (potentialPrev.path.includes(pathAtDepthLimit)) {
      result.prevLink = potentialPrev;
    }
  }
  if (index < flatTree.length - 1) {
    const potentialNext = flatTree[index + 1];
    if (potentialNext.path.includes(pathAtDepthLimit)) {
      result.nextLink = potentialNext;
    }
  }

  return result;
};

const flattenTree = (flatArray, nodes) => {
  nodes.forEach((node) => {
    const { items, ...newNode } = node;
    flatArray.push(newNode);
    flattenTree(flatArray, items || []);
  });
};

const PrevNext = ({ prevNext, navTree, navLinks, path, depthLimit = 3 }) => {
  console.log(prevNext);

  const baseUrl = getBaseUrl(path, 4);
  const sortedLinks = filterAndSortLinks(navLinks, baseUrl);
  let { prevLink, nextLink } = getPrevAndNextLinks(sortedLinks, path);

  if (prevNext.prev?.path) prevLink = prevNext.prev;
  if (prevNext.next?.path) nextLink = prevNext.next;

  console.log(getPrevAndNextLinks(sortedLinks, path));
  // console.log(prevNext);
  // console.log(getPrevAndNextLinksTree(navTree, path, depthLimit));

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
