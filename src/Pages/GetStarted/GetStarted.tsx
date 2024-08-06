import "./GetStarted.css";
import sliders2 from "./../../assets/Sliders (2).svg"
import illustration2 from "./../../assets/Illustrations (2).png";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/AboutUs/About";
import Approved from "../../components/Approved/Approved";
import Contact from "../../components/ContactUs/Contact";
import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";
import WhyUs from "../../components/WhyUs/WhyUs";

const GetStarted = () => {
  return (
    <>
      <div className="homeWrapper">
        <Navbar />
        <div className="homeContent">
          <Hero heading="Plan ahead and manage your money better" subtitle="Setup your budget for each category so you in control.Track categories you spend the most money on" btn="Get started" route="/signup" slider={sliders2}/>
          <img className="heroImg" src={illustration2} />
        </div>
      </div> 
      <About/>
      <WhyUs/>
      <Approved/>
      <Contact/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default GetStarted
