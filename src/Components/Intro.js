import React, { useContext } from "react";
import { Context } from '../Data/Store';



const Intro = (props) => {
    
    const [state,dispatch] = useContext(Context);
    
    return (
        <div className="App container">
            <div className="bg-gray-200 p-4 block">
                <h1 className="text-center text-4xl text-gray-700 font-bold">Welcome to Resume Generator {data[0].Name} </h1>
            </div>
            <div className="bg-gray-200 p-4 block h-screen content-center align-middle">
                <div className="flex flex-row items-center justify-around m-5">
                <button className="btn btn-blue" onClick={makeItFromScratch}>Make it from scratch</button>
                <button className="btn btn-blue" onClick={makeItFromLinkedin}>Make it from my linkedin profile</button>
                </div>
            </div>
            
        </div>
    );
};

export default Intro;