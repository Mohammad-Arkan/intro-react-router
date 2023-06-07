import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = (props) => {
console.log(props)
const {email, name, phone, id} = props.friend
    return (
        <div className='friend'>
            <h3> {name}</h3>
            <p> Email: {email}</p>
            <p> Phone: {phone}</p>
           <Link to={`/friend/${id}`}>Show me Detials</Link>
        </div>
    );
};

export default Friend;