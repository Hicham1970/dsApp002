import { Box } from '@mui/material';
import Header from '../../components/Header';
import Login from '../../components/Login'; // Updated import statement

const LoginComponent = () => {
  return (
    <Box m="20px">
      <Box display={'flex'} justifyContent="space-between" alignItems="center">
        <Header title="LOGIN PAGE" subtitle="To Connect Enter your Credentials" />
      </Box>
      <Box height={700} m="20px">
        <Login /> 
      </Box>
    </Box>
  )
}

export default LoginComponent;
