import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/StoreElement.scss';

const StoreElement = ({ storeData }) => {
  return (
    <Link to="/" className="store-element">
      <div className="store-header">
        <div className="store-title">
          <div className="store-name">
            <h2>{storeData.label}</h2>
            <span className="market-name">{storeData.market}</span>
          </div>
          <div className="store-desc">{storeData.description}</div>
        </div>
        <div className="store-info">
          <div className="info-rate">★ {storeData.summary.rating}</div>
          <div className="info-status">{storeData.state === 'OPEN' ? '영업 중' : '영업종료'}</div>
        </div>
      </div>
      <div className="store-thumb">
        <img src={storeData.thumbnail} alt="thumbnail"></img>
      </div>
    </Link>
  );
};

StoreElement.propTypes = {
  storeData: PropTypes.object,
};

export default StoreElement;
