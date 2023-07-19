import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import Header from '../components/Layout/Header';
import Hero from '../components/Route/Hero/Hero';
import Categories from '../components/Route/Categories/Categories';
import BestDeals from '../components/Route/BestDeals/BestDeals';
import FeaturedProduct from '../components/Route/FeaturedProduct/FeaturedProduct';
import Events from '../components/Events/Events';
import Sponsored from '../components/Route/Sponsored';
import Footer from '../components/Layout/Footer';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>I Solution Traders </title>
        <meta
          name="description"
          content="Welcome to iSolution's online store. Browse our categories, check out the best deals, and find featured products."
        />
        <meta name="keywords" content="iSolution, iSolutionLab, iSolutionTraders, online store, products, deals, featured products" />
        {/* Add other meta tags as needed */}
      </Helmet>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;
