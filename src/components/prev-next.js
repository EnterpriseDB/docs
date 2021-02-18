import React from 'react';
import { Link } from './';

const PrevNext = ({ prevNext, path, depth, depthLimit = 3 }) => {
  let prevLink = prevNext.prev;
  let nextLink = prevNext.next;
  if (depth <= depthLimit) prevLink = null;
  if ((nextLink?.depth || 0) <= depthLimit) nextLink = null;

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
