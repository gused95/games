import React from 'react'

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import service from '../../api/service';
import Typography from '@mui/material/Typography'


const DetailsGame = () => {

    const [game, setGame] = useState([]);
    const { id } = useParams()
    const navigate = useNavigate();

    // Run the effect after the initial render to get a list of games from the server
    useEffect(() => {
        service.getGame(id)
        .then((data) => {
            // console.log("data", data);
            setGame(data);
        })
        .catch((err) => console.log(err));
    }, []); //  <-- This effect will run only once, after the initial render

  return (
    <Box 
        component="div" 
        sx={{
          my: 1,
          mx: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" color="initial" gutterBottom>
            Details
        </Typography>
        {game && (
            <>
                <DetailsCard {...game}/>          
            </>
        )}
    </Box>
  )
}

export default DetailsGame