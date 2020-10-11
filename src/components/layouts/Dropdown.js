import React, { useState } from 'react';
import propTypes from 'prop-types';

const onValueChange = (e) => {
  const items = document.getElementById('filter-container').getElementsByClassName('ui-dropdown');
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove('active', 'disabled');
  }
};

const Dropdown = ({ menuDatas, width, height, rowCount, defaultValue, onClick, onChange }) => {
  const rootStyle = {
    width: width,
    height: height,
    lineHeight: height,
  };

  const [curValue, setCurValue] = useState(defaultValue);

  return (
    <div className="ui-dropdown" style={rootStyle} onClick={onClick}>
      {curValue}
      <span className="menu-token"> ▾</span>
      <div className="dropdown-menu" style={{ top: height, left: 0 }}>
        {menuDatas.map((d, i) => {
          return (
            <div
              key={i}
              className="menu-item"
              data-value={d.label}
              style={{ width: `${100 / rowCount}%`, display: 'inline-block' }}
              onClick={(e) => {
                setCurValue(d.label);
                onValueChange(e);
                onChange(d.label);
              }}
            >
              {d.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  menuDatas: [],
  width: '100%',
  height: '40px',
  rowCount: 1,
  defaultValue: '',
  onClick: null,
  onChange: null,
};

Dropdown.propTypes = {
  menuDatas: propTypes.array,
  width: propTypes.string,
  height: propTypes.string,
  rowCount: propTypes.number,
  defaultValue: propTypes.string,
  onClick: propTypes.func,
  onChange: propTypes.func,
};

export default Dropdown;
