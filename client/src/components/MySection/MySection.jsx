import { Grid, Typography } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom';

const MySection = (props) => {

    const { title, img, path } = props ;
    const linkStyle = {
        textDecoration: 'none',
        color: 'white'
    }

  return (
    <Grid 
    container 
    sx={{
        width: '100%',
        height: '50%'
    }}
    >
        <Grid item
        sx={{
            width: '100%',
            height: '20vh'
        }}
        >
            <img src={img} alt="beers" />
        </Grid>
        <Grid item>
            <Typography variant="h4" color="white">
                <Link to={path} style={linkStyle}>{title}</Link>
            </Typography>
            <Typography variant="body2" color="white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat aperiam nihil doloremque laudantium eum amet est dolor provident sunt voluptates deleniti commodi accusantium ad, sint numquam ex non libero velit!
            </Typography>
        </Grid>

    </Grid>
  )
}

export default MySection