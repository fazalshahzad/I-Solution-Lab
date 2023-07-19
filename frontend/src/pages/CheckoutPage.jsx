import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import Header from '../components/Layout/Header';
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Checkout from "../components/Checkout/Checkout";
import Footer from '../components/Layout/Footer';

const CheckoutPage = () => {
  return (
    <div>
      <Helmet>
        <title>Checkout Page</title>
        <meta
          name="description"
          content="This is the checkout page description."
        />
        {/* Add other meta tags as needed */}
      </Helmet>
      <Header />
      <br />
      <br />
      <CheckoutSteps active={1} />
      <Checkout />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
