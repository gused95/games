import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import ObjectCard from '../../components/ObjectCard/ObjectCard';

import service from '../../api/service';  

const AllGames = () => {

    const [games, setGames] = useState([]);
 
  // Run the effect after the initial render to get a list of games from the server
  useEffect(() => {
    service.getGames()
      .then((data) => {
        // console.log("data", data);
        setGames(data);
      })
      .catch((err) => console.log(err));
  }, []); //  <-- This effect will run only once, after the initial render

  return (
    <div>
            <Grid 
                container 
                component="main" 
                spacing={{ xs: 2, md: 2 }} 
                columns={{  
                    xs: 4,
                    sm: 8, 
                    md: 12 }}
                
                sx={{padding: 3,  }}
                
            >
                {games?.map((object, index) => (
                <Grid 
                    item 
                    xs={4} 
                    sm={8} 
                    md={3} 
                    key={index}
                >
                    <ObjectCard {...object} />
                    
                </Grid>
                ))}
            </Grid>
    </div>
  )
}

export default AllGames