// =======> (Very important topic)<=========


// ======>>>>Fetch large data from given URL and show in React page with the help of axios in React :-


import { useState, useEffect } from "react";
import axios from "axios";

const App=()=>{

const[mydata,setmydata]=useState([]);

const loaddata=()=>{
let url="http://34.198.81.140/attendance.json";
axios.get(url).then((res)=>{
setmydata(res.data);
});
}

useEffect(()=>{
loaddata();
},[]);

const myans=mydata.map((key)=>{
return(
  <>
  <tr>
    <td>{key.emp_id}</td>
    <td>{key.name}</td>
    <td>{key.date}</td>
    <td>{key.time_in}</td>
    <td>{key.time_out}</td>
    <td>{key.total_hours}</td>
    <td>{key.weekday}</td>
    <td>{key.gender}</td>
    <td>{key.designation}</td>
    <td>{key.department}</td>
    <td>{key.per_day_salary}</td>
    <td>{key.basic_salary}</td>
  </tr>
  </>
  )
});

return(
  <>
  <table border="2" width="90%" align="center">
<tr>
  <th>Emp ID</th>
  <th>Emp Name</th>
  <th>Date</th>
  <th>Time In</th>
  <th>Time out</th>
  <th>Total Hours</th>
  <th>Weekday</th>
  <th>Gender</th>
  <th>Designation</th>
  <th>Department</th>
  <th>Basic Salary</th>
  <th>Per Day Salary</th>
</tr>
  {myans}
  </table>
  </>
  );
}
export default App;