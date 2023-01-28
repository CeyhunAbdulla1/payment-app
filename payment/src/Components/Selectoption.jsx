import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels({className,onChange,name,value}) {
  const [age, setAge] = React.useState('');



  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <InputLabel id="demo-simple-select-helper-label">Təlim</InputLabel>
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
          <MenuItem value="Java">Java</MenuItem>
          <MenuItem value="Frontend">Frontend</MenuItem>
          <MenuItem value="Devops">Devops</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}