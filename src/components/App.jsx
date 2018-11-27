import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import VoteControl from './VoteControl';
import VoteList from './PostList';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import { Link } from 'react-router-dom';



/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
       masterPostList: []
    };
   this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);

  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterPostList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterPostList: newMasterTicketList});


  }

  render(){
  return (
    <div>
     
      VoteBasedDiscussionForum
      <Switch>
         {/* <Route path='/newpost' render={()=> <VoteControl onNewPostCreation= {this.handleAddingNewTicketToList}/>} /> */}
         <Link to="/newticket">Create Ticket</Link>
        <Route exact path='/' render={()=><PostList postList={this.state.masterPostList} />} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}
}
//App.propTypes = {
//};

export default App;
