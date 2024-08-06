import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Top from "../../components/Top/Top";
import "./Reset.css";

const Reset = () => {
    return (
        <>
            <Top title="Reset password" route="/bvn" />
            <div className="resetContainer">
                <div className="formWrapper">
                    <h3>Enter your email and we’ll send you a link to reset your password.</h3>
                   
                    <Input label="Email" type="email" aria='email' />
                    <Button text="Send me link" color="primary" type="normal2" route="/otp" />
                </div>
            </div>
        </>
    )
}

export default Reset
