import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import image from '../images/skolaFudbala.png'

const SchoolOfFootball = () => {
  return (
    <section>
    <Box sx={{ backgroundColor: '#EFEFEF', paddingY: 4 }}>
      <Container maxWidth="lg" sx={{ margin: 'auto', padding: '2em' }}>

      <Typography
      id="školafudbala"
          fontWeight='500' 
          variant="h2"
          component="h2"
          align="center" 
          sx={{ color: '#000', marginBottom: '1em' }}
        >
          Škola Fudbala
        </Typography>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} textAlign="center">
            <img src={image} alt="Football Field" style={{ width: '100%', borderRadius: '10px' }} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography align='left' variant="h5" component="h3" sx={{ fontWeight: '500', color: '#333' }}>
              B F C - Škola fudbala
            </Typography>
            <Typography align='left' variant="body1" sx={{ color: '#555', marginBottom: '1em' }}>
              Škola fudbala "Dušanovac" je nastala 2004. godine i radi sa decom uzrasta od 6 do 19 godina. Osnovni motiv je želja da se što više dečaka i devojčica opredele za bavljenje sportom što će im neprocenjive vrednosti za njihovo fizičko razvijanje.
            </Typography>
            <Typography align='left' variant="body1" sx={{ color: '#555', marginBottom: '1em' }}>
            Treninzi traju 60 minuta i usmereni su ka sticanju i razvoju motoričkih sposobnosti, elementarne tehnike i timskog rada budućih sportista. Napredak dečaka je pod budnim okom diplomiranih trenera koji
            sprovode duguročni plan za pravilan razvoj mladih sportista.
            </Typography>
            <Typography align='left' variant="body1" sx={{ color: '#555', marginBottom: '1em' }}>
            Naši treneri su vrhunski profesionalci koji našu školu fudbala za najmlađe vode predano i uspešno. Želimo da svoje članove naučimo da:
            </Typography>
            
            <Typography fontWeight='500' align='left' variant="body1" sx={{ color: 'black' }}>
              "Što je teža pobeda, veća je sreća nakon nje."
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </section>
  );
};

export default SchoolOfFootball;