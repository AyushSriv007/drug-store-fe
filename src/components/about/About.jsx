import React from 'react';
import BreadcrumbSection from './BreadcrumbSection';
import AboutSection from './AboutSection';
import CounterupBanner from './CounterupBanner';
import TeamMembers from './TeamMembers';
import TestimonialSection from '../TestimonialSection';
import BrandSection from './BrandSection';

const About = () => {
  return (
    <main className="main__content_wrapper">
      <BreadcrumbSection />
      <AboutSection />
      <CounterupBanner />
      <TeamMembers />
      <TestimonialSection />
      <BrandSection />
    </main>
  );
};

export default About;