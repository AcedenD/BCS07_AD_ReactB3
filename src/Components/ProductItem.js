import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item, setStateModal } = this.props;
    // console.log(item);
    return (
      <div>
        <div class="card h-100">
          <div>
            <img className="card-img-top" src={item.image} alt="Title" />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">$ {item.price}</p>
              <p>{item.shortDescription}</p>
              <button
                onClick={() => {
                  setStateModal(item.id);
                }}
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                View More Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
