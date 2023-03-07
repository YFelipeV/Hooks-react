
import { useForm } from "../../Hooks/useForm";
import "./effects.css";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name:"",
    email:"",
    password:""
  });
 
    const {name,email,password} = formValues;

    const handleSumbit=(e)=>{
      e.preventDefault();
      console.log(formValues)
    }

  return (
    <form onSubmit={handleSumbit}>
      <h1>FormWithHook</h1>
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

      <input
        type="password"
        name="password"
        className="form-control mt-3"
        placeholder="*******"
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-primary mt-2">Guardar</button>
    </form>
  );
};
