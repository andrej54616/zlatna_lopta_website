import React from 'react';
import {Container, AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText,ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/Logo_Zlatna_Lopta-01.png'
import './css/Cover.css'; 

const pages = ['O Nama', 'Škola Fudbala', 'Rođendani', 'Kontakt'];

function ResponsiveAppBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const [scrolled, setScrolled] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCloseDrawer = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (event, id) => {
    handleCloseDrawer();
    event.preventDefault();
    const anchor = (event.target.ownerDocument || document).querySelector(id);

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: 'grey.900', 
        height: '100%', 
      }}
      role="presentation"
      onClick={handleCloseDrawer}
      onKeyDown={handleCloseDrawer}
    >
      <List>
        {pages.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={`#${text.replace(/\s/g, '').toLowerCase()}`} sx={{ color: 'white' }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" style={{ 
      background: scrolled ? 'rgba(33, 33, 33, 0.8)' : 'transparent', 
      boxShadow: 'none', 
      transition: 'background-color 0.5s ease' 
  }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
          display: 'flex',
          justifyContent: 'space-between',
          ml: { md: '100px' }, 
          mr: { md: '100px' }  
        }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#home"
            sx={{
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="Zlatna Lopta Logo" className='nav-logo' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
  {pages.map((page) => (
    <Button
      key={page}
      onClick={(event) => handleNavClick(event, `#${page.replace(/\s/g, '').toLowerCase()}`)}
      sx={{
        my: 2,
        color: 'white',
        display: 'block',
        textTransform: 'none',
        fontFamily: 'Open Sans, sans-serif',
        borderRadius: '15px', 
        '&:hover': {
          bgcolor: 'white', 
          color: 'black', 
        },
      }}
    >
      {page}
    </Button>
  ))}
</Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="navigation menu"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleCloseDrawer}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default ResponsiveAppBar;