import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sectionbanner from "../components/Sectionbanner";

function Watchlist() {
  return (
  <>
  <Navbar />
  <Sectionbanner data={{header : 'Watchlist',description:'Control your watchlist'}}/>
  <Footer />
  </>
  )
}

export default Watchlist;
