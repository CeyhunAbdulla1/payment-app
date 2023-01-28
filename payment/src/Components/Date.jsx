import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function CustomInput({value,name,onChange}) {
  return (
    
    <Stack component="form" noValidate spacing={3}>
       <TextField
        value={value}
        name={name}
        onChange={onChange}
        id="date"
        label="Qebzin tarixi"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );
}
