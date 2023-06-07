import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {title, id} = post
    console.log(post)
    return (
        <div className='post'>
            <h4>Welcome to post page: {post.length}</h4>
           
                <h2>{title}</h2>
                <p>Id: {id}</p>
               
                <Link to={`/post/${id}`}>Show more Details</Link>
            
            </div>
    );
};

export default Post;