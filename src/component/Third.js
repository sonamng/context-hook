import React, { useContext } from "react";
import {FristName,LastName} from './Frist'
function Third(){
    const fristName= useContext(FristName) 
    const lastName= useContext(LastName) 
    return(
        <div>we can data accses from frist component to last component
            <h1>Third Component</h1>
            {fristName}<br/>
            {lastName}
        </div>
    )
}
export default Third;