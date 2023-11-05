import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Sectionbanner from '../components/Sectionbanner';

function P404() {
  console.log("p404 page render ======");
  
  return (
    <>
    <Navbar />
    <Sectionbanner data={{header : 'Page not found',description:'Error 404'}}/>
    <Footer />
    </>
    
  )
}

export default P404