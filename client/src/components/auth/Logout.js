import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Logout = () => {
  const authContext = useContext(AuthContext);
  const { logout, isAuthenticated } = authContext;

  useEffect(() => {
    logout();
  }, []);
  return (
    <div>
      {' '}
      <h2>You're successfully logged out. Thanks for visiting. </h2>
      <h3>
        {' '}
        Click <a href='/login'>here</a> to login again!!
      </h3>
      <h3>
        {' '}
        Don't forget to checkout <a href='/about'>about </a> us. And share your
        feedback/comments/queries on the email id.
      </h3>
    </div>
  );
};

export default Logout;
