import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../../Friend/Friend';

const Friends = () => {
const friends = useLoaderData();
// console.log(friends)
    
    return (
        <div>
            <h4>All my friends: {friends.length}</h4>
            {
                friends.map(friend => <Friend
                key={friend.id}
                friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;