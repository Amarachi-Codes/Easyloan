import Home from "./../../assets/Home.svg";
import { FaRegUser } from "react-icons/fa";
import Contribution from "./../../assets/Contribution.svg";
import Investment from "./../../assets/Investment (2).svg";
import Loan from "./../../assets/Loan.svg";
import { NavLink, Outlet } from "react-router-dom";
import "./AppRouteWrapper.css";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { GiTakeMyMoney } from "react-icons/gi";

const AppRouteWrapper = () => {
  return (
    <>
      <div className="app__container">
        <div className="sidebarWrapper">
          <div className="logoWrapper">

            <GiTakeMyMoney fill="#2C14DD" /> EasyLoan

          </div>
          <div className="sidebar">
            <ul>
              <li>

                <NavLink to={"/app"} ><img src={Home} alt="" />Home</NavLink>
              </li>
              <li>

                <NavLink to={"/app/order"}><img src={Loan} alt="" />Loan</NavLink>
              </li>
              <li>

                <NavLink to={"/app/pitch"}><img src={Investment} alt="" />Investment</NavLink>
              </li>
              <li>

                <NavLink to={"/app/wallet"}><img src={Contribution} />Contribution</NavLink>
              </li>
              <li>

                <NavLink to={"/app/profile"}><FaRegUser />Profile</NavLink>
              </li>
              <li>

                <NavLink to={"/app/signout"}><LiaSignOutAltSolid fill="#B3261E" />Sign Out</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="app__content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AppRouteWrapper
