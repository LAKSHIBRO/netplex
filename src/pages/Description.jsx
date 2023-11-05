import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Tmdb_api_call from "../data/api/Tmdb_api_call";

function Description() {
  const params = useParams();
  const [maindata, setmaindata] = useState({});
  useEffect(() => {
    async function fetchlData(id, type) {
      try {
        console.log(params);
        const data = await Tmdb_api_call(id, type);
        setmaindata(data);
      } catch (error) {
        console.log("API Error: ", error);
      }
    }
    fetchlData(params.tmdbId, params.type);
  }, []);

  console.log(maindata);

  return (
    <>
      <Navbar />

      <div
        className="container-fluid bg-light"
        style={{ height: "500px" }}
      ></div>

      <Footer />
    </>
  );
}

export default Description;
