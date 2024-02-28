import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import wineBottle from '../assets/wine_bottle.jpeg'

// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));



function Store() {
  return (
    <div style={{ margin: '100px auto', maxWidth: '1200px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '0px 50px 50px' }}>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={wineBottle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Red Wine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Delicious red wine from napa valley
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={wineBottle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Red Wine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Delicious red wine from napa valley
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={wineBottle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Red Wine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Delicious red wine from napa valley
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={wineBottle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Red Wine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Delicious red wine from napa valley
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={wineBottle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Red Wine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Delicious red wine from napa valley
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={wineBottle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Red Wine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Delicious red wine from napa valley
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={wineBottle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Red Wine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Delicious red wine from napa valley
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={wineBottle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Red Wine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Delicious red wine from napa valley
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={wineBottle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Red Wine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Delicious red wine from napa valley
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
      {/* <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>xs=8</Item>
          </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={10} md={8} lg={6}>
          <Item>xs=6 md=8</Item>
        </Grid>
        </Grid>
      </Box> */}
    </div>
      )
}

export default Store