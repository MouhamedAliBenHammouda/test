import React from 'react';
import { useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import {
    Divider,
    Drawer,
    Toolbar,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import {
    Dashboard,
    Group,
    Assignment,
    AccountBox,
    Settings,
    Logout
} from '@mui/icons-material';



export default function SideBar({ drawerWidth }) {
  const navigate = useNavigate();
  const { instance } = useMsal();

  const handleLogout = () => {

          instance.logoutPopup({
              postLogoutRedirectUri: "/Logout",
              mainWindowRedirectUri: "/Logout"
          });
    
  }
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List >
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{
              navigate("/");
            }}>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton onClick={()=>{
              navigate("/ListeEmployee");
            }}>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Liste employée" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Liste Cv Mission" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
        </Drawer>
    )
}
