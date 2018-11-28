import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import VoteControl from './VoteControl';
import VoteList from './PostList';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import { Link } from 'react-router-dom';
import Header from './Header';




/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newPost">Create Ticket</Link>
*/

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
       masterPostList: []
    };
   this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
   this.handleDownVote = this.handleDownVote.bind(this);

  }

  handleAddingNewPostToList(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  onVoteUpConfirmation(props){
    props.voteCount++;
    console.log(1);
  }

  handleDownVote(thisPost){
    var newList = this.state.masterPostList.slice();
    var index = newList.indexOf(thisPost);
    newList[index].voteCount--;
    this.setState({masterPostList: newList});
  }


  
  render(){
  return (
    <div>
             <Header/>
      <Switch>
         <Route path='/newpost' render={()=> <VoteControl 
         
         onNewPostCreation= {this.handleAddingNewPostToList}/>} />
        <Route exact path='/' render={()=><PostList onVoteDown={this.handleDownVote}
        postList={this.state.masterPostList} />} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}
}
//App.propTypes = {
//};

export default App;
