import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopLogin from '../components/Shop/ShopLogin';

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller, isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/dashboard`);
    }
  }, [isLoading, isSeller]);

  return (
    <div>
      <Helmet>
        <title>Login to Shop Page</title>
        {/* Add other meta tags as needed */}
      </Helmet>
      <ShopLogin />
    </div>
  );
};

export default ShopLoginPage;
