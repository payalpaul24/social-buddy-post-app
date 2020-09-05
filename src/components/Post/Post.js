import React from 'react';
import { Grid, Button, Typography, CardActions, CardContent, CardActionArea } from '@material-ui/core';

const Post = (props) => {
    const { title, body } = props.post;
    return (
        
        <Grid lg={4} item container style={{ marginLeft: '30px', padding: '20px', marginRight: '30px', display: 'inline-block', boxShadow: '5px 5px 5px gray', marginBottom: '30px', width: '350px', height: '100%' }}>
            <Grid item>
                <h4><strong> {title}</strong></h4>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="body2" color="textInfo" component="p">{body}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" size="small" color="secondary">See Details</Button>
                </CardActions>
            </Grid>
        </Grid>
    );
};

export default Post;