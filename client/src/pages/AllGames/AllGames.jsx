import React, { useEffect, useState } from 'react'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ObjectCard from '../../components/ObjectCard/ObjectCard';
import { amber } from '@mui/material/colors';

import service from '../../api/service';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

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
    <div>AllGames

        <Grid 
        container component="main" 
        sx={{ height: '100vh' }} 
        justifyContent='center'
        alignItems='center'
        >
            <Grid  
                item 
                container 
                xs={12} 
                sm={10} 
                md={10} 
                component={Paper} 
                elevation={8} 
                square
                justifyContent='center'
                alignItems='center'
                sx={{ padding: 3 }}
            >
                
                
                <Box 
                    sx={{ 
                        flexGrow: 1, 
                        backgroundColor: amber['A100'], 
                        padding: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center,'
                    }}
                >
                    <Grid 
                        item
                        container 
                        spacing={{ xs: 2, md: 3 }} 
                        columns=
                            {{  xs: 4,
                                sm: 8, 
                                md: 12 
                            }}
                        
                        sx=
                            {{
                                // backgroundColor: 'green',
                                m:1, 
                                padding: 2,
                            }}
                        
                    >
                        
                        {games?.map((object, index) => (
                        <Grid 
                            item xs={4} 
                            sm={8} 
                            md={4} 
                            key={index}
                        >
                            <ObjectCard {...object} key={object._id}/>
                            
                        </Grid>
                        ))}
                    </Grid>

                </Box>

            </Grid>
        </Grid>
    </div>
  )
}

export default AllGames