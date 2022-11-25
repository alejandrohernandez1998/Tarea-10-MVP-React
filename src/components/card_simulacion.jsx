import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Simulacion from '../assets/680x360-simulador-pdt.jpg'

export default function CardSimulacion() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={Simulacion}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Simulaciones
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Obten tu puntaje ponderado y revisa los cortes del año anterior
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='/simulacion_1' variant="contained">Simula tu puntaje</Button>
      </CardActions>
    </Card>
  );
}