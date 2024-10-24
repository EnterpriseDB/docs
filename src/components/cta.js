import React from "react";

const CTAAction = ({ url, text, title, columnbreak }) => {
  return (
    <div
      className={"col py-3 d-flex justify-content-center " + columnbreak + "-4"}
    >
      <a
        href={url}
        className="btn btn-lg btn-primary px-4 text-light text-nowrap text-center"
        title={title}
      >
        {text}
      </a>
    </div>
  );
};

const CTA = ({ actions, image, alt, children }) => {
  actions = actions.length ? actions : [actions];
  return (
    <div className="container mt-4 mb-4 border border-primary">
      <div className="row bg-light no-gutters">
        {image && (
          <div className="col-auto col-md-4 text-center px-3 py-3">
            <img
              src={image}
              alt={alt}
              style={{ minWidth: "25%", maxWidth: "75%", height: "auto" }}
              className="img-fluid"
            />
          </div>
        )}
        <div
          className={
            "col-auto text-center px-3 py-3" + (image ? " col-md-8" : "")
          }
        >
          <div className="container align-items-center">
            <div className="row bg-light no-gutters">{children}</div>
          </div>
          <div className="row bg-light justify-content-around">
            {actions.map((a) => (
              <CTAAction
                url={a.url}
                text={a.text}
                title={a.title}
                columnbreak={image ? "col-xl" : "col-lg"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
