import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>VoteBasedDiscussionForum</h1>
      <Link to="/">Home</Link> | <Link to="/newpost">Add new post</Link>
    </div>
  );
}

export default Header;