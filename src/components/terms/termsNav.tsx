const TermsNav: React.FC = () => {
    return(
        <>
            <nav className="terms__nav">
                <ul>
                    <li><p>Overview</p></li>
                    <li><a href="/terms-and-conditions#abouthallowedvisions">About Us</a></li>
                    <li><a href="/terms-and-conditions#deployment">Our Technologies</a></li>
                    <li><a href="/terms-and-conditions#ourmaintechstack">Deployment</a></li>
                </ul>
                <ul>
                    <li><p>Services</p></li>
                    <li><a href="/terms-and-conditions#services">Our Main Goal</a></li>
                    <li><a href="/terms-and-conditions#payment">Payment</a></li>
                    <li><a href="/terms-and-conditions#maintenance">Maintenance</a></li>
                </ul>
                <ul>
                    <li><p>General Terms</p></li>
                    <li><a href="/terms-and-conditions#clientresponsibilities">Client Responsibilities</a></li>
                    <li><a href="/terms-and-conditions#security">Security</a></li>
                    <li><a href="/terms-and-conditions#refundpolicy">Refund Policy</a></li>
                    <li><a href="/terms-and-conditions#limitationofliability">Limitation of Liability</a></li>
                    <li><a href="/terms-and-conditions#modifications">Modifications</a></li>
                </ul>
            </nav>
        </>
    )
}

export default TermsNav