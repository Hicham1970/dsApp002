import React from 'react';
import { useTheme } from '@mui/material/styles';
import { tokens } from '../theme'; // Assurez-vous que ce chemin est correct
import { InputBase, InputAdornment, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const GlobalFilter = ({ filter, setFilter }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '16px',
        px: 2, // Padding horizontal pour éviter le chevauchement avec la scrollbar
      }}
    >
      <Box sx={{ maxWidth: '600px', width: '100%' }}>
        <InputBase
          value={filter || ''}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          placeholder="Search..."
          sx={{
            backgroundColor: colors.primary[400],
            color: colors.greenAccent[100],
            borderRadius: '4px',
            padding: '8px 12px',
            fontSize: '1rem',
            '&::placeholder': {
              color: colors.grey[500],
              opacity: 1,
            },
            '&:hover': {
              backgroundColor: colors.grey[300],
            },
            '&:focus-within': {
              backgroundColor: colors.grey[800],
              boxShadow: `0 0 0 2px ${colors.greenAccent[500]}`,
            },
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                disabled
                sx={{
                  color: colors.grey[100],
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
    </Box>
  );
};

export default GlobalFilter;