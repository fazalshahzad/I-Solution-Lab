import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import CheckoutSteps from '../components/Checkout/CheckoutSteps';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import Payment from "../components/Payment/Payment";

const PaymentPage = () => {
  return (
    <div className='w-full min-h-screen bg-[#f6f9fc]'>
      <Helmet>
        <title>Payment Page</title>
        <meta
          name="description"
          content="Enter your payment information and complete the checkout process on the payment page."
        />
        {/* Add other meta tags as needed */}
      </Helmet>
      <Header />
      <br />
      <br />
      <CheckoutSteps active={2} />
      <Payment />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default PaymentPage;
