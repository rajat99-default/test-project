import { Link,Outlet } from "react-router-dom";

const Alayout=()=>
{
    return(
        <>
        <div className="header">
          <ul>
            <li><Link className="link" to="home">Home</Link></li> 
            <li><Link className="link"  to="insert">Insert</Link></li>
            <li><Link className="link"  to="display">Display</Link></li>
            <li><Link className="link"  to="update">Update</Link></li>
          </ul>  
        </div> 
        
        <div className="middle">
          <Outlet></Outlet>
        </div>
    
        <div className="footer">
          <h2>Bareli MEEL CORPORATION pvt.</h2>
        </div>

        </>
    );
}

export default Alayout;