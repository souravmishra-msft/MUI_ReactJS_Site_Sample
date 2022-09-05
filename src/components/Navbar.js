import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
});

const Search = styled('div')(({ theme }) => ({
    backgroundColor: '#ffff',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
    // if small than the breakpoint i.e 600px then display none
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    //show if small (sm) or bigger than small (sm)
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    //hide if sm or bigger than sm
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}));


const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpenMenu = (e) => {
        console.log(e.currentTarget);
        setAnchorEl(e.currentTarget);
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    return (
        <AppBar position='sticky' sx={{ bgcolor: '#005196' }}>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>Navbar</Typography>
                <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search bgcolor={'background.default'} color={'text.primary'}><InputBase placeholder='search...' /></Search>

                <Icons>
                    <Badge badgeContent={4} color='error'><Mail /></Badge>
                    <Badge badgeContent={4} color='error'><Notifications /></Badge>
                    <Avatar
                        sx={{ width: 30, height: 30, cursor: 'pointer' }}
                        src='https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png'
                        onClick={handleOpenMenu}
                    />
                </Icons>

                <UserBox onClick={handleOpenMenu}>
                    <Avatar sx={{ width: 30, height: 30, cursor: 'pointer' }} src='https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png' />
                    <Typography variant='span'>John</Typography>
                </UserBox>

            </StyledToolbar>

            <Menu
                id='demo-positioned-menu'
                aria-labelledby='demo-positioned-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My Account</MenuItem>
                <MenuItem>Profile</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar