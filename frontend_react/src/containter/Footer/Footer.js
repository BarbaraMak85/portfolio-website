import React from "react";
import { images } from "../../constants";
import "./Footer.scss";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { Formik, Form, ErrorMessage } from "formik";
import { AppWrap, MotionWrap } from "../../wrapper";

const formValidationSchema = Yup.object().shape({
  nameAndSurname: Yup.string().required("Proszę o podanie imienia i nazwiska."),
  email: Yup.string()
    .email("Podany adres e-mail nie jest poprawny.")
    .required("Proszę o podanie adresu e-mail."),
  subject: Yup.string().required("Proszę o podanie tematu."),
  message: Yup.string().required("Proszę o wpisanie treści wiadomości. "),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    "Musisz wyrazić zgodę na przetwarzanie danych."
  ),
});

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Skontaktuj się ze mną</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:barbara.makowiec@wp.pl" className="p-text">
            barbara.makowiec@wp.pl
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+ (48) 881 912 998" className="p-text">
            + (48) 881 912 998
          </a>
        </div>
      </div>
      <Formik
        initialValues={{
          nameAndSurname: "",
          email: "",
          subject: "",
          message: "",
          acceptTerms: false,
        }}
        validationSchema={formValidationSchema}
        onSubmit={(values, { resetForm }) => {
          emailjs
            .send(
              process.env.REACT_APP_SERVICE_ID,
              process.env.REACT_APP_TEMPLATE_ID,
              values,
              process.env.REACT_APP_USER_ID
            )
            .then(
              function (response) {
                alert("Wiadomość została wysłana");
              },
              function (error) {
                alert(
                  "Przepraszamy... coś poszło nie tak, proszę spróbować jeszcze raz"
                );
              }
            );

          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form className="app__flex">
            <div className="app__footer-form app__flex">
              <div className="app__flex">
                <input
                  className="p-text"
                  type="text"
                  placeholder="imię i nazwisko"
                  name="nameAndSurname"
                  value={values.nameAndSurname}
                  onChange={handleChange}
                />
              </div>
              <div className="app__error__message__form ">
                <ErrorMessage name="nameAndSurname" />
              </div>

              <div className="app__flex">
                <input
                  className="p-text"
                  type="text"
                  name="email"
                  placeholder="e-mail"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className="app__error__message__form">
                <ErrorMessage name="email" />
              </div>

              <div className="app__flex">
                <input
                  className="p-text"
                  type="text"
                  placeholder="temat"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="app__error__message__form">
                <ErrorMessage name="subject" />
              </div>

              <div className="app__flex">
                <textarea
                  className="p-text"
                  type="text"
                  placeholder="wiadomość"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                />
              </div>
              <div className="app__error__message__form">
                <ErrorMessage name="message" />
              </div>

              <div className="checkbox__form">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  id="acceptTerms"
                  checked={values.acceptTerms}
                  onChange={handleChange}
                />
              </div>

              <p className="p-text">
                Wyrażam zgodę na przetwarzanie danych osobowych przez Barbara
                Makowiec w celu przesłania oferty handlowej i przesyłanie
                informacji drogą elektroniczną
              </p>

              <div className="app__error__message__form">
                <ErrorMessage name="acceptTerms" />
              </div>

              <button>Wyślij</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "kontakt",
  "app__whitebg"
);
