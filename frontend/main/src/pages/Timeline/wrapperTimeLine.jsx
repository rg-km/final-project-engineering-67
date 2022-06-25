import TimeLine from "./TimeLine";
import React from "react";
import smile from "./images/smile.gif"


export default function TimeWrap(){
    return(
        <div className="grid grid-cols-2 justify-center ">
            <div className="ml-2">
                <TimeLine/>
            </div>
            <div className="text-center w-full mx-10 px-10  my-5 py-10">
                <h1 className="font-bold text-2xl">Hey There The Following <br></br>Steps For You</h1>
                <img className='flex felx-col justify-center opacity-50' src={smile} alt="Smile"/>
            </div>
        </div>
    );
}