import { useState,useEffect } from "react";
import axios from "axios";
const Aupdate=()=>
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

    const myDelete=(myId)=>
    {
        let url=`http://localhost:4000/labour/${myId}`;

     axios.delete(url).then((res)=>
     {
        alert("Record DELETED!!!");
        loadData();
     });
     
    }


    const myEdit=(myId)=>
    {
       alert("Hyy")
    }


    const myAns=mydata.map((key)=>
    {
        return(
            <>
             <tr>
                <td>{key.labour_id}</td>
                <td>{key.labour_name}</td>
                <td>{key.labour_hour}</td>
                <td>{key.labour_salary}</td>
                <td>
                    <img id="img_edit" src="./img/edit.png" onClick={()=>{myEdit(key.id)}}></img>

                    <img id="img_delete" src="./img/delete.png"  onClick={()=>{myDelete(key.id)}}></img>
                </td>
             </tr>
            </>
        );
    })

    useEffect(()=>{
        loadData();
    },[]);


    return(
        <>
        <div className="display">
        <h1>UPDATE CORPORATION'S DATA:</h1>
        <table className="table_update"  width={700} border={2} align="center">
            <tr>
                <th bgcolor="red">Labour ID</th>
                <th bgcolor="red">Labour NAME</th>
                <th bgcolor="red">Labour HOURS</th>
                <th bgcolor="red">Labour SALARY</th>
                <th bgcolor="red"> </th>
            </tr>
            {myAns}
        </table>
        </div>
        </>
    );
}
export default Aupdate;