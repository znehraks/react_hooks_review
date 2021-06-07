import defaultAxios from "axios";
import React, { useEffect, useRef, useState } from "react";

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(options)
      .then((response) => {
        setState({
          ...state,
          loading: false,
          data: response,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  if (!options.url) {
    return;
  }
  return { ...state, refetch };
};

//Functional Component
const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://paletteabackend.herokuapp.com/api/products/client/product_page",
  });
  console.log(
    `loading: ${loading}, data: ${JSON.stringify(data)}, error: ${error}`
  );
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h1>{loading && "loading"}</h1>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default App;
