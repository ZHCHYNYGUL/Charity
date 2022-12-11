import React from 'react';
import './Post.css'
const Post = (props) => {
    return (
        <div className='posts'>
            <h2 className='post-title'>{props.post.title}</h2>
            <h3 className='post-subtitle'>{props.post.subtitle}</h3>
            <p className='post-location'>{props.post.location}</p>
            <p className='post=date'>{props.post.date}</p>
        </div>
    );
};

export default Post;