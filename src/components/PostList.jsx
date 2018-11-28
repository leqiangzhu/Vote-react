import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Post from './Post';



function PostList(props){


  return(
    <div>
       {/* <button onClick={props.onTroubleshootingConfirmation}>ADD NEW</button> */}
       {console.log(props)}
     <hr/>
      {props.postList.map((post, index) =>
        <Post title={post.title}
          postText={post.postText}
          voteCount={post.voteCount}
          onVoteDown={() => props.onVoteDown(post)}
          onVoteUpConfirmation={props.onTroubleshootingConfirmation}ß
          key={index}/>
      )}
     
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
  };

  
  
  export default PostList;

  localStorage