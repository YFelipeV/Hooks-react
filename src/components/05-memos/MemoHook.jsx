import { useMemo, useState } from "react";
import { procesoPesado } from "../../Helpers/procesoPesado";
import { useCounter } from "../../Hooks/useCounter";
import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(3000);
  const [show, setShow] = useState(true);
 
   const memoProcesoPesado=useMemo(() =>procesoPesado(counter),  [counter])

  return (
    <>
    <h1>Memo Hook</h1>
      <h3>
        counter: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoProcesoPesado}</p>
      <button type="button" className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShow(!show)}
      >
        show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
