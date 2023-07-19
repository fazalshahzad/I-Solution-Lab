import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopCreate from '../components/Shop/ShopCreate';

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const { isSeller, seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if (isSeller === true) {
      navigate(`/shop/${seller._id}`);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Create Shop Page</title>
        {/* Add other meta tags as needed */}
      </Helmet>
      <ShopCreate />
    </div>
  );
};

export default ShopCreatePage;
