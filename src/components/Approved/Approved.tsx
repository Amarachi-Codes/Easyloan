import "./Approved.css";
import cbn from "./../../assets/cbn.png";
import firs from "./../../assets/firs.png";
import fintech from "./../../assets/fintech.png";
import cama from "./../../assets/CAMA.webp";
import fccpc from "./../../assets/fccpc.png";

const Approved = () => {
  return (
    <>
    <div className="approvedWrapper">
      <h2>We are duly approved</h2>
      <p>Regulated by the Central Bank of Nigeria, licensed by Companies and Allied Matters Act (CAMA)
         and Federal Competition and Consumer Protection Act (FCCPA).
        And affiliated to all necessary bodies in Nigeria and abroad.
        </p>
        <div className="logos">
            <div className="cbn">
                <img src={cbn} alt=""  />
            </div>
            <div className="firs">
                <img src={firs} alt="" />
            </div>
            <div className="fintech">
                <img src={fintech} alt="" />
            </div>
            <div className="fccpc">
                <img src={fccpc} alt="" />
            </div>
            <div className="cama">
                <img src={cama} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Approved
