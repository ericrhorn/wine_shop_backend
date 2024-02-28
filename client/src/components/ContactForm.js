import React from 'react';
import { Box, TextField, Button, MenuItem, Grid } from '@mui/material';
import winery from "../assets/winery.jpeg";

export const ContactForm = () => {
  const inquiries = [
    { value: 'Wine Club', label: 'Wine Club' },
    { value: 'Wine Club', label: 'Wine Club' },
    { value: 'Wine Club', label: 'Wine Club' },
    { value: 'Wine Club', label: 'Wine Club' },
    { value: 'Wine Club', label: 'Wine Club' }
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{
        backgroundImage: `url(${winery})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '700px', // Adjust the height as needed
      }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ maxWidth: '800px', width: '100%', padding: '20px' }}
      >
        <h1>Questions?</h1>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              style={{ backgroundColor: 'white'}}
              fullWidth
              id="name"
              label="Name"
              variant='filled'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              style={{ backgroundColor: 'white' }}
              fullWidth
              id="email"
              label="Email"
              variant='filled'
            />
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              style={{ backgroundColor: 'white' }}
              fullWidth
              id="phone number"
              label="Phone Number"

              variant='filled'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              style={{ backgroundColor: 'white' }}
              fullWidth
              id="inquiry"
              select
              label="Inquiry"
              variant='filled'
            >
              {inquiries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={12}>
          <TextField
            style={{ backgroundColor: 'white' }}
            fullWidth
            id="outlined-multiline-static"
            label="Question"
            multiline
            rows={6}
            // defaultValue="Default Value"
            variant='filled'
          />
          </Grid>

        </Grid>
        <Grid 
          item container spacing={2}
          alignItems="center"
          justifyContent="center"
          >
          <Grid item>
          <Button variant="contained">Submit Question</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
