import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArancelDiurno from '../assets/diurno-arancel.jpg'

export default function CardAranceles() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={ArancelDiurno}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Aranceles
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cotiza tu arancel por carrera y sede
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='/aranceles' variant="contained">Revisa los aranceles</Button>
      </CardActions>
    </Card>
  );
}