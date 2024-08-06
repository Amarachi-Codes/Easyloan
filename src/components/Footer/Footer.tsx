import "./Footer.css";
import facebook from "./../../assets/facebook.png";
import instagram from "./../../assets/instagram.png";
import twitter from "./../../assets/twitter.png";
import whatsapp from "./../../assets/whatsapp.png";
import moon from "./../../assets/moon.png";
import { GiTakeMyMoney } from "react-icons/gi";

const Footer = () => {
    return (
        <>
            <div className="footerWrapper">
                <div>
                    <h3>Social Media</h3>
                    <div>
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={whatsapp} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
                <div>
                    <h3>User</h3>
                    <p>Get Started</p>
                    <p>Login</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                    <p>Terms & Rules</p>
                </div>
                <div>
                    <h3>Theme</h3>
                    <img src={moon} alt="" />
                </div>
            </div>
            <div className="underline"></div>
            <div className="copyright">
                <h2> <GiTakeMyMoney /> EasyLoan</h2>
                <div className="copy">
                    <div>
                        &copy;2024 P2P App
                    </div>
                    <div>
                        <span>Cookies settings</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
