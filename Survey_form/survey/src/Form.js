import React , {useEffect, useState}from 'react'
import Question from './components/Question';
import './Form.css'


const Form = (param) => {
    
    const [head,sethead] = useState('');
    const [questions,setQuestions] = useState([]);

    useEffect(() => {
        sethead(param.data.heading)
        setQuestions(param.data)
        // console.log(param.data)
    },[param])
    
  return (
    <div className='whole_content'>
        <div className='header_content'>
            {head}
        </div>
        <div className='info'>
            We are looking forward to get your valuable feedback to improve <br></br>our vMeasure products and service experience
        </div>
        {/* <button onClick={()=>{setElements("data"); setElements2("data2")}}>Click</button> */}
        <div>
            <Question data={questions}/>
        </div>
    </div>
  )
}

export default Form

