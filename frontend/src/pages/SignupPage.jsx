import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Signup from '../components/Signup/Signup';

const SignupPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Sign Up Page</title>
        {/* Add other meta tags as needed */}
      </Helmet>
      <Signup />
    </div>
  );
};

export default SignupPage;
