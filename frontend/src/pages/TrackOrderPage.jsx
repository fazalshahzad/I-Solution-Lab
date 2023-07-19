import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import TrackOrder from '../components/Profile/TrackOrder';

const TrackOrderPage = () => {
  return (
    <div>
      <Helmet>
        <title>Track Your Order Page</title>
        {/* Add other meta tags as needed */}
      </Helmet>
      <Header />
      <TrackOrder />
      <Footer />
    </div>
  );
};

export default TrackOrderPage;
