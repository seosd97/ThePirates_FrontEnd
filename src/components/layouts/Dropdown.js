import React, { useState } from 'react';
import propTypes from 'prop-types';

const Dropdown = ({ menuDatas, width, height, rowCount, onChange }) => {
  const rootStyle = {
    width: width,
    height: height,
    lineHeight: height,
  };

  const [curMenu, setCurMenu] = useState(menuDatas.length ? menuDatas[0] : {});

  return (
    <div className="ui-dropdown" style={rootStyle}>
      {curMenu.label}
      <span className="menu-token">▾</span>
      {/* <div className="dropdown-menu disabled">
        {menuDatas.map((d, i) => {
          return (
            <div key={i} data-value={d.code}>
              {d.label}
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

Dropdown.defaultProps = {
  menuDatas: [],
  width: '100%',
  height: '40px',
};

Dropdown.propTypes = {
  menuDatas: propTypes.array,
  width: propTypes.string,
  height: propTypes.string,
  rowCount: propTypes.number,
  onChange: propTypes.func,
};

export default Dropdown;
