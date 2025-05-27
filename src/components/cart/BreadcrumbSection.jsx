import React from 'react';

const BreadcrumbSection = () => {
  return (
    <div className="breadcrumb__section breadcrumb__bg">
      <div className="container">
        <div className="row row-cols-1">
          <div className="col">
            <div className="breadcrumb__content text-center">
              <ul className="breadcrumb__content--menu d-flex justify-content-center">
                <li className="breadcrumb__content--menu__items">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb__content--menu__items">
                  <span>Shopping Cart</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbSection;
