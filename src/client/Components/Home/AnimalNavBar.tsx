import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import UserWelcome from '../Admin/UserWelcome';

export default function SearchAppBar() {
  const navigate = useNavigate();

  const routeHome = () => {
    navigate('/home');
  };

  const routeKolache = () => {
    navigate('/kolache');
  };
  const routeAdmin = () => {
    navigate('/admin');
  };

  const handleLogOut = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    navigate('/');
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <Box sx={{ 
      flexGrow: 1,
      background: 'white'
    }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            id="basic-button"
            onClick={routeHome}
            variant="text"
            sx={{
              color: "white"
            }}
          >
            <HomeIcon />
          </Button>
            <Typography
            variant="h6"
            onClick={routeHome}
            noWrap
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block' },
              cursor: 'pointer' 
            }}
          >
            PawPass
          </Typography>
          <UserWelcome />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button
            id="basic-button"
            onClick={routeKolache}
            variant="text"
            sx={{
              color: "white"
            }}
          >
            Search
          </Button>

          <Button
            id="basic-button"
            onClick={handleLogOut}
            variant="text"
            sx={{
              color: "white"
            }}
          >
            <LogoutIcon />
          </Button>
          <Button
            id="basic-button"
            onClick={routeAdmin}
            variant="text"
            sx={{
              color: "white"
            }}
          >
            <SettingsIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
