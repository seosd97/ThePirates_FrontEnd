import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div id="content">{children}</div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
