import React from 'react';
import BreadcrumbSection from './BreadcrumbSection';
import FeatureSection from '../FeatureSection';

const Error = () => {
    return (
        <main className="main__content_wrapper">
            <BreadcrumbSection />
            <section className="error__section section--padding">
                <div className="container">
                    <div className="row row-cols-1">
                        <div className="col">
                            <div className="error__content text-center">
                                <img
                                    className="error__content--img display-block mb-50"
                                    src="/assets/img/other/404-thumb.webp"
                                    alt="error-img"
                                />
                                <h2 className="error__content--title">
                                    Opps ! We,ar Not Found This Page
                                </h2>
                                <p className="error__content--desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                                    animi aliquid minima assumenda.
                                </p>
                                <a className="error__content--btn primary__btn" href="/">
                                    Back To Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FeatureSection />
        </main>
    );
};

export default Error;