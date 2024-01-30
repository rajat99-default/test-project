import { useState,useEffect } from "react";
import axios from "axios";
const Adisplay=()=>
{
    const [mydata,setMydata]=useState([]);

    const loadData=()=>
    {
        let url="http://localhost:4000/labour";
        axios.get(url).then((res)=>
        {
           setMydata(res.data);
        });
    }

    useEffect(()=>{
        loadData();
    },[]);

    const myAns=mydata.map((key)=>{
       return(
        <>
             <tr>
                <td>{key.labour_id}</td>
                <td>{key.labour_name}</td>
                <td>{key.labour_hour}</td>
                <td>{key.labour_salary}</td>
             </tr>
        </>
       )
            
    });


    return(
        <>
        <div className="display">
        <h1>CORPORATION'S DATA:</h1>
        <table className="table_display" width={700} border={2} align="center">
            <tr>
                <th bgcolor="red">Labour ID</th>
                <th bgcolor="red">Labour NAME</th>
                <th bgcolor="red">Labour HOURS</th>
                <th bgcolor="red">Labour SALARY</th>
            </tr>
            {myAns}
        </table>
        </div>
        </>
    );
}
export default Adisplay;