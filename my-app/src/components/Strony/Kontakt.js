import React from "react";
import "./Kontakt.css";
import KontaktForm from "./KontaktForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
export default function KontaktHandler() {
  return (
    <div>
      { <div className="main">
        <iframe
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=44-335%20Jastrz%C4%99bie%20Zdr%C3%B3j%20ul.%20Wielkopolska%201k&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div> }


      <div className="alll">
        <div className="icotype1">
          <div className="ikona1">
            <FontAwesomeIcon
              icon={faHouseChimney}
              color="#105d37"
              fontSize="48px"
            />
          </div>
          <div className="hhh1">
            <h2>Jastrzębie Zdrój 44-335</h2>
            <h3>ul. Wielkopolska 1k</h3>
          </div>
        </div>

        <div className="icotype2">
          <div className="ikona2">
            <FontAwesomeIcon icon={faPhone} color="#105d37" fontSize="48px" />
          </div>
          <div className="hhh2">
            <a href={`tel: ${726177723}`}>
              <h2>+48 726 177 723 </h2>
            </a>
            <h3>
              Od Poniedziałku do Piątku,
              <br /> od 8 do 16
            </h3>
          </div>
        </div>

        <div className="icotype3">
          <div className="ikona3">
            <FontAwesomeIcon icon={faEnvelope} color="#105d37" fontSize="48px" />
          </div>
          <div className="hhh3">
            <a href="mailto:biuro@biurobalans.pl">
              <h2>biuro@biurobalans.pl</h2>
            </a>
            <h3>Zadaj nam pytanie</h3>
          </div>
        </div>
        {/* <div className="sk">
          <h3>
            Administratorem danych osobowych jest Biuro Rachunkowe Balans Izabela
            Kłosek z siedzibą w Jastrzębiu Zdroju. Dane wpisane w formularzu
            kontaktowym będą przetwarzane wyłącznie w celu udzielenia odpowiedzi
            na przesłane zapytanie lub przedstawiony problem. Po udzieleniu
            odpowiedzi wszystkie dane osobowe ujęte w zapytaniu zostaną
            niezwłocznie skasowane.
          </h3>
          </div> */}
        </div>

        {<KontaktForm />}
    </div>
  );
}
