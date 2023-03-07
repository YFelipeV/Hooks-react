import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "../02-useEffect/effects.css";

 const MultipleCustomHook = () => {
  const { increment, state } = useCounter(1);
  const { loading, data } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${state}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h3>Custom Hooks!!!</h3>
      <hr />

      {loading ? (
        <div className=" alert alert-info text-center">Loading ....</div>
      ) : (
        <blockquote className=" blockquote tex-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer mt-1">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
};

export default MultipleCustomHook
