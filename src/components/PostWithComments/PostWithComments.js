import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Grid, Typography, CardContent, CardActionArea, Box } from '@material-ui/core';
import CommentsDetails from '../CommentsDetails/CommentsDetails';

const PostWithComments = () => {
    const { postId } = useParams();

    const [postWithComments, setpostWithComments] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setpostWithComments(data));
    }, [postId]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, [postId]);

    return (
        <Box>
            <Grid lg={12} md={10} sm={8} xs={10} item container style={{ margin: 'auto', padding: '10px', boxShadow: '5px 5px 5px gray', marginTop: '30px', width: '700px', height: '100%' }}>
                <Grid item >
                    <h4 color="textPrimary"><strong> {postWithComments.title}</strong></h4>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="body2" component="p">{postWithComments.body}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>
                <br />

            </Grid>
            <CommentsDetails comments={comments}></CommentsDetails>
        </Box>
    );
};

export default PostWithComments;