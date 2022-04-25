import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';

import AddListing from './section-components/add-listing';
// import AddListingTest from "./section-components/AddListingTest";
// import Footer from './global-components/footer';

const AddListing_V1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Add Listing" /> 
        {/* <AddListingTest /> */}
        <AddListing />
        {/* <Footer /> */}
    </div>
}

export default AddListing_V1

