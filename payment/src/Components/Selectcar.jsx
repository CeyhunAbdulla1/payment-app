import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall({className}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl className={className} sx={{ m: 1, minWidth: 215, }} size="small">
      <InputLabel id="demo-select-small">Card</InputLabel>
      <Select 
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Card hesabi</em>
        </MenuItem>
        <MenuItem  value={10}>Imran Yusifov</MenuItem>
        <MenuItem value={20}>Ferid Yusifzade</MenuItem>
        <MenuItem value={30}>Vahid hesenov</MenuItem>
      </Select>
    </FormControl>
  );
}