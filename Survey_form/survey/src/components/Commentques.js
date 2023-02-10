import React from 'react'
import TextField from '@mui/material/TextField';
import "../css/Commentques.css"
import {arr} from "./StarRating"
import { ElevenMp } from '@mui/icons-material';

const Commentques = (props) => {

  const handlechange = (event) => {
    const value = event.target.value;
    arr[props.value] = value;
  }

  return (
    <div id="commentbox">
      <TextField
        label="Type here..."
        multiline
        fullWidth
        
        onChange={handlechange}
        rows={4}
        color = 'info'
      />
    </div>
  )
}

export default Commentques