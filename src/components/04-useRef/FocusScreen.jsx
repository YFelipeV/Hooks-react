import { useRef } from "react"
import"../02-useEffect/effects.css"

export const FocusScreen = () => {

    const ref = useRef()
    const handleClick=()=>{
       ref.current.select()
    }
  return (
    <div>
        <h1>focusScreen</h1> 
        <hr />
        <input type="text"
        ref={ref}  
        className="form-control" placeholder="su nombre"/>
        <button className="btn btn-primary mt-5" onClick={handleClick}>Focus</button>
        </div>
  )
}
