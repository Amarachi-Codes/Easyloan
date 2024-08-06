import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import Top from "../../components/Top/Top"
import "./Bvn.css"

const Bvn = () => {
    return (
        <>
            <Top title="BVN" route="/otp" />
            <div className="verifyContainer">
                <div className="verifyWrapper">
                    <h3>Verify your BVN</h3>
                    <p>This is to verify your account</p>
                    <Input label="Enter your Bvn" type="number" aria="phone number" />
                    <div className="verifyBtn">
                    <Button text="Verify" color="primary" type="normal2" route="/signin" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bvn
