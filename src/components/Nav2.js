import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {useState} from "react";

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
import Button from '@mui/material/Button';
// import AdbIcon from '@mui/icons-material/Adb';
// import logo from "../public/next.svg"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


import vector from '../images/Vector.svg';
import vector2 from '../images/Vector2.svg';
import group1 from '../images/Group 2683.svg';
import sub from '../images/Subtract.svg';
import EmailRegistration from "./Email_registration";
import EmailRegistration2 from "./Email_registration2";
import DataTable from "./table";


const pages = [{svg1:vector ,value: 'Email Registration'  },{svg1:vector2,value:'List of added users'},{svg1:group1,value:'Upcoming Dashboards'},{svg1:sub,value:'Email Logs'}];


export default function Nav() {

  const [currentItem,setCurrentItem] = useState("Email Registration");

const menuitem = ((e)=>{
// console.log(e.currentTarget.value);
setCurrentItem(e.currentTarget.value)

})
    const [formData,setFormData] = useState([]);
    
    const updateFormData = (newData) =>{
      setFormData([...formData,newData]);
    };

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
    <div>
         <div className='Adiv2'>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }} >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <MenuIcon sx={{color:'black'}}/>
            </IconButton>
            <Menu
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
              sx={{
                display: { xs: 'block', lg: 'none' },
              }}
            >
              {pages.map((page) => (
               
                <MenuItem key={page.value}  value={page.value} name={page.value} >
                  <Typography  textAlign="center" sx={{color:'black'}} ><img src={page.svg1} /> {page.value}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },alignItems:'' }}>
            {pages.map((page) => (
              <Button
                key={page.value}
                onClick={menuitem}
                value = {page.value}
                name={page.value}
                
                sx={{ my: 1.8, color: 'black', display: 'block'}}
                style={{borderLeft:'',paddingLeft:'20px',paddingRight:'20px',fontWeight:'500',fontSize:'14px',lineHeight: '26.5px', letterSpacing: '-0.35px',
                        borderBottom: page.value===currentItem?'5px solid blue':''
              }}
                
                
              >
                 <img src={page.svg1} style={{fill:'#012386'}}/> {page.value}
              </Button>
            ))}
          </Box> 
          
          {
          currentItem == "Email Registration" &&
          <EmailRegistration updateFormData = {updateFormData} />
}
          {/* <EmailRegistration2 formData = {formData} /> */}


          {
          currentItem == "List of added users" &&

          <DataTable  formData = {formData} /> 
}
          
          
          </div>



    </div></>
}