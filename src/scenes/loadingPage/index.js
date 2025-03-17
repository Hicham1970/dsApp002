import { Box } from '@mui/material';
import Header from '../../components/Header';
import LoadingPage from '../../components/LoadingPage';

const LoadingPageComponent = () => {
  return (
    <Box m="20px">
      <Box display={'flex'} justifyContent="space-between" alignItems="center">
        <Header title="LOADING PAGE" subtitle="New User? sign up Or Login" />
      </Box>
      <Box height={700} m="20px">
        <LoadingPage />
      </Box>
    </Box>
  )
}

export default LoadingPageComponent;
