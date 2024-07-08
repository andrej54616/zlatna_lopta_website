import React from 'react';
import { Container, Grid, Typography, Box, } from '@mui/material';
import image from '../images/football.jpg'
import icon1 from '../images/icons_f.png'
import icon2 from '../images/icons_p.png'
import icon3 from '../images/icons_s.png'
import icon4 from '../images/icons-b.png'

const About = () => {
    return (
      <Container maxWidth={false} sx={{ maxWidth: '1170px', margin: 'auto' }}>
        <Typography
        id="onama"
          fontWeight='500' 
          variant="h3"
          component="h3"
          align="center" 
          sx={{ color: '#000', marginBottom: '1em', paddingTop: '1em' }}
        >
          O nama
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>   
            <Typography variant="body1" component="p" align="left" style={{ marginBottom: '1em' }}>
            U širem centru grada na uglu ulica Južni bulevar i Đerdapska na opštini Vračar smeštena je savremena balon sala za mali fudbal "Zlatna lopta", kao deo istoimenog sportskog kluba pravo mesto za
            rekreaciju i druženje sa porodicom, prijateljima i kolegama.
            Provedite zlatne trenutke i uzmite jedan sportski predah od uzurbane svakodnevnice. Usluge balon sale SK "Zlatna lopta", su vam na raspolaganju svakog dana od 9h do 24h.
            </Typography>
            <Typography  variant="body1" component="p" align="left" style={{ marginBottom: '1em' }}>
            Balon sala "Zlatna lopta" otvorena je 2014 godine. Teren balon sale površine je 33 sa 16 metara, okružen martinelom. Prekriven je vestačkom travom ispod koje je podloga napravljena od reciklirane gume. Tehnologija primenjena u pravljenju ovakve podloge osmišljena je kako bi štitila zglobove prilikom padova i kao takva podloga je pogodna za sportske aktivnosti svih uzrasta i starosnih dobi.
            </Typography>
            <Typography  variant="body1" component="p" align="left">
            Trava je postavljena od strane firme Pejkom d.o.o zvaničnog distributera POLYTAN Gmbx iz Nemacke, koja poseduje sertifikate FIFA I UEFA o kvalitetu. Platno sale je od PVC materijala koji propušta svet- lost ali istovremeno poseduje UV zaštitu čime se unutar sale ne stvara efekat staklene bašte. Sala se tokom zime greje, a tokom leta se duže bočne strane sale otvaraju kako bi se omogućilo prirodno strujanje vazduha i prijatna klima tokom toplih letnjih dana.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
  <Box
    sx={(theme) => ({
      overflow: 'hidden', 
      paddingTop: '20px',
      borderRadius: '20px', 
      [theme.breakpoints.up('md')]: {
        paddingTop: '100px'
      }
    })}
  >
    <img
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '20px', 
      }}
      alt="Complex"
      src={image}
    />
  </Box>
</Grid>
  
<Grid container item xs={12} marginTop='20px' justifyContent="space-between" spacing={1}>
 
  <Grid item xs={12} sm={2} textAlign="center" sx={{ mb: 3 }}>
    <Box
      component="img"
      src={icon1} 
      sx={{ width: 60, height: 60 }} 
    />
    <Typography variant="body2">
    Teren je predviđen za 10 do 12 igrača.
    </Typography>
  </Grid>

  <Grid item xs={12} sm={2} textAlign="center" sx={{ mb: 3 }}>
    <Box
      component="img"
      src={icon2} 
      sx={{ width: 60, height: 60 }} 
    />
    <Typography variant="body2">
    Uslužni fenovi i obezbeđen parking.
    </Typography>
  </Grid>

  <Grid item xs={12} sm={2} textAlign="center" sx={{ mb: 3 }}>
    <Box
      component="img"
      src={icon3} 
      sx={{ width: 60, height: 60 }} 
    />
    <Typography variant="body2">
    Četiri svlačionice sa tuševima i podnim grejanjem.
    </Typography>
  </Grid>

  <Grid item xs={12} sm={2} textAlign="center" sx={{ mb: 3 }}>
    <Box
      component="img"
      src={icon4} 
      sx={{ width: 60, height: 60 }} 
    />
    <Typography variant="body2">
    Obezbeđeni markeri. lopte i ostali sportski rekviziti.
    </Typography>
  </Grid>
</Grid>
        </Grid>
      </Container>
    );
  };
  
  export default About;