import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '20px', backgroundColor: '#282c34', color: 'white' }}>
      <Typography variant="h6">Suivez-nous</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
        <IconButton href="https://facebook.com" color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://twitter.com" color="inherit">
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://instagram.com" color="inherit">
          <InstagramIcon />
        </IconButton>
      </Box>
      <Typography variant="body2">&copy; 2023 Surveyor 's Utilities made by HG with 💦. Tous droits réservés.</Typography>
    </Box>
  );
};

export default Footer;
