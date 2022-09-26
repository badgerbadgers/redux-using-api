import "./styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuccess, fetchInit, fetchError } from "./features/clothingSlice";

export default function App() {
  const { data } = useSelector((state) => state.clothing);
  const { isLoading } = useSelector((state) => state.clothing);
  const { isError } = useSelector((state) => state.clothing);
  console.log("isLoading", isLoading);

  console.log("data", data);
  const dispatch = useDispatch();

  const url = "https://catfact.ninja/facts";
  // const url="https://fakestoreapi.com/"
  async function getData(url) {
    dispatch(fetchInit());
    try {
      // throw new Error()
      await fetch(url)
        .then((response) => response.json())
        .then((response) => dispatch(fetchSuccess(response.data)));
    } catch (err) {
      dispatch(fetchError());
    }
  }
  console.log("isError", isError);

  useEffect(() => {
    getData(url);
    console.log("useEffect data", data);
  }, []);

  return (
    <>
      {isError && <p>Something went wrong ...</p>}
      <br />
      {isLoading ? (
        <p> is loading... </p>
      ) : (
        data.map((stuff) => <li key={stuff.length}>{stuff.fact}</li>)
      )}
    </>
  );
}
