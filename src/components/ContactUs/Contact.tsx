import "./Contact.css";

const Contact = () => {
    return (
        <>
            <div className="contactWrapper">
                <div className="howItWorks">
                    <h2>How It Works</h2>
                    <ul>
                        <li><span>Apply Online:</span> Fill out our simple online application form with your personal and financial details.</li>
                        <li><span>Get Approved:</span> Our advanced algorithms and dedicated team review your application promptly.</li>
                        <li><span>Receive Funds:</span> Once approved, the funds are disbursed directly to your bank account in no time.</li>
                    </ul>
                </div>
                <div className="howItWorks">
                    <h2>Contact Us</h2>
                    <p>Got questions or need assistance? Our customer support team is here to help. 
                       {/* Reach out to us via [contact information] and experience our exceptional service firsthand.
                       At EasyLoan, we believe in the power of financial freedom. 
                       Join us today and take the first step towards a brighter financial future! */}
                       <form action="">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <textarea name="" id="" placeholder="Message"></textarea>
                        <button>Submit</button>
                       </form>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Contact
