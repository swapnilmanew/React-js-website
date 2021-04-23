import React from "react";

const LeftText = (props) => {
  return (
    <>
      <div className="container-fluid bg-light py-3">
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-6 order-md-1 m-auto">
              <h1 className="display-4 fw-bold">{props.title}</h1>
              <hr className="hr-row" />
              <p className="fs-5">{props.text}</p>
            </div>
            <div className="col-12 col-sm-10 col-md-6 order-md-2 m-auto">
              <img src={props.img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftText;
