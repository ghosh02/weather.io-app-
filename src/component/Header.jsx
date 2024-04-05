import React, { useState, useEffect, useContext } from "react";
import { IoCloudSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import dataContext from "../context/dataContext";


function Header() {
  const [text, setText] = useState("");
  const [city, setCity] = useState("kolkata");
  const [visible, setVisible] = useState(false);
  const [balnkInp, setBalnkInp] = useState(false)
  const handleVisibility = () => {
    setVisible((prev) => !prev);
  };
  const { setData } = useContext(dataContext);
const handleOnClick=()=>{
  if(text.length>0){
    setCity(text);
    setText("");
    setBalnkInp(false)
  }
  else{
    setBalnkInp(true)
  }
}
const handleError=()=>{
  setBalnkInp((prev)=>!prev);
}

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bcb20208ca20f30893565a2df8f57874&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        setData(data);
      } catch (error) {
        console.log("city not found");
      }
    };
    fetchApi();
  }, [city]);

  return (
    <div className="relative flex flex-col items-center">
      <header className="w-[100vw] bg-black flex items-center justify-between py-5 px-8">
        <h1 className=" text-white text-2xl font-semibold flex items-center">
          <IoCloudSharp className="text-white scale-150 mr-2" /> weather
          <span className="text-red-400 font-bold">.io</span>
        </h1>
        <div className="flex items-center max-sm:hidden w-[40%] gap-3 h-[30px]">
          <input
            type="text"
            required
            placeholder="Enter city name"
            className="w-[80%] outline-none bg-black border-white border-[1px] h-full rounded-md text-white px-2"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <FiSearch
            className="text-white scale-[1.5] cursor-pointer"
            onClick={handleOnClick}
          />
        </div>
        <div className="flex gap-5 items-center ">
          <FaSearch
            className="text-white sm:hidden scale-150"
            onClick={handleVisibility}
          />
          <button className="bg-red-600 text-white rounded-lg px-2 py-1 text-sm flex">
            <FaLocationCrosshairs className="mr-1 text-2xl" />
            <span className="max-sm:hidden">current location</span>
          </button>
        </div>
        
      </header>
      {visible ? (
        <div className="absolute w-[100vw] sm:hidden flex items-center gap-3 h-[30px] justify-evenly top-14">
          <input
            type="text"
            placeholder="Enter city name"
            className="w-[80%] outline-none bg-black  h-full rounded-md text-white px-2  border-white border-[1px]"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <FiSearch
            className="text-white scale-[1.5] cursor-pointer"
            onClick={handleOnClick}
          />
        </div>
      ) : null}
      {balnkInp? <div className="bg-[#111] text-white lg:w-[45%] w-[95%] absolute h-[50px] top-14 flex  items-center justify-around rounded-lg">
        <h1>please enter city name </h1>
        <IoMdClose className="scale-150" onClick={handleError}/>
      </div>:null
}
    </div>
  );
}

export default Header;
