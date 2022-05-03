import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import SearchList from "./shop-components/search-list";
import Footer from './global-components/footer';

const Search = () => {
  return (
    <div>
        <Navbar />
        <PageHeader headertitle="Search"/> 
        <SearchList />
        <Footer />
    </div>
  )
}

export default Search