import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { Container } from '@material-ui/core';

const PostDetails = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
        // .then(data => console.log(data))
    },[])

    return (
        <Container>
            <h2>All Post</h2>
            {
                post.map(post => <Post post={post} ></Post> ).slice(0, 12)
            }
        </Container>
    );
};

export default PostDetails;