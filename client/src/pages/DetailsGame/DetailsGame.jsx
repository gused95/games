import React from 'react'

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import service from '../../api/service';
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material';


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
    }, [id]); //  <-- This effect will run only once, after the initial render

    const deleteGame = () => {
        service.delGame(id)
        .then(() => {
            // Once the delete request is resolved successfully
            // navigate back to the list of Games.
            navigate("/games");
          })
        .catch((err) => console.log(err));
    }

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
        {game && (
            <>
                
                  <DetailsCard 
                      {...game}
                      deleteGame={deleteGame}
                  />            
                
                
            </>
        )}
    </Box>
  )
}

export default DetailsGame