import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Seacrch = ({setIsLoandingSearch}) => {
  const navigate=useNavigate()
  const onSubmit=(e)=>{
    e.preventDefault()
  }
  const onChange=({target})=>{
    setIsLoandingSearch(true)
    const {value}=target
    if(value==undefined){
      navigate("/tienda")
    }else{
      navigate("/tienda/"+value)
    }
    console.log(value)
  }
  return (
    <form className="d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar producto"
        name="inputSearch"
        onChange={onChange}
      />
      <button className="btn btn-primary" type="submit" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
          
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </button>
    </form>
  );
};
