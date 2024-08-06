import { NavLink } from "react-router-dom";
import "./Top.css";
import leftside from "./../../assets/Left side icons.svg";

interface ITop{
    title: string
    route: string
}
const Top = ({title, route}:ITop) => {
  return (
    <>
       <div className="topWrapper">
      <NavLink to={route}><img src={leftside} alt="" /></NavLink>
      <div>{title}</div>
    </div>
    </>
  )
}

export default Top
