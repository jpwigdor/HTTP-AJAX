import React from 'react';

import Friend from './Friend';

const FriendsList = (props) => {
    const { friendsList } = props;
 
    return ( 
        <div className="list-container">
            {friendsList.map(friend=><Friend friend={friend} key={friend.id} />)}
        </div> 
    );
}
 
export default FriendsList;