import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Post(props){
  // function onVoteUpConfirmation(){
  //   props.voteCount++;

  // }



    return (
      <div>
        <h3>{props.title} - {props.postText}</h3>
        <div>
          <br></br>
          <button onClick={props.onVoteUpConfirmation}>UP</button>
        </div>
        <p><em>{props.voteCount}</em></p>
        <button onClick={props.onVoteDown}>DOWN</button>
        <hr/>
      </div>
    );
  }
  
  Post.propTypes = {
    title: PropTypes.string.isRequired,
    postText: PropTypes.string.isRequired,
    // voteCount: PropTypes.number
  };
  
  export default Post;
  