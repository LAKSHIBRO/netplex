import Footer from "../components/Footer";
import Homecard from "../components/Homecard";
import Navbar from "../components/Navbar";
import Sectionbanner from "../components/Sectionbanner";



function Movies() {
  console.log("Movies page render ======");

  
    return (
      <>
        <Navbar />
        <Sectionbanner data={{header : 'Movies',description:'Stream, relax, enjoy!'}}/>
        <Homecard data={{limit: 24,search: "C-movie",}}/>
        <Footer />
      </>
    );

}

export default Movies;
