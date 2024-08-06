import "./AppHomeBody.css";
import malvin from "./../../../assets/malvin.svg";
import notification from "./../../../assets/Vector.svg";
import arrowright from "./../../../assets/arrowright.svg";
import takeloan from "./../../../assets/takeloan.svg";
import repay from "./../../../assets/Repay.svg";
import withdraw from "./../../../assets/withdraw.svg";
import electricity from "./../../../assets/electricity.svg";
import bet from "./../../../assets/bet.svg";
import data from "./../../../assets/data.svg";
import airtime from "./../../../assets/airtime.svg";
import easyloan from "./../../../assets/easyloan.svg";
import contribution from "./../../../assets/startcontri.svg";
import arrowicon from "./../../../assets/arrowicon.svg";
import investmoney from "./../../../assets/investmoney.svg";

const AppHomeBody = () => {
    return (
        <>
            <div className="appHomeBody">
                <div className="top">
                    <div className="topLeft">
                        <img src={malvin} alt="" />
                        <div className="hello">
                            <h4>Hello Malvin</h4>
                            <p>Good Morning</p>
                        </div>
                    </div>
                    <img src={notification} alt="" />
                </div>
                <div className="dashboard">
                    <div className="dashboardTransactions">
                        <p>Your Loan Balance</p>
                        <div className="transacBtn">
                            <button>Transactions</button>
                            <img src={arrowright} />
                        </div>
                    </div>
                    <p className="loanAmt">N125,000</p>
                    <p>Repayment due: 28 March, 2025</p>
                </div>
                <div className="services">
                    <div>
                        <img src={takeloan} alt="" />
                        <p>Take loan</p>
                    </div>
                    <div>
                        <img src={withdraw} alt="" />
                        <p>Withdraw</p>
                    </div>
                    <div>
                        <img src={repay} alt="" />
                        <p>Repay loan</p>
                    </div>
                </div>
                <div className="otherServices">
                    <div>
                        <img src={airtime} alt="" />
                        <p>Airtime</p>
                    </div>
                    <div>
                        <img src={data} alt="" />
                        <p>Data</p>
                    </div>
                    <div>
                        <img src={electricity} alt="" />
                        <p>Electricity</p>
                    </div>
                    <div>
                        <img src={bet} alt="" />
                        <p>Bet account</p>
                    </div>
                </div>
                <div className="bonuses">
                    <div className="bonusItem">
                        <div className="invest">
                            <img src={investmoney} alt="" />
                            <div>
                                <h4>Invest your money</h4>
                                <p>Earn interest on your invested money</p>
                            </div>
                        </div>
                        <img src={arrowicon} alt="" />
                    </div>
                    <div className="bonusItem">
                        <div className="invest">
                            <img src={contribution} alt="" />
                            <div>
                                <h4>Start a contribution</h4>
                                <p>Create and manage contribution group</p>
                            </div>
                        </div>
                        <img src={arrowicon} alt="" />
                    </div>
                    <div className="bonusItem">
                        <div className="invest">
                            <img src={easyloan} alt="" />
                            <div>
                                <h4>Easy loan</h4>
                                <p>Take loan with ease without collateral</p>
                            </div>
                        </div>
                        <img src={arrowicon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppHomeBody
