import React, { useState } from 'react';
import { useMode } from '../theme';
import { tokens } from '../theme';
import {
  Box,
  TextField,
  Button,
  Typography,
  styled,
  CircularProgress,
} from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { auth } from '../firebase';

const ContactMe = () => {
  const [theme, colorMode] = useMode();
  const colors   = tokens(theme.palette.mode);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    company: '',
  });

  const [loading, setLoading] = useState(false);

  // Créer un style personnalisé pour le champ de texte
  const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: colors.greenAccent[400],
        borderRadius: '8px',
      },
      '&:hover fieldset': {
        borderColor: colors.greenAccent[400],
      },
      '&.Mui-focused fieldset': {
        borderColor: colors.primary.main,
      },
      '& .MuiOutlinedInput-input': {
        padding: '12px 14px',
      },
    },
    '& .MuiFormLabel-root': {
      color: colors.grey[400],
      fontSize: '14px',
    },
  });

  // Créer un style personnalisé pour le bouton
  const StyledButton = styled(Button)({
    textTransform: 'none',
    borderRadius: '24px',
    padding: '12px 32px',
    fontSize: '16px',
    fontWeight: 500,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    backgroundColor: colors.primary.main,
    '&:hover': {
      backgroundColor: colors.primary.dark,
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
      transform: 'translateY(-1px)',
    },
    '&:disabled': {
      backgroundColor: colors.grey[400],
      opacity: 0.7,
    },
  });


 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      const contactData = {
        ...formData,
        createdAt: new Date(),
        userId: auth.currentUser?.uid,
      };

      await addDoc(collection(db, 'myContacts'), contactData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        company: '',
      });

      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: 'auto',
        p: 4,
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          color: colors.primary.main,
          fontWeight: 600,
          mb: 3,
          textAlign: 'center',
        }}
      >
        Contact Us
      </Typography>

      <StyledTextField
        required
        name="name"
        label="Full Name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: '1px',
            },
          },
        }}
      />

      <StyledTextField
        required
        name="email"
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: '1px',
            },
          },
        }}
      />

      <StyledTextField
        name="phone"
        label="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: '1px',
            },
          },
        }}
      />

      <StyledTextField
        name="company"
        label="Company Name"
        value={formData.company}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: '1px',
            },
          },
        }}
      />

      <StyledTextField
        required
        name="subject"
        label="Subject"
        value={formData.subject}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: '1px',
            },
          },
        }}
      />

      <StyledTextField
        required
        name="message"
        label="Message"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: '1px',
            },
          },
          '& .MuiOutlinedInput-input': {
            padding: '16px 14px',
          },
        }}
      />

      <StyledButton
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
        sx={{
          mt: 3,
          backgroundColor: colors.primary.main,
          '&:hover': {
            backgroundColor: colors.primary.dark,
          },
          '&:disabled': {
            backgroundColor: colors.grey[400],
            opacity: 0.7,
          },
        }}
      >
        {loading ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <CircularProgress size={20} color="inherit" />
            Sending...
          </Box>
        ) : (
          'Send Message'
        )}
      </StyledButton>
    </Box>
  );
};

export default ContactMe;