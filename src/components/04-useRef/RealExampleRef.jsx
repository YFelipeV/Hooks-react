import { useEffect, useRef, useState } from "react";
import "../02-useEffect/effects.css";
import MultipleCustomHook from "../03-examples/MultipleCustomHook";
export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  

  

  return (
    <>
      <h1>RealExampleRef</h1>

      <hr />
      {show && <MultipleCustomHook />}

      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        show
      </button>
    </>
  );
};
