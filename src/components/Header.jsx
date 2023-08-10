import { AppBar, Box, InputBase, Toolbar, Typography, styled } from "@mui/material"
import { logoURL } from "../constant/constant"
import { BookmarkAdd, ExpandMore, Menu } from "@mui/icons-material"

import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import { useNavigate } from "react-router-dom";
import { routePath } from "../constant/route";
const StyledToolbar=styled(Toolbar)`
    background:#121212;
    min-height:56px !important;
    padding:0px 115px !important;
    justify-content:space-between;
    & > *{
        padding :0px 16px
    }
    & > div{
        display:flex;
        align-items:center;
        cursor:pointer;
        & > p{
            font-size :14px;
            font-weight:600;
        }
    }
    & > p{
        font-size :14px;
        font-weight:600;
    }
   
 `;
const Logo=styled('img')({
    width:64,

})
const Search=styled(InputBase)`
background:#FFFFFF;
height:30px;
width:55%;
border-radius:5px
`
const Header=()=>{
    const [open,setOpen]=useState(null);
    const nav=useNavigate();
    const handleClick=(e)=>{
        setOpen(e.currentTarget);
    }
    const handleClose=()=>{
        setOpen(null);
    }
    return(
       <AppBar position="static">
        <StyledToolbar>
            <Logo src={logoURL} alt="logo" onClick={()=>nav(routePath.home)}/>
            <Box onClick={handleClick}>
               <Menu />
               <Typography>Menu</Typography>
            </Box>
            <HeaderMenu  open={open} handleClose={handleClose}/>
            <Search />
            <Typography>IMDb<Box component='span'>Pro</Box></Typography>
        <Box>
            <BookmarkAdd />
            <Typography>Watchlist</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
            <Typography>EN</Typography>
            <ExpandMore />

        </Box>
        </StyledToolbar>
       </AppBar>
    )
}
export default Header