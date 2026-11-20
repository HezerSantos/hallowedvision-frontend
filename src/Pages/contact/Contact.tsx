import "../../assets/styles/contact/contact.css";
import FooterHV from "../../components/universal/footer";
import ContactHeader from "../../components/contact/contactHeader";
import ContactContent from "../../components/contact/contactContent";
import { useState, useEffect } from "react";
import EmailMessage from "../../components/errors/emailMessage";
const Contact: React.FC = () => {
  const [isLimit, setIsLimit] = useState<boolean>(false);
  const [emailMessage, setEmailMessage] = useState<string>("");

  useEffect(() => {
    if (isLimit) {
      const timeoutId = setTimeout(() => {
        setIsLimit(false);
      }, 8000);

      return () => clearTimeout(timeoutId);
    }
  }, [isLimit]);
  return (
    <>
      {isLimit && <EmailMessage message={emailMessage} />}
      <main className="page-section">
        <section className="page-section__child contact-content">
          <ContactHeader />
          <ContactContent
            setIsLimit={setIsLimit}
            setEmailMessage={setEmailMessage}
          />
        </section>
      </main>
      <footer className="contact-footer">
        <FooterHV />
      </footer>
    </>
  );
};

export default Contact;
