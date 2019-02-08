import React from 'react';

import Friend from './Friend';

class FriendsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friends:[]
    }
  }
 

  render() {
    return ( 
      <div className="list-container">
        {this.props.friends.map(friend=><Friend friend={friend} key={friend.id} />)}
      </div> 
    );
  }
}
 
export default FriendsList;