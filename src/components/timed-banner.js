import React from "react";

const TimedBanner = ({ fromDate = 0, toDate = 0, children }) => {
  if (Date.now() >= (fromDate || 0) && Date.now() <= (toDate || Date.now())) {
    return (
      <div class="alert alert-warning m-0" role="alert">
        {children}
      </div>
    );
  }
  return null;
};

export default TimedBanner;
