import React, { useEffect, useReducer, useState } from 'react'
import "../css/Question.css"
import { Rating, Typography } from '@mui/material';
import StarRating , {value} from './StarRating';
import {arr} from './StarRating';
import Checkques from './Checkques';

const Question = (param) => {

  const [questionData, setQuestionData] = useState([]);
  useEffect(() => {
    setQuestionData(param.data.data)
  }, [param],[arr]);

  const rating = questionData && questionData.map((item, index) => {
    if (item.type === "rating") {
      return (
        <>
          <div id="rating-ques" key={index} >{item.question}</div>
          <div id="rating">
            <div id="stars"><StarRating value={index} /></div>
          </div>
          <hr />
        </>
      )
    }
    else if (item.type === "selection") {
      return (
        <>
          <div id="select-ques" key={index} > {item.question}</div>
          <div id= "select"><Checkques value ={index} list={item.choices} /></div>
          <hr />
        </>
      )
    }
    else {
      return (
        <div id="comment-ques" key={index} > {item.question}</div>
      )
    }
  })

  return (
    <>
    <div id="ques">{rating}</div>
    </>
  )
}

export default Question



// {/* < div classname="stars_wrapper br-lt-0 br-8" > */}
//   // <ul class="stars d-flex justify-content-between">
//     <li class="star selected neutral" title=" 0" onclick="RemoveQuestion(&quot;nextstep&quot;,this)" data-value=" 0" questionelement="1461136845088">
//       <a class="star-icon">
//         <span class="star-status-text">
//           0
//         </span>
//       </a>
//     </li>
//     <li class="star selected neutral" title=" 1" onclick="RemoveQuestion(&quot;nextstep&quot;,this)" data-value=" 1" questionelement="1461136845088">
//       <a class="star-icon">
//         <span class="star-status-text">
//           1
//         </span>
//       </a>
//     </li>
//     <li class="star selected neutral" title=" 2" onclick="RemoveQuestion(&quot;nextstep&quot;,this)" data-value=" 2" questionelement="1461136845088">
//       <a class="star-icon">
//         <span class="star-status-text">
//           2
//         </span>
//       </a>
//     </li>
//     <li class="star selected neutral" title=" 3" onclick="RemoveQuestion(&quot;nextstep&quot;,this)" data-value=" 3" questionelement="1461136845088">
//       <a class="star-icon">
//         <span class="star-status-text">
//           3
//         </span>
//       </a>
//     </li>
//     <li class="star selected neutral" title=" 4" onclick="RemoveQuestion(&quot;nextstep&quot;,this)" data-value=" 4" questionelement="1461136845088">
//       <a class="star-icon">
//         <span class="star-status-text">
//           4
//         </span>
//       </a>
//     </li>













//     <li class="star selected neutral" title=" 5" onclick="RemoveQuestion(&quot;nextstep&quot;,this)" data-value=" 5" questionelement="1461136845088">
//       <a class="star-icon">
//         <span class="star-status-text">
//           5
//         </span>
//       </a>
//     </li>













//     <li class="star selected neutral" title=" 6" onclick="RemoveQuestion(&quot;nextstep&quot;,this)" data-value=" 6" questionelement="1461136845088">
//       <a class="star-icon">
//         <span class="star-status-text">
//           6
//         </span>
//       </a>
//     </li>













//     <li class="star selected neutral" title=" 7" onclick="RemoveQuestion(&quot;nextstep&quot;,this)" data-value=" 7" questionelement="1461136845088">
//       <a class="star-icon">
//         <span class="star-status-text">
//           7
//         </span>
//       </a>
//     </li>













//     <li class="star" title=" 8" onclick="RemoveQuestion(&quot;nextstep&quot;,this)" data-value=" 8" questionelement="1461136845088">
//       <a class="star-icon">
//         <span class="star-status-text">
//           8
//         </span>
//       </a>
//     </li>













//     <li class="star" title=" 9" onclick="RemoveQuestion(&quot;nextstep&quot;,this)" data-value=" 9" questionelement="1461136845088">
//       <a class="star-icon">
//         <span class="star-status-text">
//           9
//         </span>
//       </a>
//     </li>













//     <li class="star" title=" 10" onclick="RemoveQuestion(&quot;nextstep&quot;,this)" data-value=" 10" questionelement="1461136845088">
//       <a class="star-icon">
//         <span class="star-status-text">
//           10
//         </span>
//       </a>
//     </li>





//   // </ul>
//   // <div class="d-flex justify-content-between f-12 mt-1">








//     <div class="">Very Poor Service</div>
//     <div class="">Excellent Service</div>
//   // </div>
// // </div >