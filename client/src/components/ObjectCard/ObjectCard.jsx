import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
      color: 'black',
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props?.imageUrl}
        alt="game image"
      />
      <CardContent>
        
          <Typography gutterBottom variant="h6" component="div">
            <Link to={`/games/${_id}`} style={linkStyle}>
              {name}
            </Link>
          </Typography>
        
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
