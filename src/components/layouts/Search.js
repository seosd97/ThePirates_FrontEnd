import React from 'react';
import propTypes from 'prop-types';

const Search = ({ width, height, onSubmit, placeholder }) => {
  const searchStyle = {
    width: width,
    height: height,
  };

  return (
    <div id="layout-search" style={searchStyle}>
      <div id="input-form">
        <input type="text" placeholder={placeholder} />
        <button>검색</button>
      </div>
    </div>
  );
};

Search.propTypes = {
  width: propTypes.string,
  height: propTypes.string,
  onSubmit: propTypes.func,
  placeholder: propTypes.string,
};

Search.defaultProps = {
  width: '100%',
  height: '40px',
  onSubmit: null,
  placeholder: 'search',
};

export default Search;
