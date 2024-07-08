import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import map from '../images/map.png'

const Contact = () => {
  return (
    <Box sx={{ backgroundColor: '#EFEFEF', paddingTop: '2em' }}>
      <Container maxWidth="lg">
        <Typography fontWeight='500' 
          id='kontakt'
          variant="h3"
          component="h3" 
          sx={{ color: '#000', marginBottom: '1em', textAlign: 'center' }}>
          Kontakt
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '2em', textAlign: 'center' }}>
          Ukoliko imate bilo kakvih pitanja ili nejasnoca mozete nas kontakirati: <br />
          Mob: 063 37 96 96 <br />
          mail: skzlatnalopta@gmail.com
        </Typography>
      </Container>
      <Box sx={{ textAlign: 'center' }}>
        <a href='https://www.google.com/maps/place/Zlatna+lopta/@44.7926114,20.4861079,17z/data=!4m7!3m6!1s0x475a707b994a2d85:0x916d386a4b115581!4b1!8m2!3d44.7926114!4d20.4861079!16s%2Fg%2F11c1rt6tnh?hl=sr&entry=ttu' target="_blank" rel="noopener noreferrer">
         <img src={map} alt="Google Maps" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </a>
      </Box>
    </Box>
  );
};

export default Contact;