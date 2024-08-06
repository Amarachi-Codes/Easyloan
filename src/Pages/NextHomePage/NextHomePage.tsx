import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import "./NextHomePage.css"
import sliders1 from "./../../assets/Sliders (1).svg"
import illustration1 from "./../../assets/Illustrations (1).png";
import About from "../../components/AboutUs/About";
import Approved from "../../components/Approved/Approved";
import Contact from "../../components/ContactUs/Contact";
import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";
import WhyUs from "../../components/WhyUs/WhyUs";

const NextHomePage = () => {
  return (
    <>
     <div className="homeWrapper">
        <Navbar />
        <div className="homeContent">
          <Hero heading="Gain total control of your money" subtitle="Track your transaction easily with categories and financial report" btn="Continue" route="/getStarted" slider={sliders1}/>
          <img className="heroImg" src={illustration1} />
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

export default NextHomePage
