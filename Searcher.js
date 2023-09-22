import React from 'react';
import { Link } from 'react-router-dom';



const Searcher = () => {
  return (
    <div className="searcher">
      <input type="text" placeholder="Search with Google" />
     <Link to= 'search '><button className="search-button">Search</button></Link> 
    </div>
  );
}

export default Searcher;
