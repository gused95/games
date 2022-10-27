import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { green } from '@mui/material/colors';

const CollectionForm = (props) => {

    const { 
        name, 
        description, 
        year, 
        active, 
        consoles,
        developer,
        handleFormSubmission,
        handleInputChange,
        handleFileUpload,
        options1,
        options2,
        imageUrl,
      } = props;    
    
    

  return (
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
        sm={8} 
        md={5} 
        component={Paper} 
        elevation={6} 
        square
        justifyContent='center'
      >
        
        <Box component="form" onSubmit={handleFormSubmission}
          sx={{
            my: 1,
            mx: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            
              <Grid 
                item
                container 
                xs={11} 
                component={Paper} 
                elevation={5} 
                sx={{ m: 1, padding: 1 }}
                

              >
                <Grid 
                  item 
                  xs={12}
                  
                  sx={{
                      my: 1,
                      mx: 1,
                    }}
                >
                    {imageUrl ? 
                    (
                    <>
                      <img src={imageUrl} alt="" width='100%' height='100%' object-fit='cover'/>
                    </>
                    ) : (
                    <>
                      <Avatar 
                        sx=
                        {{ 
                        bgcolor: green[500], 
                        width: '100%', 
                        height: '20vw'
                        }} 
                        variant="rounded"
                      >
                        <AddAPhotoIcon 
                          sx=
                          {{ 
                          bgcolor: green[500], 
                          width: '90%', 
                          height: '10vw'
                          }} 
                        />
                      </Avatar>
                    </>
                    )

                    
                    }
                    
                </Grid>
                
                <Grid 
                  item 
                  xs={12}
                  
                  sx={{
                    my: 1,
                    mx: 1,
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <input type="file" onChange={handleFileUpload} />
                </Grid>
              
              </Grid>


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
                <Grid item xs={12}>
                  <TextField
                    id="select-developer"
                    select
                    label="Select a developer"
                    type='text'
                    name='developer'
                    value={developer}
                    onChange={handleInputChange}
                    helperText="¿Dónde quieres agregar este objeto?"
                    fullWidth
                    color='secondary'
                    variant='filled'
                  >
                    {options1.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

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
                  <Grid item xs={12}>
                    <TextField
                      id="name"
                      label="Name"
                      type='text'
                      name='name'
                      value={name}
                      onChange={handleInputChange}
                      variant="filled"
                      fullWidth
                      autoFocus
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      id="description"
                      label="Description"
                      type='text'
                      name='description'
                      value={description}
                      onChange={handleInputChange}
                      multiline
                      maxRows={4}
                      variant="filled"
                      fullWidth
                      placeholder='For instance: shooter game'
                    />
                  </Grid>
                    
              </Grid>

              

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
                <Grid item xs={12}>
                  <TextField
                    id="year"
                    label="Indicate the year of creation"
                    type='number'
                    name='year'
                    value={year}
                    onChange={handleInputChange}
                    variant="filled"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="active"
                    label="Indicate if it is currently active"
                    type='boolean'
                    name='active'
                    value={active}
                    onChange={handleInputChange}
                    variant="filled"
                    fullWidth
                    placeholder='Select'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-select-consoles"
                    select
                    label="Select an option"
                    type='text'
                    name='consoles'
                    value={consoles}
                    onChange={handleInputChange}
                    helperText="Choose the consoles available for this game, like Nintendo switch or XBOX"
                    fullWidth
                  >
                    {options2.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

              </Grid>

            <Button 
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
                    Send
            </Button>
          </Box>
        
        
      </Grid>
    </Grid>
  )
}

export default CollectionForm