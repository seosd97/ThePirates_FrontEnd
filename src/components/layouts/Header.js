import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.scss';

const Header = () => {
  return (
    <header>
      <Link to="/" id="home-link">
        인어교주해적단
      </Link>
      <nav>
        <ul>
          <li className="selected">
            <Link to="/">시장</Link>
          </li>
          <li>
            <Link to="/">맛집</Link>
          </li>
          <li>
            <Link to="/">온라인</Link>
          </li>
          <li>
            <Link to="/">도매</Link>
          </li>
          <li>
            <Link to="/">시세</Link>
          </li>
          <li>
            <Link to="/">스페셜</Link>
          </li>
          <li>
            <Link to="/">후기</Link>
          </li>
          <li>
            <Link to="/">문의</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
