import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post)
    return (
        <div>
            <h3> Every one post Details</h3>
            
        </div>
    );
};

export default PostDetails;