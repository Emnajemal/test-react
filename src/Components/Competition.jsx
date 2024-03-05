import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
function Competitions(props) {

  
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.fees}</td>
            <td>{props.date}</td>
            <td><Link to={`/competition/${props.id}`} >Details</Link></td>
        </tr>
      );
}





export default Competitions;
