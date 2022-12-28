import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import {  NavLink } from "react-router-dom";

export default function CartTAselection(props) {
 const [statetext,setStatetext] = useState('')


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{statetext}</InputLabel>
        <Select className=''
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          onChange={(e)=>{setStatetext(e.target.value)}}
          label={"TA"}
        >
       
        </Select>
      </FormControl>
    </Box>
  );
}
