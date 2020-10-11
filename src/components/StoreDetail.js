import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import dataAPI from '../dataAPI';
import '../styles/StoreDetail.scss';

const tagName = {
  'today-price': '오늘시세',
  'day-delivery': '당일배송',
};

const StoreDetail = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [storeData, setStoreData] = useState({});

  useEffect(() => {
    dataAPI.getDataByName(match.params.store_name).then((data) => {
      setStoreData(data);
      setIsLoading(false);
    });
  }, [isLoading]);
  return (
    <main>
      {!isLoading && (
        <React.Fragment>
          <section id="detail-header">
            <div
              id="prev-button"
              onClick={() => {
                window.history.back();
              }}
            >
              {'<'}
            </div>
            <span id="store-name">
              {storeData.label} | <span>{storeData.market}</span>
            </span>
          </section>
          <section id="detail-content">
            <img src={storeData.thumbnail}></img>
            <div className="store-tag-container">
              {storeData.tags.map((t, i) => {
                return (
                  <span key={i} className="store-tag" data-value={t}>
                    {tagName[t]}
                  </span>
                );
              })}
            </div>
          </section>
        </React.Fragment>
      )}
    </main>
  );
};

StoreDetail.propTypes = {
  match: propTypes.any,
};

export default StoreDetail;
