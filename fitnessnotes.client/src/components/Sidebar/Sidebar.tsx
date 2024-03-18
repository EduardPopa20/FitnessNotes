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

import "./Sidebar.scss"

const drawerWidth = 240;

const Sidebar = () => {
    const location = useLocation();

    const { pathname } = location;

    console.log(pathname);

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        position: 'relative'
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    {adminSidebar.manage.map((nomenclator) => (
                        <Link to={nomenclator.route}>
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
            </Drawer>
        </Box>
    );
}

export default Sidebar;
