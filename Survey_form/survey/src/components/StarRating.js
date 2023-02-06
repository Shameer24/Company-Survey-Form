import { Rating, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/material/styles';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import '../css/StarRating.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarSharpIcon from '@mui/icons-material/StarSharp';
import { ElevenMp } from "@mui/icons-material";


const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ffc000',
  },
  '& .MuiRating-iconHover': {
    color: '#ffc000',
  },
});


export const arr =Array(10);

const StarRating = (param) => {
  const [ans, setAns] = useState(arr);
  const [value, setvalue] = useState(0);

  const handlechange = (value) => {
    setvalue(value);
    ans[param.value] = value;
    setAns(ans)
  };


  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div>
      <StyledRating value={value}
        onChange={(e) => {
          handlechange(e.target.value)
        }}
        max={10}
        sx={{ fontSize: '3rem' }}
        variant="contained"
        size="large"
        startIcon={<StarSharpIcon />}
        icon={<StarSharpIcon fontSize="inherit" ></StarSharpIcon>}
        emptyIcon={<StarSharpIcon sx={{ "font": "revert-layer" }} fontSize="inherit"></StarSharpIcon>}>
      </StyledRating>
      <div id="num">{values.map((num) => (
        <div id="eachnum" >{num}</div>
      ))}
      </div>
    </div>
  )
}

export default StarRating