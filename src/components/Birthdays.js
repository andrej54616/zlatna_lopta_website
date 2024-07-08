import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import image from '../images/football.jpg'
import GalleryItem from './GalleryItem';

const Birthdays = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '2em', backgroundColor: '#fff' }}>
      <Typography
        id="rođendani"
        fontWeight='500' 
        variant="h3"
        component="h3"
        align="center" 
        sx={{ color: '#000', marginBottom: '1em' }}
      >
        Rođendani
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography align='left' variant="body1" paragraph>
            U okviru posebnih usluga u balonu za mali fudbal "Zlatna lopta" nudimo organizaciju dečijih sportskih rođendana.
          </Typography>
          <Typography align='left' variant="body1" paragraph>
            Termini se naplaćuju po satu - 1h je 5000din.
          </Typography>
          <Typography align='left' variant="body1" paragraph>
            U cenu je uključeno: <br/>
            - Korišćenje terena i kafića <br/>
            - Osoblje za decu i roditelja <br/>
            - Posluživanje hrane i pića <br/>
            Mogućnost angažovanja sportskog animatora ukoliko deca i roditelji to žele.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={10} lg={10}>
              <GalleryItem src={image} alt="Large Image" xs={12} />
            </Grid>
            <Grid item xs={5} lg={5}>
              <GalleryItem src={image} alt="Top Right Image 1" xs={12} />
            </Grid>
            <Grid item xs={5} lg={5}>
              <GalleryItem src={image} alt="Top Right Image 2" xs={12} />
            </Grid>
        
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Birthdays;
