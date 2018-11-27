import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Post(props){
    return (
      <div>
        <h3>{props.title} - {props.postText}</h3>
        <p><em>{props.voteCount}</em></p>
        <hr/>
      </div>
    );
  }
  
  Post.propTypes = {
    title: PropTypes.string.isRequired,
    postText: PropTypes.string.isRequired,
    voteCount: PropTypes.number.isRequired
  };
  
  export default Post;
  