import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material"

import { Link, useLocation } from "react-router-dom";

import adminSidebar from '../../utils/constants/adminSidebar';

import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';

import "./Sidebar.scss"
import { useContext } from "react";
import { AuthSessionContext } from "../../layouts/AuthLayout";

const drawerWidth = 100;

const Sidebar = () => {
    const location = useLocation();
    const user = useContext(AuthSessionContext);

    const { pathname } = location;

    return (
        <Box className="sidebar__wrapper" sx={{ display: 'flex' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        position: 'relative',
                        padding: "25px 0px"
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                {user.role == "Admin" ?
                    <List className="sidebar__list">
                        {adminSidebar.manage.map((nomenclator) => (
                            <Link key={nomenclator.name} to={nomenclator.route}>
                                <ListItem
                                    className={`sidebar__container ${pathname === nomenclator.route ? "sidebar__container--active" : ""}`}
                                    key={nomenclator.name}
                                    disablePadding
                                >
                                    <ListItemButton>
                                        <ListItemText
                                            className="sidebar__text"
                                            primary={nomenclator.name}
                                            sx={{ textAlign: "center" }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            </Link>

                        ))}
                    </List>
                    :
                    ""
                }
                {(user.role === "User" || user.role === "Coach") && (
                    <List className="sidebar__list">
                        <Link
                            className="sidebar__list__link"
                            to="/training"
                        >
                            <ListItem
                                className={`sidebar__container ${pathname === "/training" ? "sidebar__container--active" : ""}`}
                                key="training"
                                disablePadding
                            >
                                <ListItemButton
                                    className="sidebar__list__button"
                                >
                                    <FitnessCenterOutlinedIcon
                                        className="sidebar__list__icon"
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link
                            className="sidebar__list__link"
                            to="/nutrition"
                        >
                            <ListItem
                                className={`sidebar__container ${pathname === "/nutrition" ? "sidebar__container--active" : ""}`}
                                key="nutrition"
                                disablePadding
                            >
                                <ListItemButton
                                    className="sidebar__list__button"
                                >
                                    <LocalDiningOutlinedIcon
                                        className="sidebar__list__icon"
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>
                )}
            </Drawer>
        </Box >
    );
}

export default Sidebar;
