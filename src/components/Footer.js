import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#2E2E2E', height: '86px', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', color: '#FFFFFF' }}>
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
          &#169; 2016 Zlatna Lopta
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <a href="https://www.instagram.com/zlatnalopta/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" style={{ marginRight: '10px', width: '24px', height: '24px' }} />
          </a>
          <a href="https://www.facebook.com/balon.sala.zlatnalopta/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" style={{ width: '24px', height: '24px' }} />
          </a>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;