import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "./CookieInfo.scss";

const CookieInfo = () => {
  const getCookieFromLocalStorage = () => {
    let localStorageCookie;

    if (localStorage.getItem("cookieAccepted")) {
      localStorageCookie = JSON.parse(localStorage.getItem("cookieAccepted"));
    } else {
      localStorageCookie = false;
    }
    return localStorageCookie;
  };

  const [cookies, setCookies] = useCookies(["user"]);
  const [cookieAccepted, setCookieAccepted] = useState(
    getCookieFromLocalStorage()
  );

  const setCookieToLocalStorage = () => {
    localStorage.setItem("cookieAccepted", JSON.stringify(cookieAccepted));
  };

  useEffect(() => {
    setCookieToLocalStorage();
  }, [cookieAccepted]);

  const handleCookie = () => {
    setCookies("user", "gowtham", {
      path: "/",
    });

    setCookieAccepted(true);
  };

  return (
    <>
      {cookieAccepted ? null : (
        <div className="cookie__wrapper">
          <p className="text__wrapper">
            Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w
            celach funkcjonalnych. Dzięki nim możemy indywidualnie dostosować
            stronę do twoich potrzeb. Każdy może zaakceptować pliki cookies albo
            ma możliwość wyłączenia ich w przeglądarce, dzięki czemu nie będą
            zbierane żadne informacje.
          </p>
          <button className="accept__btn" onClick={handleCookie}>
            Akceptuje cookies
          </button>
        </div>
      )}
    </>
  );
};

export default CookieInfo;
