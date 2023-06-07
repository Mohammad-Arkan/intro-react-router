import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = (props) => {
const {name, email, id, website, phone, city} = props.friend
    return (
        <div className='friend'>
            <h4>{name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/friend/:${id}`}> Show me details</Link></p>
        </div>
    );
};

export default Friend;