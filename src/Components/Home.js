import React from "react";

const Home = () => {
    return (
        <div className="App container">
            <div className="bg-gray-200 p-4 block">
                <h1 className="text-center text-4xl text-gray-700 font-bold">Welcome to Resume Generator</h1>
            </div>
            <div className="bg-gray-200 p-4 block h-screen content-center align-middle">
                <div className="flex flex-row items-center justify-around m-5">
                <button className="btn btn-blue" onClick="">Make it from scratch</button>
                <button className="btn btn-blue" onClick="">Make it from my linkedin profile</button>
                </div>
            </div>
        </div>
    );
};

export default Home;