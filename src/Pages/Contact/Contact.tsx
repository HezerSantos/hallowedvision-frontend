import { FormEvent, useCallback, useEffect, useState } from "react";
import { FaArrowRight, FaPaperPlane } from "react-icons/fa";

import "./Contact.scss";
import { useSendEmailMutation } from "../../services/emailService";
import TextInput from "../../components/common/TextInput/TextInput";
import Button from "../../components/common/Button/Button";

interface DataErrors {
  errors: {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
  }[];
}

const Contact = () => {
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
      placeHolder: "Company or organization",
      errorMessage: errors?.get("company"),
    },
  ];

  return (
    <main className="contact">
      <div className="contact__container">
        <header className="contact__header">
          <div className="contact__header-copy">
            <span className="contact__eyebrow">
              HALLOWED VISIONS / PROJECT INQUIRY
            </span>

            <h1>
              Let's build
              <span> something.</span>
            </h1>

            <p>
              Every project starts somewhere. Tell us a little about your
              vision, what you need, and how we can help bring it to life.
            </p>
          </div>

          <div className="contact__header-index" aria-hidden="true">
            <span>HV.</span>
            <span>01 — 03</span>
          </div>
        </header>

        <div className="contact__workspace">
          <aside className="contact__sidebar">
            <div className="contact__sidebar-heading">
              <span>YOUR PROJECT</span>
              <span className="contact__sidebar-indicator" />
            </div>

            <div className="contact__steps">
              <div className="contact__step contact__step--active">
                <span className="contact__step-number">01</span>
                <div>
                  <h3>Your details</h3>
                  <p>How can we reach you?</p>
                </div>
              </div>

              <div className="contact__step">
                <span className="contact__step-number">02</span>
                <div>
                  <h3>Project overview</h3>
                  <p>What are you looking to build?</p>
                </div>
              </div>

              <div className="contact__step">
                <span className="contact__step-number">03</span>
                <div>
                  <h3>Project brief</h3>
                  <p>Tell us about your idea.</p>
                </div>
              </div>
            </div>

            <div className="contact__sidebar-note">
              <span className="contact__sidebar-note-icon">✳</span>
              <p>
                Not everything figured out yet? That's completely fine. Start
                with what you know.
              </p>
            </div>

            <div className="contact__sidebar-footer">
              <span>HALLOWED VISIONS</span>
              <span>DESIGNED WITH INTENTION.</span>
            </div>
          </aside>

          <section className="contact__form-panel">
            <div className="contact__form-header">
              <div>
                <span className="contact__section-index">01 / 03</span>
                <h2>Tell us about yourself.</h2>
                <p>First, let's get to know who's behind the project.</p>
              </div>

              <span className="contact__form-symbol">
                <FaPaperPlane />
              </span>
            </div>

            <form className="contact__form" onSubmit={handleSendEmail}>
              <div className="contact__form-section">
                <div className="contact__section-heading">
                  <span>CONTACT INFORMATION</span>
                  <span>01</span>
                </div>

                <div className="contact__field-grid">
                  {inputValues.slice(0, 2).map((v) => (
                    <div className="contact__field" key={v.name}>
                      <label className="contact__label" htmlFor={v.name}>
                        {v.name === "firstName" ? "First name" : "Last name"}
                        <span>*</span>
                      </label>

                      <TextInput
                        name={v.name}
                        placeHolder={v.placeHolder}
                        errorMessage={v.errorMessage}
                        required
                        className="contact__input"
                        labelFormat={{
                          top: "2px",
                          left: "6px",
                          fontSize: "12px",
                        }}
                      />
                    </div>
                  ))}

                  {inputValues.slice(2, 4).map((v) => (
                    <div className="contact__field" key={v.name}>
                      <label className="contact__label" htmlFor={v.name}>
                        {v.name === "phoneNumber"
                          ? "Phone number"
                          : "Email address"}
                        <span>*</span>
                      </label>

                      <TextInput
                        name={v.name}
                        placeHolder={v.placeHolder}
                        errorMessage={v.errorMessage}
                        required
                        className="contact__input"
                        labelFormat={{
                          top: "2px",
                          left: "6px",
                          fontSize: "12px",
                        }}
                      />
                    </div>
                  ))}

                  <div className="contact__field contact__field--full">
                    <label className="contact__label" htmlFor="company">
                      Company or organization
                    </label>

                    <TextInput
                      name="company"
                      placeHolder="Company or organization"
                      errorMessage={errors?.get("company")}
                      required
                      className="contact__input"
                      labelFormat={{
                        top: "2px",
                        left: "6px",
                        fontSize: "12px",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="contact__form-section">
                <div className="contact__section-heading">
                  <span>PROJECT OVERVIEW</span>
                  <span>02</span>
                </div>

                <div className="contact__field">
                  <label className="contact__label" htmlFor="websiteType">
                    What are you looking to build?
                    <span>*</span>
                  </label>

                  <div className="contact__select-wrapper">
                    <select
                      id="websiteType"
                      name="websiteType"
                      className="contact__select"
                      defaultValue=""
                      required
                      aria-invalid={Boolean(errors?.get("websiteType"))}
                    >
                      <option value="" disabled>
                        Select a project type
                      </option>
                      <option value="Landing page">Landing page</option>
                      <option value="Business website">Business website</option>
                      <option value="Portfolio website">
                        Portfolio website
                      </option>
                      <option value="E-commerce website">
                        E-commerce website
                      </option>
                      <option value="Web application">Web application</option>
                      <option value="Custom website">Custom website</option>
                      <option value="Other / Not sure yet">
                        Other / Not sure yet
                      </option>
                    </select>

                    <FaArrowRight className="contact__select-arrow" />
                  </div>

                  {errors?.get("websiteType") && (
                    <span className="contact__error">
                      {errors.get("websiteType")}
                    </span>
                  )}
                </div>
              </div>

              <div className="contact__form-section">
                <div className="contact__section-heading">
                  <span>YOUR PROJECT BRIEF</span>
                  <span>03</span>
                </div>

                <div className="contact__field">
                  <label className="contact__label" htmlFor="message">
                    Tell us about your idea.
                    <span>*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    className="contact__textarea"
                    placeholder="What are you hoping to create? What features do you need? Are there any websites or designs that inspire you?"
                    rows={7}
                    required
                    aria-invalid={Boolean(errors?.get("message"))}
                  />

                  {errors?.get("message") && (
                    <span className="contact__error">
                      {errors.get("message")}
                    </span>
                  )}
                </div>
              </div>

              <div className="contact__form-footer">
                <div className="contact__footer-copy">
                  <span>READY TO GET STARTED?</span>
                  <p>We'll take it from here.</p>
                </div>

                <Button
                  text="SUBMIT PROJECT INQUIRY"
                  className="contact__submit"
                  type="submit"
                  isLoading={isLoading}
                >
                  <FaArrowRight />
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;
