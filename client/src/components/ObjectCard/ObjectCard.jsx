import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ObjectCard(props) {

  const { 
    name, 
    description, 
    imageUrl,
    _id } = props;
    
    const linkStyle = {
      textDecoration: 'none',
      color: 'white'
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props?.imageUrl}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {}
        </Typography>

        <Typography variant="body2" color="text.primary">
        {description}
        </Typography>

      </CardContent>
      <CardActions>
        {/* <Button size="small" variant='contained'><Link to={`/myCollection/${_id}` } style={linkStyle}>Detalles</Link></Button> */}
      </CardActions>
    </Card>
  );
}
