import React, { useContext, useState, useEffect } from "react";
import dataContext from "../context/dataContext";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { MdAir } from "react-icons/md";
import { FaRegSun } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";
import { MdOpacity } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { WiStrongWind } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";
import { FaTemperatureHigh } from "react-icons/fa";
import { GiPressureCooker } from "react-icons/gi";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";

function Body() {
  const { data } = useContext(dataContext);
  const date = new Date();
  const dt = date.toDateString();
  // sunrise time
  const sunrise = data?.sys?.sunrise;
  const sunriseDate = new Date(sunrise * 1000);
  const sunrisehours = sunriseDate.getHours().toString().padStart(2, "0");
  const sunriseminutes = sunriseDate.getMinutes().toString().padStart(2, "0");
  const sunriseTime = `${sunrisehours}:${sunriseminutes}`;
  // sunset time
  const sunset = data?.sys?.sunset;
  const sunsetDate = new Date(sunrise * 1000);
  const sunsethours = sunriseDate.getHours().toString().padStart(2, "0");
  const sunsetminutes = sunriseDate.getMinutes().toString().padStart(2, "0");
  const sunsetTime = `${sunsethours}:${sunsetminutes}`;
  
  return (
    <div className=" text-white max-sm:flex-col flex items-center lg:justify-around mt-3 lg:mt-4 h-[47vh]">
      <div className=" justify-between bg-stone-800 max-sm:w-[95%] lg:w-1/4 px-8 py-3 gap-2 h-full mt-3 rounded-lg ">
        <h1 className="text-3xl font-bold mb-3  ">Now</h1>
        <div className="flex items-center justify-between h-[80%] ">
          <div className="flex flex-col gap-2 max-sm:pb-3">
            <div className="flex text-xl items-center gap-8">
              <h2>
                <span>{data?.main?.temp} &deg;c</span>
              </h2>
            </div>
            <p className=" text-xl font-semibold">{data?.weather[0]?.main}</p>

            <p className="flex items-center gap-2">
              <FaCalendarAlt className="" />
              {dt}
            </p>
            <p className="flex items-center gap-2">
              <FaLocationDot /> {data?.name} {data?.sys?.country}
            </p>
          </div>
          <img
            src={`http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`}
            alt=""
            className="bg-white rounded-md w-1/3 max-sm:h-[65%] lg:w-[50%] items-center flex justify-center mt-3"
          />
        </div>
      </div>

      <div className=" bg-stone-800 rounded-lg p-7 max-sm:w-[95%] mt-3 lg:h-full">
        <h2 className="font-bold mb-5">Today's Highlights</h2>
        <div className=" flex max-sm:flex-col justify-between gap-5  ">
          <div className="bg-black lg:w-1/2  p-4 rounded-xl ">
            <div className="flex justify-between">
              <h2 className="mb-5">Air Quality Index</h2>
              <h2 className="bg-green-800 px-3 rounded-xl h-7">Good</h2>
            </div>
            <div className="flex justify-around">
              <MdAir className="scale-150 " />
              <div>
                <p>PM25</p>
                <h2 className="text-xl">3.90</h2>
              </div>

              <div>
                <p>SO2</p>
                <h2 className="text-xl">3.90</h2>
              </div>

              <div>
                <p>NO2</p>
                <h2 className="text-xl">3.90</h2>
              </div>
              <div>
                <p>O3</p>
                <h2 className="text-xl">3.90</h2>
              </div>
            </div>
          </div>
          <div className="bg-black lg:w-1/2 p-4 rounded-xl ">
            <h2 className="mb-5">Sunrise & Sunset</h2>
            <div className="flex justify-between lg:justify-around">
              <div className="">
                <div className="flex items-center gap">
                  <FaRegSun className=" scale-150 mr-3" />
                  <div>
                    <p>sunrise</p>
                    <p className="text-xl">{sunriseTime} AM</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex  items-center">
                  <IoMoonSharp className=" sunset-icon scale-150 mr-3" />
                  <div>
                    <p>sunset</p>
                    <p className="text-xl ">{sunsetTime} PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-around mt-5 gap-2">
          <div className="min-w-[135px] bg-black rounded-xl p-5 items-center flex-col flex gap-4">
            <h2 className="">Humidity</h2>
            <div className=" text-xl flex items-center gap-2">
              <MdOpacity className="" />
              <span>{data?.main?.humidity} %</span>
            </div>
          </div>
          <div className="min-w-[135px] bg-black rounded-xl  px-3 py-5 items-center flex-col flex gap-4">
            <h2 className="">Pressure</h2>
            <div className="text-xl flex items-center gap-2">
              <GiPressureCooker className="" />
              <span>{data?.main?.pressure} Pa</span>
            </div>
          </div>
          <div className="min-w-[135px] bg-black rounded-xl p-5 items-center flex-col flex gap-4">
            <h2 className="">Wind Speed</h2>
            <div className="text-xl flex items-center gap-2">
              <WiStrongWind className="" />
              <span className="">
                {~~data?.wind?.speed}
                <span className="text-[16px]"> Km/h</span>{" "}
              </span>
            </div>
          </div>
          <div className="min-w-[135px] bg-black rounded-xl  p-5  items-center flex-col flex gap-4">
            <h2 className="">Visibility</h2>
            <div className="text-xl flex items-center gap-2">
              <FaEye className="" />
              <span>{data?.visibility / 1000} Km</span>
            </div>
          </div>
          <div className="min-w-[135px] bg-black rounded-xl p-5  items-center flex-col flex gap-4">
            <h2 className="">Max Temp.</h2>
            <div className="text-xl flex items-center gap-5">
              <FaTemperatureArrowUp className=" " />
              <span>{~~data?.main?.temp_max} &deg;c</span>
            </div>
          </div>
          <div className="min-w-[135px] bg-black rounded-xl  p-5  items-center flex-col flex gap-4">
            <h2 className="">Feels Like</h2>
            <div className="text-xl flex items-center gap-2">
              <FaTemperatureHigh className="" />
              <span>{~~data?.main?.feels_like} &deg;c</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
