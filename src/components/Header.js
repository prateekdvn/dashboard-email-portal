import React from "react";
import img1 from '../images/Logo.svg';
import '../App.css'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import logo from "../public/next.svg"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



export default function Header() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
      
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
      
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return <>
    <div   style={{width:'',height:'53px',borderBottom:'1px solid #97999B'}}>

        <div className="row" style={{display:'flex',alignItems:'center'}} >

            <div className="col-4">  
            <img src={img1} style={{height:'195.381', width:'17.445',marginLeft:'20px'}} />
            </div>
            <div className="col-4  Hdiv1">Dashboard E-Mail Enrollment Portal</div>
            <div className="col-4" style={{display:'flex',justifyContent:'flex-end'}}>

                 
                  {/* <div  className="Hdiv2">
                    <img />
                  </div> */}
      <p  style={{margin:'10px 0px 0px 0px'}}>Home</p>
       <Box sx={{ flexGrow: 0 ,marginLeft:'1rem',marginTop:'.5rem'}}>
            
            <Tooltip title="Open settings" style={{display:'flex'}} onClick={handleOpenUserMenu}>
              <IconButton  sx={{ p: 0 }} >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ width: 27, height: 27 }} />
              </IconButton>

              <p style={{margin:'0rem 0rem 0rem .5rem', color:'black'}}>  Remy Sharp</p>  
              <ArrowDropDownIcon style={{marginTop:'0rem'}} sx={{ p: 0 }} />
              {/* <button type="button" onClick={handleOpenUserMenu} sx={{p:0}} class="btn btn-default">
               <span class="glyphicon glyphicon-triangle-bottom"></span>
                  </button> */}
                  
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          

            </div>

            

        </div>


    </div>
    
    
    </>

}

