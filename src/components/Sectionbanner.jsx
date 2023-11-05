import React from "react";

function Sectionbanner(props) {
  return (
    <>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold">{props.data.header}</h1>
          <h3 className="fw-normal text-muted mb-3">
            {props.data.description}
          </h3>
        </div>
      </div>
    </>
  );
}

export default Sectionbanner;
