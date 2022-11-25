import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Admision from '../assets/consulta-adm2.jpg'

export default function CardAdmision() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={Admision}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Admisiones USM
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Postula a nuestros diversos programas
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='/admision' variant="contained">Postulación</Button>
      </CardActions>
    </Card>
  );
}