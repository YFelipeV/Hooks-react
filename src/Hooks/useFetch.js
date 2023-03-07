import React, { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  useEffect(() => {
    return () => {
      isMounted.current = true;
    };
  }, []);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const load = async () => {
      setState({ data: null, loading: true, error: null });
      const response = await fetch(url);
      const data = await response.json();
      if(isMounted.current){
        setState({
          loading: false,
          error: null,
          data,
        });
      }else{
        console.log("no se llamo")
      }
      
    };
    load();
  }, [url]);

  return state;
};
