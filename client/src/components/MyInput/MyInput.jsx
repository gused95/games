import React from 'react'
import { MenuItem, TextField } from '@mui/material'


const MyInput = (props) => {

    const { 
      idName, 
      label, 
      type, 
      onChange, 
      value,

      helperText,
      placeholder,

      multiline,
      maxRows,
      error,

      select,
      optArr
    } = props

  return (
    <TextField
        id={idName}
        label={label}
        type={type}
        name={idName}
        value={value}
        onChange={onChange}
        variant="filled"
        fullWidth
        required
        
        helperText={helperText}
        placeholder={placeholder}

        multiline={multiline}
        maxRows={maxRows}
        error={error}

        
        select={select}

    >
     {select && (
      
      optArr.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))
    )}
   
    
    </TextField>
  )
}

export default MyInput