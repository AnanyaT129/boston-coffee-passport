import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useTheme from '@mui/material/styles/useTheme';

export default function AppHeader() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={"primary"}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color='secondary'
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color={theme.palette.primary.contrastText} component="div" sx={{ flexGrow: 1 }}>
            A Town Of Beans
          </Typography>
          <Button color="secondary">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
