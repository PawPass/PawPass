import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { apiRoute } from '../../utils';
import { setTitle } from '../../Store/actions';
import { Put, Get } from '../../Services/index';
import { IReducers } from '../../Interfaces/IReducers';
import { Container, Box, Button, TextField } from '@mui/material';
import './styles.css';

const Login = () => {
  const [usernameErr, setUsernameErr] = useState('Username');
  const [passwordErr, setPasswordErr] = useState('Password');
  const dispatch = useAppDispatch();
  const clusterReducer = useAppSelector((state: IReducers) => state.clusterReducer);
  const navigate = useNavigate();

  useEffect(() => {
    //sign in state might need to be removed - because we are working with persistent state 
    //might be that we use redux-persist in conjunction with local.storage as oppose to actually touching local storage
    console.log('render state from clusterReducer: ', clusterReducer.render);
  }, [clusterReducer]);

  const handleLogin = async (): Promise<void> => {
    try {
      const body = {
        username: (document.getElementById('login-username-input') as HTMLInputElement).value,
        password: (document.getElementById('login-password-input') as HTMLInputElement).value
      };
      const res = await Put(
        apiRoute.getRoute('auth'), 
        body
      )
      .catch(err => console.log(err));

      if (!body.username) setUsernameErr(' please enter username');
      else setUsernameErr('Username');

      if (!body.password) setPasswordErr(' please enter password');
      else setPasswordErr('Password');

      if (res.token) {
        localStorage.setItem('username', body.username);
        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', res.userId);
        dispatch(setTitle('Home'));
        navigate('/home');
      }
      if (res.invalid) {
        setUsernameErr(res.message);
        setPasswordErr('');
      }
    } catch (err) {
      console.log('Get failed');
    }
  };

  const handleGoogleLogin = async (): Promise<void> => {
    try {
      const res = await Get(
        apiRoute.getRoute('/auth2')
      )
      .catch(err => console.log(err));
    } catch (err) {
      console.log('Get failed');
    }
  };

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <div>
      <Container 
        sx={{
          height: '100vh',
          minWidth: '100%',
          justifyContent: 'center',
          display: 'flex',
          direction: 'column',
          textAlign: 'center',
          alignItems: 'center',
          backgroundSize: 'contain',
          color: '#1976d2',
          bgcolor: 'white',
        }} 
        className="backdrop"
      >
        <Box
          maxWidth="sm" 
          className="login-container"
          sx={{
            width: '40%',
            minWidth: '250px',
            opacity: '95%',
            direction: 'column',
            textAlign: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '1.5rem',
            borderRadius: '2%',
          }}
        >
          <div>
            <h1>PawPass</h1>
          </div>
          <TextField
              id="login-username-input"
              label={usernameErr}
              type="username"
              autoComplete="current-password"
              variant="outlined"
              size='small'
              onKeyDown={handleEnterKeyDown}
              margin="dense"
          />
          <TextField
            id="login-password-input"
            label={passwordErr}
            type="password"
            autoComplete="current-password"
            variant="outlined"
            size='small'
            onKeyDown={handleEnterKeyDown}
            margin="dense"
          />
          <Container 
            id = 'buttonContainer' 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '.5em',
              padding: '.5em',
            }}
          >
            <Button 
              className="btn" 
              type="button" 
              onClick={handleLogin}
              variant='contained'
              sx={{
                color: 'white', 
                backgroundColor: '#1976d2', 
                borderColor: 'white',
              }}
            >
              Login
            </Button>
            
            <Button 
              className="btn" 
              type="button" 
              onClick={() => navigate('/register')}
              variant='contained'
              sx={{
                color: 'white', 
                backgroundColor: '#1976d2', 
                borderColor: 'white',
              }}
            >
              Register
            </Button>
          </Container>
          <Container 
            id = 'buttonContainer2' 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '.5em',
              padding: '.5em',
            }}
          >
            <Button 
              className="btn" 
              type="button" 
              onClick={handleGoogleLogin}
              variant='contained'
              sx={{
                color: 'white', 
                backgroundColor: '#1976d2', 
                borderColor: 'white',
              }}
            >
              Sign In with Google
              <img src='../../../../Images/google.png' height="40px"></img>
            </Button>
            <Button 
              className="btn" 
              type="button" 
              variant='contained'
              sx={{
                color: 'white', 
                backgroundColor: '#1976d2', 
                borderColor: 'white',
              }}
            >
              Sign In with Apple
              <img src='../../../../Images/apple.svg.png' height="30px"></img>
            </Button>
          </Container>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
