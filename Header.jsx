import React from 'react';
import PostButton from './PostButton';
import LoginButton from './LoginButton';
import Searcher from './Searcher';

const Header = () => {
  return (
    <div className="header">
      <div className="left-content">
        <div className="dev-deakin">DEV@deakin</div>
      </div>
      <div className="center-content">
        <Searcher />
        <div className="search-symbol"></div>
      </div>
      <div className="right-content">
        <PostButton />
        <LoginButton />
      </div>
    </div>
  );
}

export default Header;


