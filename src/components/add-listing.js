import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AddListing from './section-components/add-listing';


const AddListing_V1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Add Listing" /> 
        <AddListing />
    </div>
}

export default AddListing_V1

