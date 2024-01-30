import { useState } from "react";
import axios from "axios";
const Ainsert=()=>
{
   const[input,setInput]=useState({});
   const handleInput=(e)=>
   {
     let key=e.target.name;
     let value=e.target.value;

     setInput(values=>({...values,[key]:value}));
   }
   const handleSubmit=()=>
   {

    let url="http://localhost:4000/labour";
    axios.post(url,input).then(()=>
    {
        alert("Data Saved!!!");
    });
    setInput({
        "labour_id":"",
        "labour_name":"",
        "labour_hour":"",
        "labour_salary":""
    });
   }

    return(
        <>
        <div className="corInsert">
        <h1>CORPORATION'S LABOURS DATA INSERTION:</h1>
        <div className="entry">
        Enter ID<br></br><input type="text" name="labour_id" value={input.labour_id} onChange={handleInput}></input><br></br>
        Enter NAME<br></br><input type="text" name="labour_name" value={input.labour_name} onChange={handleInput}></input><br></br>
        Enter HOURS<br></br><input type="text" name="labour_hour" value={input.labour_hour} onChange={handleInput}></input><br></br>
        Enter SALARY<br></br><input type="text" name="labour_salary" value={input.labour_salary} onChange={handleInput}></input><br></br><br></br>
        <button onClick={handleSubmit}>Data Save</button><br></br><br></br>
        </div>
        </div>
        </>
    );
}
export default Ainsert;