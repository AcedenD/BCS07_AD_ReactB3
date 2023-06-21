import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { content } = this.props;
    console.log(content);
    return (
      <div className="container">
        {/* <div className="row gap-5">
          <div className="col-4">
            <img src={`${content.image}`} alt="" />
          </div>
          <div className="col-6 d-flex flex-column gap-5">
            <h1>{content.name}</h1>
            <h2> ${content.price}</h2>
            <p>{content.description}</p>
            <p>{content.shortDescription}</p>
          </div>
        </div> */}
        <div
          className="modal fade modal-lg"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Shoe Detail
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row gap-1">
                  <div className="col-5 d-flex justify-content-center align-item-center">
                    <img className="w-75" src={`${content.image}`} alt="" />
                  </div>
                  <div className="col-6 d-flex flex-column gap-2">
                    <h1>{content.name}</h1>
                    <h2> ${content.price}</h2>
                    <p>{content.description}</p>
                    <p>{content.shortDescription}</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
