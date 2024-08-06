import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Top from "../../components/Top/Top";
import "./SignIn.css";

const SignIn = () => {
    return (
        <>
            <Top title="Sign In" route="/bvn" />
            <div className="signinContainer">
                <div className="formWrapper">
                    <h3>We missed you!</h3>
                    <p>Enter your account details to login</p>
                    <Input label="Email" type="email" aria='email' />
                    <Input label="Password" type="password" aria='password' />
                    <div className="forgotten">
                        <p>Forgotten password?</p>
                        <NavLink to={"/reset"}><button>Reset</button></NavLink>
                    </div>
                    <Button text="Sign in" color="primary" type="normal2" route="/verification" />
                    <Button text="Register" color="grey" type="normal2" />
                </div>
            </div>
        </>
    )
}

export default SignIn
