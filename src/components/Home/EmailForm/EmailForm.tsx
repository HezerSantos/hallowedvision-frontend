import { FormEvent, useCallback, useEffect, useState } from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa";
import { useSendEmailMutation } from "../../../services/emailService";
import TextInput from "../../common/TextInput/TextInput";
import Button from "../../common/Button/Button";

import "./EmailForm.scss";

interface DataErrors {
  errors: {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
  }[];
}

const EmailForm = () => {
  const [errors, setErrors] = useState<Map<string, string> | null>(null);
  const [sendEmail, { isLoading, error }] = useSendEmailMutation();

  const handleSendEmail = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const firstName = data["firstName"].toString() ?? "";
        const lastName = data["lastName"].toString() ?? "";
        const phoneNumber = data["phoneNumber"].toString() ?? "";
        const email = data["email"].toString() ?? "";
        const company = data["company"].toString() ?? "";
        const websiteType = data["websiteType"].toString() ?? "";
        const message = data["message"].toString() ?? "";

        const body = {
          firstName,
          lastName,
          phoneNumber,
          email,
          company,
          websiteType,
          message,
        };

        await sendEmail(body).unwrap();
      } catch {}
    },
    [sendEmail],
  );

  useEffect(() => {
    if (error && "status" in error && "data" in error && error.status === 400) {
      const data = error.data as DataErrors;
      const errorMap = new Map(data.errors.map((e) => [e.path, e.msg]));
      setErrors(errorMap);
    }
  }, [error]);

  const inputValues = [
    {
      name: "firstName",
      placeHolder: "First name",
      errorMessage: errors?.get("firstName"),
    },
    {
      name: "lastName",
      placeHolder: "Last name",
      errorMessage: errors?.get("lastName"),
    },
    {
      name: "phoneNumber",
      placeHolder: "Phone number",
      errorMessage: errors?.get("phoneNumber"),
    },
    {
      name: "email",
      placeHolder: "Email address",
      errorMessage: errors?.get("email"),
    },
    {
      name: "company",
      placeHolder: "Company",
      errorMessage: errors?.get("company"),
    },
    {
      name: "websiteType",
      placeHolder: "What are you looking to build?",
      errorMessage: errors?.get("websiteType"),
    },
    {
      name: "message",
      placeHolder: "Tell us about your project",
      errorMessage: errors?.get("message"),
    },
  ];

  return (
    <section className="email-form">
      <div className="email-form__intro">
        <span className="email-form__eyebrow">LET'S MAKE SOMETHING GREAT</span>

        <h2 className="email-form__title">
          Have an idea?
          <br />
          <span>Let's talk.</span>
        </h2>

        <p className="email-form__description">
          Whether you have a clear plan or just the beginning of an idea, we'd
          love to hear about it. Tell us what you're thinking and let's figure
          out the next step together.
        </p>

        <div className="email-form__contact-details">
          <div className="email-form__contact-item">
            <span className="email-form__contact-icon">
              <FaEnvelope />
            </span>
            <div>
              <span className="email-form__contact-label">GET IN TOUCH</span>
              <p>Send us a message using the form.</p>
            </div>
          </div>

          <div className="email-form__contact-item">
            <span className="email-form__contact-icon">
              <FaGlobe />
            </span>
            <div>
              <span className="email-form__contact-label">
                BUILT AROUND YOU
              </span>
              <p>Websites and digital experiences made with purpose.</p>
            </div>
          </div>
        </div>

        <div className="email-form__signature">
          <span>HV.</span>
          <p>HALLOWED VISIONS</p>
        </div>
      </div>

      <div className="email-form__panel">
        <div className="email-form__panel-heading">
          <div>
            <span className="email-form__panel-eyebrow">
              START A CONVERSATION
            </span>
            <h3>Tell us about your project.</h3>
          </div>

          <span className="email-form__panel-icon">
            <FaPaperPlane />
          </span>
        </div>

        <form className="email-form__form" onSubmit={(e) => handleSendEmail(e)}>
          <div className="email-form__field-grid">
            {inputValues.slice(0, 2).map((v) => (
              <div className="email-form__field" key={v.name}>
                <TextInput
                  name={v.name}
                  placeHolder={v.placeHolder}
                  errorMessage={v.errorMessage}
                  required
                  className="email-form__input"
                  labelFormat={{ top: "2px", left: "6px", fontSize: "12px" }}
                />
              </div>
            ))}
          </div>

          <div className="email-form__field-grid">
            {inputValues.slice(2, 4).map((v) => (
              <div className="email-form__field" key={v.name}>
                <TextInput
                  name={v.name}
                  placeHolder={v.placeHolder}
                  errorMessage={v.errorMessage}
                  required
                  className="email-form__input"
                  labelFormat={{ top: "2px", left: "6px", fontSize: "12px" }}
                />
              </div>
            ))}
          </div>

          {inputValues.slice(4).map((v) => (
            <div className="email-form__field" key={v.name}>
              <TextInput
                name={v.name}
                placeHolder={v.placeHolder}
                errorMessage={v.errorMessage}
                required
                className="email-form__input"
                labelFormat={{ top: "2px", left: "6px", fontSize: "12px" }}
              />
            </div>
          ))}

          <div className="email-form__submit">
            <Button
              text="SEND YOUR MESSAGE"
              className="email-form__submit-button"
              type="submit"
              isLoading={isLoading}
            >
              <FaArrowRight />
            </Button>

            <span className="email-form__submit-note">
              Let's bring your idea to life.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailForm;
