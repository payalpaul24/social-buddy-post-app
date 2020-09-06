import React from 'react';
import Comments from '../Comments/Comments';
import { List } from '@material-ui/core';

const CommentsDetails = (props) => {
    const { comments } = props;

    return (

        <List style={{ width: '400px', marginLeft: '90px' }}>
            <h3>Comments:</h3>
            {comments.map((comment) => (
                <Comments comment={comment} key={comment.id}></Comments>
            ))}
        </List>
    );
};

export default CommentsDetails;