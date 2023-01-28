import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selectgroup({className,onChange,name,value,label}) {
  const [age, setAge] = React.useState('');
  return(
    <div>
        <FormControl  sx={{ m: 1, minWidth: 130 }}>
        <InputLabel id="demo-simple-select-helper-label">Qrup</InputLabel>
        <Select
         labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          className={className}
          name={name}
          value={value}
          onChange={onChange}
          label="Təlim"
          size='medium'
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </div>
  )}