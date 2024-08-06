import "./HomePage.css";
import illustrations from "./../../assets/Illustrations.svg";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import sliders from "./../../assets/Sliders.svg";
import About from "../../components/AboutUs/About";
import WhyUs from "../../components/WhyUs/WhyUs";
import Approved from "../../components/Approved/Approved";
import Contact from "../../components/ContactUs/Contact";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";


const HomePage = () => {
  return (
    <>
      <div className="homeWrapper">
        <Navbar />
        <div className="homeContent">
          <Hero heading="You ought to know where your money goes" subtitle="Get an overview of how you are performing and motivate yourself to achieve even more." btn="Continue" slider={sliders} route="/next"/>
          <img className="heroImg" src={illustrations} />
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

export default HomePage
