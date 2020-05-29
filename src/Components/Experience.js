import React, { useContext } from "react";
import { Context } from '../Data/Store';



const Intro = (props) => {
    
    const [state,dispatch] = useContext(Context);
    
    return (
        <div className="App container">
            <div className="bg-gray-200 p-4 block">
                <h1 className="text-center text-4xl text-gray-700 font-bold">Welcome to Intro Page </h1>
            </div>            
        </div>
    );
};

export default Intro;