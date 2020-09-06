import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { Container, Box } from '@material-ui/core';

const Home = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPost(data))
        // .then(data => console.log(data))
    }, [])

    return (
        <Box>
            <Container>
                <h2>All Post</h2>
                {
                    post.map(post => <Post key={post.id} post={post} ></Post>).slice(0, 12)
                }
            </Container>
        </Box>
    );
};

export default Home;