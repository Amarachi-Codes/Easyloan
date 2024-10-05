import Chat from "../../Chat/Chat"
import ProfileBody from "../ProfileBody/ProfileBody"


const ProfilePage = () => {
  return (
    <div> 
      <div className="container">
      <ProfileBody/>
      <Chat label="Our Customer care services is available" time="24/7" type="paragraph" timertype="time" displayimage="show"/>
      </div>
    </div>
  )
}

export default ProfilePage
