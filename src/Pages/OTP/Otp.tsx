import OtpInput from "../../components/OtpInput/OtpInput";
import Top from "../../components/Top/Top";
import "./Otp.css";
import timing from "./../../assets/Group 1.svg";

const Otp = () => {
    return (
        <>
            <Top title="Verification" route="/signup" />
            <div className="otpContainer">
                <div className="otpWrapper">
                    <h3>Account verification</h3>
                    <p>We’ve sent you a one time password (OTP) to your email</p>
                    <OtpInput />
                    <p className="resend">Didn’t received otp? resend in:</p>
                    <div>
                        <img src={timing} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Otp
