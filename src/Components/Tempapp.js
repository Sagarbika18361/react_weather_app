import React from "react";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

const Tempapp = () => {
  const[city,setCity]=useState("");
  const[search,setSearch]=useState("pune");
  const onInputChange = (e) => {
    setSearch(e.target.value)
  };


  useEffect(()=>{
    const fetchApi =async ()=>{
     await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=da2a1c0ce64968140189311cc36760b0`)
      .then((response)=>{
        console.log(response)
        setCity(response.data.main)
      })  
    }
    
    fetchApi();
    
  },[setSearch])

  return (
    <>
      <div className="row vh bg-secondary d-flex justify-content-center align-items-center  ">
        <div className="col-lg-4  "></div>
        <div className="col-lg-4 p-0 ">
          <div className="input-group p-0">
            <input type="text" className="form-control" onChange={onInputChange} value={search}/>
            {/* <span className="input-group-btn">
              <button className="btn btn-primary " type="button">
                Go!
              </button>
            </span> */}
          </div>
          <div className="row info">
            <div className="col-12 bg-light vh-50 ">
              <h2>
                <i class="fa-solid fa-street-view fs-2"></i>{search}
              </h2>
              <h1 className="temp">{city.temp} °Cel</h1>
              <h3 className="tempmin_max">Humidity:{city.humidity  }% | Pressure:{city.pressure  } hPa</h3>
            </div>
          </div>
            <div className="wave1"></div>
            <div className="wave2"></div>
            <div className="wave3"></div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </>
  );
};

export default Tempapp;
