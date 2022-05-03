import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import EditListing from './section-components/edit-listing';


const EditLsting_V1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Edit Listing" /> 
        <EditListing />
    </div>
}

export default EditLsting_V1

