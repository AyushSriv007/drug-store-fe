import React from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbSection = ({ items = [] }) => {
  return (
    <div className="breadcrumb__section breadcrumb__bg">
      <div className="container">
        <div className="row row-cols-1">
          <div className="col">
            <div className="breadcrumb__content text-center">
              <ul className="breadcrumb__content--menu d-flex justify-content-center">
                {items.map((item, index) => (
                  <li key={index} className="breadcrumb__content--menu__items">
                    {item.path ? (
                      <Link to={item.path}>{item.label}</Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbSection;
