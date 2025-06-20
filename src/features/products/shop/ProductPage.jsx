import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../productsApi';

const ProductPage = () => {
    const [viewMode, setViewMode] = useState('grid');
    const { data, isLoading } = useGetProductsQuery();
    if (isLoading) return <p>Loading...</p>;

    const products = data?.data || [];
    return (
        <div className="shop-page col-xl-9 col-lg-8 shop-col-width-lg-8">
            <div className="shop__product--wrapper position__sticky">
                <div className="shop__header d-flex align-items-center justify-content-between mb-30">
                    <div className="product__view--mode d-flex align-items-center">
                        <button className="widget__filter--btn d-flex d-lg-none align-items-center">
                            <svg className="widget__filter--btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="28" d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80" />
                                <circle cx="336" cy="128" r="28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="28" />
                                <circle cx="176" cy="256" r="28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="28" />
                                <circle cx="336" cy="384" r="28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="28" />
                            </svg>
                            <span className="widget__filter--btn__text">Filter</span>
                        </button>
                        <div className="product__view--mode__list product__short--by align-items-center d-flex">
                            <label className="product__view--label">Prev Page :</label>
                            <div className="select shop__header--select">
                                <select className="product__view--select">
                                    <option value="1" selected>65</option>
                                    <option value="2">40</option>
                                    <option value="3">42</option>
                                    <option value="4">57</option>
                                    <option value="5">60</option>
                                </select>
                            </div>
                        </div>
                        <div className="product__view--mode__list product__short--by align-items-center d-flex">
                            <label className="product__view--label">Sort By :</label>
                            <div className="select shop__header--select">
                                <select className="product__view--select">
                                    <option value="1" selected>Sort by latest</option>
                                    <option value="2">Sort by popularity</option>
                                    <option value="3">Sort by newness</option>
                                    <option value="4">Sort by rating</option>
                                </select>
                            </div>
                        </div>
                        <div className="product__view--mode__list">
                            <div className="product__tab--one product__grid--column__buttons d-flex justify-content-center">
                                <button className="product__grid--column__buttons--icons active" aria-label="grid btn" onClick={() => setViewMode('grid')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 9 9">
                                        <rect width="4" height="4" x="0" y="0" fill="currentColor" />
                                        <rect width="4" height="4" x="0" y="5" fill="currentColor" />
                                        <rect width="4" height="4" x="5" y="0" fill="currentColor" />
                                        <rect width="4" height="4" x="5" y="5" fill="currentColor" />
                                    </svg>
                                </button>
                                <button className="product__grid--column__buttons--icons" aria-label="list btn" onClick={() => setViewMode('list')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 13 8">
                                        <rect x="0" y="0" width="3" height="2" fill="currentColor" />
                                        <rect x="4" y="0" width="9" height="2" fill="currentColor" />
                                        <rect x="0" y="3" width="3" height="2" fill="currentColor" />
                                        <rect x="4" y="3" width="9" height="2" fill="currentColor" />
                                        <rect x="0" y="6" width="3" height="2" fill="currentColor" />
                                        <rect x="4" y="6" width="9" height="2" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="product__showing--count">Showing 1–9 of 21 results</p>
                </div>

                {/* Product Grid or List */}
                <div className="tab_content">
                    {viewMode === 'grid' ? (
                        <div id="product_grid" className="tab_pane active show">
                            <div className="row mb--n30">
                                {products.map(product => (
                                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 custom-col mb-30">
                                        <article className="product__card">
                                            <div className="product__card--thumbnail">
                                                <Link className="product__card--thumbnail__link display-block" to={`/product-details/${product.id}`}>
                                                    <img className="product__card--thumbnail__img product__primary--img" src={`${process.env.REACT_APP_API_BASE_URL}${product.image_list?.[0]?.file_name}`} alt="product-img" />
                                                    <img className="product__card--thumbnail__img product__secondary--img" src={`${process.env.REACT_APP_API_BASE_URL}${product.image_list?.[1]?.file_name}`} alt="product-img" />
                                                </Link>
                                                <span className="product__badge">-{product.discounted_percentage}%</span>
                                                <ul className="product__card--action">
                                                    <li className="product__card--action__list">
                                                        <a className="product__card--action__btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#examplemodal" href="javascript:void(0)">
                                                            <svg class="product__card--action__btn--svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z" fill="currentColor"></path>
                                                            </svg>
                                                            <span className="visually-hidden">Quick View</span>
                                                        </a>
                                                    </li>
                                                    <li className="product__card--action__list">
                                                        <a className="product__card--action__btn" title="Compare" href="/compare">
                                                            <svg class="product__card--action__btn--svg" width="17" height="17" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z" fill="currentColor" />
                                                            </svg>
                                                            <span className="visually-hidden">Compare</span>
                                                        </a>
                                                    </li>
                                                    <li className="product__card--action__list">
                                                        <a className="product__card--action__btn" title="Wishlist" href="/wishlist">
                                                            <svg class="product__card--action__btn--svg" width="18" height="18" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z" fill="currentColor" />
                                                            </svg>
                                                            <span className="visually-hidden">Wishlist</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="product__add--to__card">
                                                    <a className="product__card--btn" title="Add To Cart" href="/cart">
                                                        Add to Cart
                                                        <svg width="17" height="15" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z" fill="currentColor" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__card--content text-center">
                                                <ul className="rating product__card--rating d-flex justify-content-center">
                                                    <li class="rating__list">
                                                        <span class="rating__icon">
                                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                    </li>
                                                    <li class="rating__list">
                                                        <span class="rating__icon">
                                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                    </li>
                                                    <li class="rating__list">
                                                        <span class="rating__icon">
                                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                    </li>
                                                    <li class="rating__list">
                                                        <span class="rating__icon">
                                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                    </li>
                                                    <li class="rating__list">
                                                        <span class="rating__icon">
                                                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                                                            </svg>
                                                        </span>
                                                    </li>
                                                    <li><span className="rating__review--text">(126) Review</span></li>
                                                </ul>
                                                <h3 className="product__card--title"><Link to={`/product/${product.id}`} href="/product-details">{product.name}</Link></h3>
                                                <div className="product__card--price">
                                                    <span className="current__price">$₹{product.discounted_price}</span>
                                                    <span className="old__price"> ${product.price}</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div id="product_list" className="tab_pane active show">
                            <div className="product__section--inner product__section--style3__inner">
                                <div className="row row-cols-1 mb--n30">
                                    <div className="col mb-30">
                                        {products.map(product => (
                                        <div className="product__card product__list d-flex align-items-center">
                                            <div className="product__card--thumbnail product__list--thumbnail">
                                                <a className="product__card--thumbnail__link display-block" href="/product-details">
                                                    <img className="product__card--thumbnail__img product__primary--img" src={`${process.env.REACT_APP_API_BASE_URL}${product.image_list?.[0]?.file_name}`} alt="product-img" />
                                                    <img className="product__card--thumbnail__img product__secondary--img" src={`${process.env.REACT_APP_API_BASE_URL}${product.image_list?.[1]?.file_name}`} alt="product-img" />
                                                </a>
                                                <span className="product__badge">-{product.discounted_percentage}%</span>
                                            </div>
                                            <div className="product__card--content product__list--content">
                                                <h3 className="product__card--title">
                                                    <Link to={`/product-details/${product.id}`}>{product.name}</Link>
                                                </h3>

                                                <ul className="rating product__card--rating d-flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <li className="rating__list" key={i}>
                                                            <span className="rating__icon">
                                                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                        </li>
                                                    ))}
                                                    <li>
                                                        <span className="rating__review--text">(106) Review</span>
                                                    </li>
                                                </ul>

                                                <div className="product__list--price">
                                                    <span className="current__price">${product.discounted_price}</span>
                                                    <span className="old__price"> ${product.price}</span>
                                                </div>
                                                <p className="product__card--content__desc mb-15">
                                                    {product.description}
                                                </p>
                                                <a className="product__card--btn primary__btn" href="/cart">+ Add to cart</a>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


                <div className="pagination__area">
                    <nav className="pagination justify-content-center">
                        <ul className="pagination__wrapper d-flex align-items-center justify-content-center">
                            <li className="pagination__list">
                                <a href="#" className="pagination__item--arrow link">
                                    &lt;
                                    <span className="visually-hidden">Previous Page</span>
                                </a>
                            </li>
                            <li className="pagination__list"><span className="pagination__item pagination__item--current">1</span></li>
                            <li className="pagination__list"><a href="#" className="pagination__item link">2</a></li>
                            <li className="pagination__list"><a href="#" className="pagination__item link">3</a></li>
                            <li className="pagination__list"><a href="#" className="pagination__item link">4</a></li>
                            <li className="pagination__list">
                                <a href="#" className="pagination__item--arrow link">
                                    &gt;
                                    <span className="visually-hidden">Next Page</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

