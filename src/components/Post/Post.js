import React from 'react';
import { Grid, Button, Typography, CardActions, CardContent, CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { title, body, id } = props.post;
    return (

        <Grid lg={4} md={6} sm={12} xm={12} item container style={{ marginLeft: '5px', padding: '10px', marginRight: '5px', display: 'inline-block', boxShadow: '5px 5px 5px gray', marginBottom: '30px', width: '400px', height: '100%' }}>
            <Grid item >
                <h4><strong> {title}</strong></h4>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="body2" color="textInfo" component="p">{body}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/postWithComments/${id}`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" size="small" color="secondary">See Details</Button>
                    </Link>
                </CardActions>
            </Grid>
        </Grid>
    );
};

export default Post;