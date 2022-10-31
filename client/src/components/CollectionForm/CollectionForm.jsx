import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { green } from '@mui/material/colors';
import MyInput from '../MyInput/MyInput';


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
        optDev,
        optCons,
        imageUrl,
        optActive,
        errMsg,
        errStatus
      } = props;    
    
      
      const nameField = {
        idName: 'name',
        label: 'Name',
        type: 'text',
        value: name,
        onChange: handleInputChange,
        helperText: ''
      };

      const descriptField = {
        idName: 'description',
        label: 'Description',
        value: description,
        onChange: handleInputChange,
        maxRows: 4,
        placeholder: 'For instance: shooter game',
        error: errStatus,
        helperText: 'Description only accept 300 characters'
      }

      const yearField = {
        idName: 'year',
        label: 'Indicate the year of creation',
        type: 'number',
        value: year,
        onChange: handleInputChange,
        helperText: 'Enter a number'
      };

      const devField = {
        idName: 'developer',
        label: 'Select a developer',
        type: 'text',
        value: developer,
        onChange: handleInputChange,
        select: true,
        optArr: optDev
      };

      const activeField = {
        idName: 'active',
        label: 'Select the game status',
        type: 'text',
        value: active,
        onChange: handleInputChange,
        select: true,
        optArr: optActive
      }

      const consField = {
        idName: 'consoles',
        label: 'Select console',
        type: 'text',
        value: consoles,
        onChange: handleInputChange,
        select: true,
        optArr: optCons
      }


      

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
                    <MyInput {...nameField} />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <MyInput {...descriptField} />
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
                  <MyInput {...devField} />
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
                  <MyInput {...yearField} />
                </Grid>
                <Grid item xs={12}>
                  <MyInput {...activeField} />
                </Grid>
                <Grid item xs={12}>
                  <MyInput {...consField} />
                </Grid>

              </Grid>
              {errMsg && (
                <>
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
                    <Typography variant="body1" color="error">
                      {errMsg}
                    </Typography>
                  </Grid>
                </Grid>
                </>
              )}

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