
import { useState, useEffect } from "react";

import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
    useMediaQuery,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { Link } from "react-router-dom";

import "./Navbar.scss"

import { pages, settings } from "../../utils/constants/navbar";

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const isMobile = useMediaQuery('(max-width:992px)');

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar className="navbar" position="static">
            <Container maxWidth="xl">
                <Toolbar className="navbar__toolbar" disableGutters>
                    {isMobile ?
                        (
                            <Box className="navbar__hamburger-wrapper" >
                                <IconButton
                                    className="navbar__hamburger"
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                >
                                    <MenuIcon />
                                </IconButton>
                                {isMobile ?
                                    (
                                        <Menu
                                            className="navbar__menu"
                                            id="menu-appbar"
                                            anchorEl={anchorElNav}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            open={Boolean(anchorElNav)}
                                            onClose={handleCloseNavMenu}
                                        >
                                            {pages.map((page) => (
                                                <MenuItem key={page.text} onClick={handleCloseNavMenu} >
                                                    <Link className="custom-link" to={page.route}>{page.text}</Link>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    )
                                    :
                                    (
                                        ""
                                    )}
                            </Box>
                        ) :
                        (
                            ""
                        )
                    }
                    <Link
                        className="navbar__logo"
                        to="/homepage"
                    >
                        FitnessNotes
                    </Link>
                    {isMobile ?
                        (
                            ""
                        ) :
                        (
                            <Box sx={{ display: "flex", flexGrow: 1, gap: "20px" }}>
                                {pages.map((page) => (
                                    <Link
                                        className="custom-link-invert"
                                        to={page.route}
                                        key={page.text}
                                    >
                                        {page.text}
                                    </Link>
                                ))}
                            </Box>
                        )
                    }
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
                                    <Link className="custom-link" to={setting.route}>{setting.text}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}



export default Navbar;