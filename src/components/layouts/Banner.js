import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

let rollTimer;

const toggleBanner = (e) => {
  const root = document.getElementById('layout-banner');

  root.classList.contains('opened')
    ? root.classList.remove('opened')
    : root.classList.add('opened');
};

const useContentIndex = (isopen, bannerDatas, interval) => {
  const [content, setContent] = useState(0);

  if (isopen && rollTimer !== null) {
    clearTimeout(rollTimer);
    rollTimer = null;
    setContent(-1);
  }

  if (!isopen && rollTimer === null) {
    rollTimer = setTimeout(() => {
      setContent((prevState) => {
        let value = prevState;
        if (value + 1 >= bannerDatas.length) {
          value = -1;
        }
        return ++value;
      });
    });
  }

  useEffect(() => {
    let index = content + 1;
    if (index === bannerDatas.length) {
      index = 0;
    }

    rollTimer = setTimeout(() => {
      setContent(index);
    }, interval * 1000);

    return () => {
      clearTimeout(rollTimer);
    };
  }, [content]);

  return content;
};

const Banner = ({ bannerDatas, width, height, interval }) => {
  const rootStyle = {
    width: width,
    height: height,
  };

  const [isopen, setopen] = useState(false);
  const content = useContentIndex(isopen, bannerDatas, interval);

  return (
    <div id="layout-banner" style={rootStyle}>
      {bannerDatas.length > 0 && (
        <div className="banner-container">
          {bannerDatas.map((d, i) => {
            return (
              <Link
                to={`/${d.uri}`}
                key={i}
                className={'banner-comment' + (i === content && !isopen ? ' active' : '')}
                style={{ lineHeight: height }}
              >
                {`${d.label} `}
                <span className="price">{d.price}</span>
                {` ${d.comment}`}
              </Link>
            );
          })}
        </div>
      )}
      <div
        id="open-button"
        onClick={() => {
          setopen(!isopen);
          toggleBanner();
        }}
      >
        ▼
      </div>
    </div>
  );
};

Banner.defaultProps = {
  bannerDatas: [],
  width: '100%',
  height: '40px',
  interval: 4,
};

Banner.propTypes = {
  bannerDatas: propTypes.array,
  width: propTypes.string,
  height: propTypes.string,
  interval: propTypes.number,
};

export default Banner;
