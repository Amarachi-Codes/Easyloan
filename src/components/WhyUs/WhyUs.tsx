import "./WhyUs.css";
import investment from "./../../assets/Investment.svg";

const WhyUs = () => {
    return (
        <>
            <div className="whyWrapper">
                <div className="whyImage">
                    <img src={investment} alt="" />
                </div>
                <div className="whyContent">
                    <h2>Why Us?</h2>
                    <div className="list-wrapper">

                        <div className="red-line"></div>

                        <div className="list-item-wrapper">
                            <div className="list-bullet">1</div>
                            <div className="list-item">
                                <div className="list-title">Fast Approvals</div>
                                <div className="list-text">We understand the urgency of financial needs. Our streamlined application
                                    process ensures quick approvals, so you get your funds without unnecessary delays.
                                </div>
                            </div>
                        </div>

                        <div className="list-item-wrapper">
                            <div className="list-bullet">2</div>
                            <div className="list-item">
                                <div className="list-title">Flexible Terms</div>
                                <div className="list-text">We offer a range of loan options with flexible terms and repayment plans,
                                    allowing you to choose what best fits your financial situation.
                                </div>
                            </div>
                        </div>
                        <div className="list-item-wrapper">
                            <div className="list-bullet">3</div>
                            <div className="list-item">
                                <div className="list-title">Competitive Rates</div>
                                <div className="list-text">Our interest rates are highly competitive, ensuring that you can access the
                                    funds you need without undue financial burden.
                                </div>
                            </div>
                        </div>

                        <div className="list-item-wrapper">
                            <div className="list-bullet">4</div>
                            <div className="list-item">
                                <div className="list-title">Secure and Transparent</div>
                                <div className="list-text">Your privacy and security are our top priorities. Our transparent processes
                                    and clear communication ensure that you are always informed and in control.
                                </div>
                            </div>
                            <div className="white-line"></div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default WhyUs
