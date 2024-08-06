import "./Verification.css";
import OtpInput from "../../components/OtpInput/OtpInput";
import Top from "../../components/Top/Top";
import timing from "./../../assets/Group 1.svg";

const Verification = () => {
  return (
    <>
      <Top title="Verification" route="/signin" />
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

export default Verification
