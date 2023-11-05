import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Sectionbanner from '../components/Sectionbanner';

function Report() {
  console.log("Report page render ======");
  
  return (
    <>
    <Navbar />
    <Sectionbanner data={{header : 'Report',description:'Report a problem'}}/>
    <Footer />
    </>
    
  )
}

export default Report