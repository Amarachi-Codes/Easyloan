import Chat from "../../Chat/Chat";
import AppHomeBody from "../AppHomeBody/AppHomeBody";
import "./AppHomePage.css";

const AppHomePage = () => {
  return (
    <div> 
      <div className="container">
      <AppHomeBody/>
      <Chat label="Our Customer care services is available" time="24/7" type="paragraph" timertype="time" displayimage="show"/>
      </div>
    </div>
  )
}

export default AppHomePage
