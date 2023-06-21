import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    console.log(this.props);
    let { productsData } = this.props;
    // console.log(productsData);
    return (
      <div>
        <div className="container">
          <div className="row">
            {productsData.map((product, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-6 p-2  d-flex align-items-stretch"
                >
                  <ProductItem
                    item={product}
                    setStateModal={this.props.setStateModal}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
