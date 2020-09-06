import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, List } from '@material-ui/core';

const Comments = (props) => {
    const { comment } = props;
    return (

        <List>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={`https://randomuser.me/api/portraits/men/${comment.id}.jpg`} />
                </ListItemAvatar>
                <ListItemText
                    primary={comment.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                {comment.email}
                            </Typography>
                            {` — ${comment.body}`}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
};

export default Comments;