import React, { useEffect, useReducer, useRef, useState } from 'react'
import "../css/Question.css"
import { Alert, Button, Rating, Snackbar, Typography } from '@mui/material';
import StarRating, { value } from './StarRating';
import { arr } from './StarRating';
import Checkques from './Checkques';
import Commentques from './Commentques';
import { useForm } from "react-hook-form";
import App from "../App.js"
import { Link, Route, Routes , useNavigate} from 'react-router-dom';
import { Replay } from '@mui/icons-material';


const Question = (param) => {

  const navigate = useNavigate();
  const star = useRef({});
  const {reset , handleSubmit} = useForm();
  const [questionData, setQuestionData] = useState([]);
  useEffect(() => {
    setQuestionData(param.data.data)
  }, [param], [arr]);


  const [state, setState] = React.useState({
    open: false,
    vertical: 'center',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    const valid = arr.map((value, i) => {
      if (value === 0) {
        star.current[i].focus();
        setState({ open: true, ...newState });
      }
      else {
        console.log(arr);
      }
    })
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const rating = questionData && questionData.map((item, index) => {
    if (item.type === "rating") {
      return (
        <>
          <div id="rating-ques" ke={index} >{item.question}</div>
          <div id="rating">
            <div id="stars" ref={(element) => star.current[index] = element} tabIndex={"-1"} key={index} ><StarRating value={index} /></div>
          </div>
          <hr />
        </>
      )
    }
    else if (item.type === "selection") {
      return (
        <>
          <div id="select-ques" key={index} > {item.question}</div>
          <div id="select"><Checkques value={index} list={item.choices} /></div>
          <hr />
        </>
      )
    }
    else {
      return (
        <>
          <div id="comment-ques" key={index} > {item.question}</div>
          <div id="comment"><Commentques value={index} /></div>
        </>
      )
    }
  })

  const submitform = (e) => {
    e.preventDefault();
    console.log(arr);
    // navigate('/App',{replace : true});
  }

  return (
    <>
      {/* <form onSubmit={submitform}> */}
        <div id="ques">{rating}</div>
        <React.Fragment>
          <Link to="/App"><Button
            onClick={handleClick({
              vertical: 'bottom',
              horizontal: 'center',
            })} type="submit"
          >
           Submit
          </Button></Link>
        </React.Fragment>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          key={vertical + horizontal}
        >
          <Alert severity='error'>Answer all Questions</Alert>
        </Snackbar>
      {/* </form> */}
      {/* <Routes>
          <Route path="/App" element={<App/>}/>
      </Routes> */}
    </>
  )
}

export default Question
