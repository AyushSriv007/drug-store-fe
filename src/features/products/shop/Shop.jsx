import BreadcrumbSection from './BreadcrumbSection';
import ShopByCategory from './ShopByCategory';
import SidebarCategories from './SidebarCategories';
import ProductPage from './ProductPage';
import FeatureSection from '../../../components/FeatureSection';


const Shop = () => {
    return (
        <main className="main__content_wrapper">
            <BreadcrumbSection />
            <ShopByCategory />
            <div class="shop__section section--padding pt-0">
                <div class="container">
                    <div class="row">
                        <SidebarCategories />
                        <ProductPage />
                    </div>
                </div>
            </div>
            <FeatureSection />
        </main>
    );
};

export default Shop;