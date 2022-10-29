import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import  Button  from '@mui/material/Button';
import { Link } from 'react-router-dom';

import CakeIcon from '@mui/icons-material/Cake';
import CheckIcon from '@mui/icons-material/Check';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CodeIcon from '@mui/icons-material/Code';

const linkStyle = {
  textDecoration: 'none',
  color: 'white'
}

export default function DetailsCard(props) {

  const { 
    name, 
    description, 
    year, 
    active, 
    consoles, 
    developer,
    imageUrl,
    deleteGame,
    _id } = props;

    // Traslate active value to a string
    let status = '';

    if(active){
      status = "active";
    } else {
      status = "inactive";
    }

  return (
    <Card sx={{ maxWidth: 500  }}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt="game image"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>

        <Typography variant="body3" color="text.primary">
        {`Description: `}
        </Typography>

        <Typography variant="body3" color="text.secondary">
        {description}
        </Typography>
        
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'red' }} >
                <CakeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Year:" secondary={String(year)} />  
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'purple' }}>
                <CheckIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Status:" secondary={status} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'teal' }} >
                <SportsEsportsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Console(s):" secondary={consoles}  />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'green' }} >
                <CodeIcon />
              </Avatar  >
            </ListItemAvatar>
            <ListItemText primary="Developer:" secondary={developer} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>

      </CardContent>
      <CardActions sx={{ display:'flex', justifyContent: 'center' }}>
        <Button variant='contained' color='primary'>
          <Link to={`/games/edit/${_id}`} style={linkStyle}>
            Edit
          </Link>
        </Button>
        <Button 
          variant='contained'
          onClick={deleteGame}
          color='error'
        >
            Delete 
        </Button>
      </CardActions>
    </Card>
  );
}
