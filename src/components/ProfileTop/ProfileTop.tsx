import "./ProfileTop.css"
import leftside from "./../../assets/Left side icons.svg";
import { NavLink } from "react-router-dom";

interface IProfile{
    title: string
    route: string
}

const ProfileTop = ({title, route}:IProfile) => {
  return (
    <div className="profileTop">
      <NavLink to={route}><img src={leftside} alt="" /></NavLink>
      <div>{title}</div>
    </div>
  )
}

export default ProfileTop
