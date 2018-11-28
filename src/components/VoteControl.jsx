import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostList from './PostList';
import NewPostForm from './NewPostForm';


class VoteControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
    //     this.handleClick = this.handleClick.bind(this);
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);


  }

  handleTroubleshootingConfirmation() {
    this.setState({ formVisibleOnPage: true });
  }
  //   handleClick1(){
  //     this.setState({formVisibleOnPage: true});
  //     console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  //   }

  handleVoteDown () {

  }

  render() {
    let currentlyVisibleContent = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <PostList 
      
      onVoteDown={this.props.onVoteDown}
      onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation} postList={this.props.postList} />;
    } else {
      currentlyVisibleContent = <NewPostForm onNewPostCreation={this.props.onNewPostCreation} />
    }

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

VoteControl.propTypes = {
  onNewPostCreation: PropTypes.func
};



export default VoteControl;