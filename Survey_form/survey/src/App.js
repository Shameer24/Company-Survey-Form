import Form from "./Form";
import React , {useEffect,useState} from "react";
import axios from 'axios';


function App() {

  const [overAllFormData,setFormData] = useState({});
  
  useEffect(()=>{
    // setFormData({});
    axios.get("/jsonform.json").then((res)=>{
      setFormData(prev => {return {...prev,...res.data}});
    }).catch(err => console.error(err))
  },[]);  
  


  return(
    <Form data={overAllFormData}/>
  );
}

export default App;
