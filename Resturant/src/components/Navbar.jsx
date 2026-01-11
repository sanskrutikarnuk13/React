
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { NavLink } from "react-router-dom"
import "../styles/Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';



const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenu = () => {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }} className="Navbar">
          <Toolbar sx={{ display: "flex" }}>
            <IconButton color='inherit' sx={{ mr: 2, display: { sm: "none" } }} onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
            <Typography
              color="goldenrod" variant='h6'
              sx={{ display: "flex", alignItems: "center", gap: 1 }} className='NavIcon'
            >
              <FastfoodIcon /> <p>Foodz</p>
            </Typography>


            <Box sx={{ marginLeft: "auto", display: { xs: "none", sm: "block" } }}>
              <ul className="navbarList">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </Box>

          </Toolbar>

        </AppBar>


        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleMenu}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                width: 240,
                boxSizing: "border-box",
              },
            }}
          >
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Typography color="goldenrod" variant="h6" sx={{ my: 2 }}>
                <FastfoodIcon /> Foodz
              </Typography>
              <Divider />
              <ul className="MenuList">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </Box>
          </Drawer>
        </Box>

        <Toolbar></Toolbar>

      </Box>

    </div>
  )
}

export default Navbar
