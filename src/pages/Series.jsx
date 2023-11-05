import Footer from "../components/Footer";
import Homecard from "../components/Homecard";
import Navbar from "../components/Navbar";
import Sectionbanner from "../components/Sectionbanner";



function Series() {
  console.log("Series page render ======");

  
    return (
      <>
        <Navbar />
        <Sectionbanner data={{header : 'Series',description:'Binge-worthy content, no cost attached.'}}/>
        <Homecard data={{limit:24,search: "C-tv",}}/>
        <Footer/>
      </>
    );

}

export default Series;
