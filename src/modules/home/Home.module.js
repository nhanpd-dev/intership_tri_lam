import React from 'react';
import { Link } from 'react-router-dom';

const HomeModule = () => {
  return (
    <>
      HOME MODULE <Link to='/products'>go to products</Link>
    </>
  );
};

export default HomeModule;
