import React from 'react';

const Post = (props) => (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        <p>{props.body}</p>
    </div>
)

export default Post;