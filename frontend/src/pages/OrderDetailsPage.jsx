import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import UserOrderDetails from "../components/UserOrderDetails";

const OrderDetailsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Order Details Page</title>
        <meta
          name="description"
          content="View details of your order and track its status on the order details page."
        />
        {/* Add other meta tags as needed */}
      </Helmet>
      <Header />
      <UserOrderDetails />
      <Footer />
    </div>
  );
}

export default OrderDetailsPage;
