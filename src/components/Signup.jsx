import React from 'react';
import { Grid, Paper, Modal, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';

function Signup() {

  const stylePaper = {
    padding: "15px",
    height: "60vh",
    width: 400,
    margin: "20px auto"

  }
  const stylingAvatar = {
    backgroundColor: "#1bbd7e"
  }
  const openSigninModal = () => {
    console.log('openSigninModal');
  }

  const handleCloseSigninModal = () => {
    console.log('handleCloseSigninModal');
  }

  return (

    <Modal
      open={openSigninModal}
      onClose={handleCloseSigninModal}
      aria-labelledby="modal-title"
    >
      <Grid>
        <Paper elevation={10} style={stylePaper}>
          <Grid align="center">
            <Avatar style={stylingAvatar} >
              <FollowTheSignsIcon />
            </Avatar>
            <Typography variant="h2" id="modal-title" margin="normal">
              Sign Up
            </Typography>
          </Grid>
          <TextField
            type="email"
            idf="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            label="Email"
            placeholder="Enter your email"
            fullWidth
            required
            variant="Standard"
            sx={{ fontSize: "30px" }}

          />
          <TextField
            type="password"
            idf="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            label="Password"
            placeholder="Enter your password"
            fullWidth
            required
            variant="Standard"
            sx={{ fontSize: "30px" }}

          />
          <FormControlLabel required control={<Checkbox name="remember-me" color="primary" />} label="Remember me" />
          <br />
          <br />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}

            sx={{
              color: colors.grey[100],
              backgroundColor: colors.blueAccent[700],
              "&:disabled": {
                backgroundColor: colors.blueAccent[900],
                color: colors.grey[300],
              },
              display: 'flex', // Align icon and text
              alignItems: 'center', // Center vertically
            }}
          >

          </Button>
        </Paper>
      </Grid>
    </Modal>



  )
}

export default Signup; 
