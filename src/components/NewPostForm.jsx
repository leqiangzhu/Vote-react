import React from 'react';
import PropTypes from 'prop-types';


function NewPostForm(props){
  let _title = null;
  let _postText = null;
  // let _voteCount = null;

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    console.log(_title.value);
    // console.log(_location.value);
    // console.log(_issue.value);
 
    props.onNewPostCreation({
      title: _title.value, 
      postText: _postText.value, 
      voteCount: 0
    });
    _title.value = '';
    _postText.value = '';
 //  _voteCount.value = 0;
  }

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='title'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          id='postText'
          placeholder='postText'
          ref={(input) => {_postText = input;}}/>

        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
    onNewPostCreation: PropTypes.func
};

export default NewPostForm;