import React from 'react'; 
import BreadcrumbSection from './BreadcrumbSection';
import ContactSection from './ContactSection';
import BrandSection from '../about/BrandSection';
import FeatureSection from '../FeatureSection';
import ContactMap from './ContactMap';

const Contact = () => {
    return (
        <main className="main__content_wrapper">
            <BreadcrumbSection />
            <ContactSection />
            <BrandSection />
            <ContactMap />
            <FeatureSection />
        </main>
    );
};

export default Contact;