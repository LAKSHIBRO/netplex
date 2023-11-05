import React, { useEffect, useState } from "react";
import fetchGoogleSheetData from "../data/api/Google_sheet_api_call";
import fetchTmdbData from "../data/api/Tmdb_api_call";
import Small_alert from "./Small_alert";
import { Link } from "react-router-dom";

function Homecard(props) {
  console.log("Homecard render");
  const [api2Data, setApi2Data] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  const [loader_switch, setloader_switch] = useState(false);
  const [lenth_of_list, setlenth_of_list] = useState(0);

  async function fetchlData(o) {
    try {
      const api1Data = await fetchGoogleSheetData(o);
      const api2Data = await Promise.all(
        api1Data.map(async (item) => {
          const data = await fetchTmdbData(item.B, item.C);
          return {
            name: data.title || data.original_name,
            poster: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
            vote: data.vote_average,
            tmdb_id: data.id,
            type : data.title ? "movie" : "tv",
          };
        })
      );

      setApi2Data((prevData) => [...prevData, ...api2Data]);
      setloader_switch(false);
    } catch (error) {
      console.error("Data from API Error: ", error);
    }
  }

  useEffect(() => {
    fetchlData(props.data);
  }, []);

  function loadmore() {
    setcurrentpage(currentpage + 1);
    setloader_switch(true);
    const o = {
      offset: currentpage * 24 + 1,
      limit: 24,
      ...props.data,
    };
    setlenth_of_list(api2Data.length);
    fetchlData(o);
  }
  if (api2Data.length) {
    return (
      <>
        <div className="container my-5">
          <div className="row">
            {api2Data.map((item, index) => (
              <Homecard_card key={index} data={item} />
            ))}
          </div>
          <div className="d-grid gap-2 col-6 mx-auto my-4">
            <button
              className="btn btn-danger fade-in-fwd"
              type="button"
              onClick={loadmore}
            >
              {loader_switch && <Small_loader />}
              Load more
            </button>
          </div>
          {!loader_switch && lenth_of_list === api2Data.length && (
            <Small_alert msg="No more ..." />
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container my-5">
          <div className="row">
            {[...Array(24)].map((__, i) => (
              <Homecard_loader key={i} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

function Small_loader() {
  return (
    <div className="spinner-border spinner-border-sm me-2" role="status">
      <span className="visually-hidden"></span>
    </div>
  );
}

function Homecard_card({ data }) {
  return (
    <>
      <div className="col-6 col-md-4 col-lg-2 p-1">
        <Link to={`/${data.type}/${data.tmdb_id}`}>
          <div className="card homecard fade-in-fwd">
            <div className="position-relative">
              <img
                src={data.poster}
                className="card-img-top"
                alt={data.name}
                loading="lazy"
              />
              <div className="card-img-overlay p-0">
                <div
                  className="
            w-100
            h-100
            p-2
            d-flex
            d-flex
            align-items-center
            flex-column
            homecard__mask"
                >
                  <div className="w-100 d-flex">
                    <p className="py-1 px-2 rounded-1 bg__red">
                      <i className="bi bi-star-fill"></i>{" "}
                      <b>{data.vote.toFixed(1)}</b>{" "}
                    </p>
                  </div>
                  <h5 className="mt-auto card-title text-uppercase">
                    {data.name}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Homecard;

function Homecard_loader() {
  return (
    <>
      <div className="col-6 col-md-4 col-lg-2 p-1">
        <div className="card homecard fade-in-fwd">
          <div className="position-relative">
            <img
              src="/img/home_loader_img.gif"
              className="card-img-top"
              loading="lazy"
            />
            <div className="card-img-overlay p-0">
              <div
                className="
                w-100
                h-100
                p-2
                d-flex
                d-flex
                align-items-center
                flex-column
                homecard__mask"
              >
                <h5 className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
