import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const{name,email}=formState

  useEffect(() => {
    // console.log("key");
  },[]);
  useEffect(() => {
    // console.log("email cambio");
  },[email]);

  const handleInputChange=({target})=>{
    setFormState({
        ...formState,
        [target.name]:target.value
    })
  }
  return (
    <>
      <h1>UseEfect</h1>
      <hr />
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="tu nombre"
        autoComplete="off"
    
        onChange={handleInputChange}
      />
       <input
        type="email"
        name="email"
        className="form-control mt-3"
        placeholder="example@gmail.com"
        autoComplete="off"
    
        onChange={handleInputChange}
      />
      {name=== "123"  && <Message></Message>}
    </>
  );
};
