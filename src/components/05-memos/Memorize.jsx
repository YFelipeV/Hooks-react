import { useState } from "react"
import { useCounter } from "../../Hooks/useCounter"
import "../02-useEffect/effects.css"
import Small from "./Small"

function Memorize() {
    const{counter,increment}=useCounter(10)
    const [show, setShow] = useState(true)
  return (
    <>
    <h1>counter: <Small value={counter}/></h1>
    <hr/>
    <button type="button" className="btn btn-primary" onClick={increment}>+1</button>
    <button type="button" className="btn btn-primary" onClick={()=>setShow(!show)}>show/Hide {JSON.stringify(show)}</button>
    </>
    
  )
}

export default Memorize