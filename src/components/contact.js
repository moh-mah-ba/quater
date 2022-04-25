import React from 'react';
import NavbarContact from './global-components/navbarContact';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import Footer from './global-components/footer';

const ContactV1 = () => {
    return <div>
        <NavbarContact />
        <PageHeader headertitle="Contact Us" subheader="Contact" />
        <ContactInfo />
        <Footer />
    </div>
}

export default ContactV1

