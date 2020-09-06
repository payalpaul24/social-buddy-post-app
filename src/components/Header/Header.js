import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        <Link style={{ textDecoration: 'none',color:'white' }} to="/">Social Buddy</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default Header;