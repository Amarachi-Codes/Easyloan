import "./Hero.css";
import { NavLink } from "react-router-dom";
interface IHero{
    heading: string
    subtitle: string
    btn: string
    route: string
    slider: string
}
const Hero = ({heading, subtitle, btn, route, slider}:IHero) => {
  return (
    <>
      <div className="heroWrapper">
        <p className="welcomeTitle">Welcome to EasyLoan</p>
        <h2>{heading}</h2>
        <p className="subtitle">{subtitle}</p>
        <img src={slider} alt="" className="slider"/>
        <NavLink to={route} ><button className="heroButton">{btn}</button></NavLink>
      </div>
    </>
  )
}

export default Hero
