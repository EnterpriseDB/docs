import React from "react";
import { Link } from "./";

const PrevNext = ({ prevNext }) => {
  let prevLink = prevNext.prev;
  let nextLink = prevNext.next;
  let upLink = prevNext.up;

  return (
    <div className="d-flex justify-content-between mt-5 d-print-none">
      <div className="max-w-40">
        {prevLink && (
          <Link
            to={prevLink.path}
            className="p-3 d-inline-block btn btn-outline-primary text-start"
          >
            <h5 className="m-0">&larr; Prev</h5>
            <p className="m-0 small balance-text">{prevLink.title}</p>
          </Link>
        )}
      </div>
      <div className="max-w-40">
        {upLink && (
          <Link
            to={upLink.path}
            className="p-3 d-inline-block btn btn-outline-primary text-start"
          >
            <h5 className="m-0">&uarr; Up</h5>
            <p className="m-0 small balance-text">{upLink.title}</p>
          </Link>
        )}
      </div>
      <div className="max-w-40">
        {nextLink && (
          <Link
            to={nextLink.path}
            className="p-3 d-inline-block btn btn-outline-primary text-end"
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
