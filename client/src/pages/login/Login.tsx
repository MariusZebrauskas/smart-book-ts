import { VisibilityOff } from '@mui/icons-material';
import { objLogin } from './data';
import {
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { GoogleIcon, ScreenCenter } from './styles';
import Visibility from '@mui/icons-material/Visibility';
import BootstrapButton from '../../components/button/CustomizedButton';
import TopLOgin from '../../components/info/TopLOgin';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  // react router
  const navigate = useNavigate();
  const navigateRoutes = (params: string) => {
    console.log(useNavigate);
    setTimeout(() => {
      navigate(`${params}`);
    }, 300);
  };

  // password logic
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  return (
    <ScreenCenter>
      <Card
      
        sx={{
          maxWidth: '100%',
          p: '3rem',
          boxShadow: 13,
        }}
      >
        <TopLOgin data={objLogin} />
        {/* login text */}
        <TextField
          required
          id='outlined-required'
          label='Required'
          defaultValue=''
          sx={{ m: 1, width: '100%' }}
        />
        {/* password text */}
        <FormControl sx={{ m: 1, width: '100%' }} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment sx={{ ml: 0 }} position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
        </FormControl>
        <Stack spacing={2} direction='row' sx={{ mt: 2, justifyContent: 'left', flexWrap: 'wrap' }}>
          <GoogleIcon />
          <BootstrapButton navigateRoutes={navigateRoutes}>Login</BootstrapButton>

          <Button onClick={() => navigateRoutes('/register')} variant='outlined'>
            Register
          </Button>
        </Stack>
      </Card>
    </ScreenCenter>
  );
};

export default Login;
