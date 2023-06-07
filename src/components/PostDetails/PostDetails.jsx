import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post)
    const {id, title, body} = post;
    const navigate = useNavigate();
const handlerGoBack = () => {
 navigate(-1)
}
    return (
        <div>
            <h3> Every one post Details: {id}</h3>
            <h5>{title}</h5>
            <p>{body}</p>
            <button onClick={handlerGoBack}>Go to back</button>

        </div>
    );
};

export default PostDetails;