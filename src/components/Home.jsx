import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import Spinner from "./Spinner";

function Home() {
  const api = "https://fakestoreapi.com/products";

  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState();

  const fetchDataFromApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get(api);
      setdata(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <>
      <div className="max-w-[1300px] mx-auto p-2 ">
        <h1 className="text-4xl text-slate-700  font-serif">
          Feature products
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 p-4">
          {loading ? (
            <>
              <Spinner />
            </>
          ) : (
            <>
              {data.map((item) => (
                <Product key={item.id} item={item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
