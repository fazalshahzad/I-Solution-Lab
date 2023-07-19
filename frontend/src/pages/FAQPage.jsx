import React from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const FAQPage = () => {
  return (
    <div>
      <Helmet>
        <title>FAQ - Frequently Asked Questions</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about our products and services."
        />
        {/* Add other meta tags as needed */}
      </Helmet>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  // ... Your Faq component code remains unchanged
};

export default FAQPage;
