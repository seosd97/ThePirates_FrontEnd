import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const Banner = ({ bannerDatas, width, height, interval }) => {
  const rootStyle = {
    width: width,
    height: height,
  };

  const [content, setContent] = useState(0);
  // setTimeout(() => setContent('2'), interval * 1000);

  return (
    <section id="layout-banner" style={rootStyle}>
      <Link to={`/${bannerDatas[content].uri}`} id="banner-comment" style={{ lineHeight: height }}>
        {`${bannerDatas[content].label} `}
        <span id="price">{bannerDatas[content].price}</span>
        {` ${bannerDatas[content].comment}`}
      </Link>
      <div id="open-button">˅</div>
    </section>
  );
};

Banner.defaultProps = {
  bannerDatas: [],
  width: '100%',
  height: '40px',
  interval: 1,
};

Banner.propTypes = {
  bannerDatas: propTypes.array,
  width: propTypes.string,
  height: propTypes.string,
  interval: propTypes.number,
};

export default Banner;
