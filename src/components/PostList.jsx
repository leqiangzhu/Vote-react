import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Post from './Post';



function PostList(props){


  var masterPostList =[
    {
          title: 'Thato and Haley',
          postText: '3A',
          voteCount: 2
        }

  ]

  return(
    <div>
       <button onClick={props.onTroubleshootingConfirmation}>ADD NEW</button>
     <hr/>
      {props.postList.map((post, index) =>
        <Post title={post.title}
          postText={post.postText}
          voteCount={post.voteCount}
          key={index}/>
      )}
     
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
  };
  
  
  
  export default PostList;