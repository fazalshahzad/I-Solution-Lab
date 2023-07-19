import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import Login from '../components/Login/Login.jsx';

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]); // Add isAuthenticated and navigate to the dependency array

  return (
    <div>
      <Helmet>
        <title>Login Page</title>
        <meta
          name="description"
          content="This is the login page description."
        />
        {/* Add other meta tags as needed */}
      </Helmet>
      <Login />
    </div>
  );
};

export default LoginPage;
