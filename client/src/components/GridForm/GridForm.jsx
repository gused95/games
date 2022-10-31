import React from 'react'
import { Grid } from '@mui/material'
import Paper from '@mui/material/Paper';

const GridForm = (props) => {
  return (
    <Grid 
    item 
    container 
    xs={11} 
    component={Paper} 
    elevation={5} 
    sx={{ m: 1, padding: 1 }}
    justifyContent='center'
    alignContent='center'
    rowSpacing={2}
     >
        {props.children}
     </Grid>
  )
}

export default GridForm