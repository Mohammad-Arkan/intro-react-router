import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {title, id} = post
    
    const navigate = useNavigate()
const handlerNavigation =()=>{
    navigate(`/post/${id}`)
}

    return (
        <div className='post'>
            <h4>Welcome to post page: {post.length}</h4>
           
                <h2>{title}</h2>
                <p>Id: {id}</p>
               
                <Link to={`/post/${id}`}>Show more Details</Link>
                <Link to={`/post/${id}`}><button>Show post Details</button></Link>
                <button onClick={handlerNavigation}>Button with handler</button>
                
            
            </div>
    );
};

export default Post;