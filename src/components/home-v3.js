import React from 'react';
import Navbar from './global-components/navbar-v3';

import Banner from './section-components/banner-v3';
import ProductSlider from './section-components/product-slider-v3';
import Video from './section-components/video-v1';
import FeaturedItem from './section-components/featured-item-v1';
// import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';


const Home_V3 = () => {
    return <div>
        <Navbar />
        <Banner />
        <ProductSlider />
        <Video />
        <FeaturedItem />
        {/* <BlogSlider sectionClass="pt-120"/> */}
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Home_V3

