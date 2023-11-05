import React, { useEffect, useState } from "react";

function Carousel(data) {
  console.log("Carousel render");

  const [sider, setsider] = useState([]);

  useEffect(() => {
    if (data.data.length > 0) {
      const siderData = data.data.map((dataitem, index) => {
        return (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div width="100%" height="100%" className="sider__mask">
              <img
                className="object-fit-cover bd-placeholder-img z-n1 position-relative"
                width="100%"
                height="100%"
                src={dataitem.backdrop}
              ></img>
            </div>

            <div className="container">
              <div className="carousel-caption text-white text-shadow-1 text-start">
                <h1 className="text-uppercase fw-bold">{dataitem.name}</h1>
                <p className="opacity-75">{dataitem.tags.join(", ")}</p>
                <p className="opacity-75">
                  <i className="bi bi-calendar-event"></i> {dataitem.date}
                </p>
              </div>
            </div>
          </div>
        );
      });

      setsider(siderData);
    }
  }, [data]);

  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner fade-in-fwd">{sider}</div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
