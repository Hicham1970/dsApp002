import React from 'react';
import { useTheme } from '@mui/material/styles';
import { tokens } from '../theme'; // Assurez-vous que ce chemin est correct
import { InputBase, InputAdornment, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const ColumnFilter = ({ column }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { filterValue, setFilter } = column

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
          value={filterValue || ''}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          placeholder="Search..."
          sx={{
            backgroundColor: colors.primary[400],
            color: colors.grey[100],
            borderRadius: '4px',
            padding: '8px 12px',
            fontSize: '1rem',
            '&::placeholder': {
              color: colors.grey[300],
              opacity: 1,
            },
            '&:hover': {
              backgroundColor: colors.primary[300],
            },
            '&:focus-within': {
              backgroundColor: colors.primary[200],
              boxShadow: `0 0 0 2px ${colors.blueAccent[500]}`,
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

