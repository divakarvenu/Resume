import React, { useContext } from "react";
import { Context } from '../Data/Store';



const Home = (props) => {

    const makeItFromScratch = () => {
        props.history.push('/intro');
    };


    const makeItFromLinkedin = () => {
        //update details form the API
        props.history.push('/resume');
    };
    
    return (
        <div className="App container">
            <div className="bg-gray-200 p-4 block">
                <h1 className="text-center text-4xl text-gray-700 font-bold">Welcome to Resume Generator </h1>
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

export default Home;