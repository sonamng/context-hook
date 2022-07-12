import React,{ createContext } from "react";
import Second from "./Second";

const FristName=createContext()
const LastName=createContext()

function Frist(){
    return(
        <div>
            <h1>THIS IS WORK OF "useContext" IN REACT JS </h1>
            <FristName.Provider value="Raju">
                <LastName.Provider value="Sonam">
                <Second/>
                </LastName.Provider>
              
            </FristName.Provider>
        </div>
    )
}
export default Frist;
export {FristName,LastName}