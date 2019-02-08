import React from 'react';
import PropTypes from 'prop-types';

const Friend = (props) => {
    return ( 
        <div>
            <h3>{props.friend.name}</h3>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>
     );
}

Friend.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
}
 
export default Friend;