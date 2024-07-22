import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import map from '../images/map.png'
import map1 from '../images/mapPhone-01.png'

const Contact = () => {
  return (
    <section style={{ backgroundColor: '#EFEFEF', paddingTop: '2em' }}>
  <Container maxWidth="lg">
    <Typography
      fontWeight="500"
      id="kontakt"
      variant="h2"
      component="h2"
      sx={{ color: '#000', marginBottom: '0.5em', textAlign: 'center' }}
    >
      Kontakt
    </Typography>
    <Typography variant="body1" sx={{ textAlign: 'center' }}>
      Ukoliko imate bilo kakvih pitanja ili nejasnoća možete nas kontaktirati:
    </Typography>
    <Typography variant="body1" sx={{ textAlign: 'center' }}>
      Mob: 063 37 96 96
    </Typography>
    <Typography variant="body1" sx={{ marginBottom: '2em', textAlign: 'center' }}>
      mail: skzlatnalopta@gmail.com
    </Typography>
  </Container>
  <Box sx={{ textAlign: 'center' }}>
  <a
    href="https://www.google.com/maps/place/Zlatna+lopta/@44.7926114,20.4861079,17z/data=!4m7!3m6!1s0x475a707b994a2d85:0x916d386a4b115581!4b1!8m2!3d44.7926114!4d20.4861079!16s%2Fg%2F11c1rt6tnh?hl=sr&entry=ttu"
    target="_blank"
    rel="noopener noreferrer"
  >
    <picture>
      <source media="(max-width: 600px)" srcSet={map1} />
      <img src={map} alt="Google Maps" style={{ width: '100%', height: 'auto', display: 'block' }} />
    </picture>
  </a>
</Box>
</section>
  );
};

export default Contact;