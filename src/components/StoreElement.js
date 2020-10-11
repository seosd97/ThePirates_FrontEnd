import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/StoreElement.scss';

const tagName = {
  'today-price': '오늘시세',
  'day-delivery': '당일배송',
};

const StoreElement = ({ storeData }) => {
  return (
    <Link to={`${storeData.label}`} className="store-element">
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
        <div className="store-tag-container">
          {storeData.tags.map((t, i) => {
            return (
              <span key={i} className="store-tag" data-value={t}>
                {tagName[t]}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

StoreElement.propTypes = {
  storeData: PropTypes.object,
};

export default StoreElement;
