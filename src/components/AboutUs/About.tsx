import "./About.css";
import home from "./../../assets/Home (Active).svg";

const About = () => {
  return (
    <>
    <div className="aboutContainer">
    <div className="aboutContent">
   <h2>About Us</h2> 
    <p>Welcome to EasyLoan, your trusted partner in financial empowerment. We are committed to making borrowing 
    simple, fast, and accessible for everyone. Whether you need funds for personal expenses, business investments,
    or emergency situations, our goal is to provide you with the financial support you need, precisely when you 
    need it.</p>
    
    <h2>Our Mission</h2>
    <p>At EasyLoan, our mission is to bridge the financial gap and enhance the economic well-being of individuals
    and businesses. We strive to offer innovative, user-friendly loan solutions tailored to meet diverse financial 
    needs, ensuring a seamless and stress-free borrowing experience.
    </p>
    </div>
    <div className="aboutImage">
        <img src={home} alt="" />
    </div>
    </div>
    </>
  )
}

export default About
