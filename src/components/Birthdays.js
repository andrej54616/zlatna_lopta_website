import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import image from '../images/kafic.jpeg'
import image1 from '../images/terenStrana.jpeg'
import image2 from '../images/terenPozadina.jpeg'
import GalleryItem from './GalleryItem';

const Birthdays = () => {
  return (
    <section>
      <Container maxWidth="lg" sx={{ padding: '2em', backgroundColor: '#fff' }}>
        <Typography
          id="rođendani"
          fontWeight="500"
          variant="h2"
          component="h2"
          align="center"
          sx={{ color: '#000', marginBottom: '1em' }}
        >
          Rođendani
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography align="left" variant="body1" paragraph>
              U okviru posebnih usluga u balonu za mali fudbal "Zlatna lopta" nudimo organizaciju dečijih sportskih rođendana.
            </Typography>
            <Typography align="left" variant="body1" paragraph>
              Termini se naplaćuju po satu - 1h je 5000din.
            </Typography>
            <Typography align="left" variant="body1" paragraph>
              <ul>
                <li>Korišćenje terena i kafića</li>
                <li>Osoblje za decu i roditelja</li>
                <li>Posluživanje hrane i pića</li>
                <li>Mogućnost angažovanja sportskog animatora ukoliko deca i roditelji to žele.</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <GalleryItem src={image} alt="Top Right Image 1" />
              </Grid>
              <Grid item xs={6}>
                <GalleryItem src={image1} alt="Top Right Image 2" />
              </Grid>
              <Grid item xs={12}>
                <GalleryItem src={image2} alt="Large Image" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Birthdays;
