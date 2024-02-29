import React from "react";
import "./Glowna.css";
import Slider from "../Slider/Slider";
import Para from "../UI/Para";
import FrameUp from "../UI/FrameUp";
import Text from "../UI/Text";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import {
  faBuilding,
  faStapler,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Glowna() {
  const navigate = useNavigate();
  const Offer = () => {
    navigate("/Oferta");
  };
  function Dalej() {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#toTheDiv").offset().top - $(window).height() / 2,
      },
      1000
    );
  }
  return (
    <div>
      <div className="main">
        <Slider />
        <div className="tcont">
          <h1>IZABELA KŁOSEK</h1>
          <h2>Biuro Rachunkowe BALANS</h2>
          <h3>Biuro rachunkowe z pasją. Świadczymy usługi dla Ciebie.</h3>
          <div className="rounded"></div>
          <div className="przyciski">
            <button className="bat2" onClick={Dalej}>
              Dalej
            </button>
            <button className="bat">Więcej</button>
          </div>
        </div>
        {/* <div className="log">
            <img className="logotyp" src={`/Imgs/logo.png`}></img>
          </div> */}
        {/* <div className="sep">
            <div class="hrr"></div>
          </div> */}
      </div>
      <section>
        <div className="allp">
          <div className="pp">
            <Para>
              <FrameUp>
                <FontAwesomeIcon
                  icon={faBuilding}
                  color="white"
                  fontSize="30px"
                />
                <h2>Kim jesteśmy?</h2>
              </FrameUp>
              <Text>
                <div className="tt" id="toTheDiv">
                  Biuro rachunkowe BALANS powstało z myślą o ludziach, którzy
                  potrzebują pomocy i wsparcia w gąszczu wielu niezrozumiałych
                  przepisów. Nasze biuro powstało, by wesprzeć w opracowaniu
                  dokumentacji kadrowej, płacowej i wielu innych obowiązkach,
                  jakie ciążą na pracodawcach i ich przedsiębiorstwach.
                </div>
              </Text>
              <div className="bttn">
                <button onClick={Offer} className="cssbuttons-io-button">
                  Sprawdź
                  <div className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>{" "}
                </button>
              </div>
            </Para>

            <Para>
              <FrameUp>
                <FontAwesomeIcon
                  icon={faStapler}
                  color="white"
                  fontSize="30px"
                />
                <h2>Benefity</h2>
              </FrameUp>
              <Text>
                <div className="tt">
                  Nasze usługi pozwolą zaoszczędzić cenny czas, natomiast
                  Państwo będziecie spokojni o zrealizowanie wielu
                  biurokratycznych spraw co pozwoli na dalszy rozwój
                  przedsiębiorstwa.
                </div>
              </Text>
              <div className="bttnmid">
                <button onClick={Offer} className="cssbuttons-io-button">
                  Sprawdź
                  <div className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </Para>

            <Para>
              <FrameUp>
                <FontAwesomeIcon icon={faUser} color="white" fontSize="30px" />
                <h2>Dla kogo?</h2>
              </FrameUp>
              <Text>
                <div className="tt">
                  Nasze biuro rachunkowe jest dla każdego, nawet dla osoby,
                  która nie prowadzi firmy – Ty także jesteś dla Nas ważny!
                  Świadczymy usługi elektronicznej wysyłki wniosków o
                  świadczenia wychowawcze 500+, wniosków 300+ czy sporządzamy za
                  Państwa wnioski emerytalno-rentowe.
                </div>
              </Text>
              <div className="bttn">
                <button onClick={Offer} className="cssbuttons-io-button">
                  Sprawdź
                  <div className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </Para>
          </div>
        </div>
      </section>
      <div className="mid">
        <img src="https://c1il0h.webwave.dev/files/dynamicContent/sites/c1il0h/images/pl/webpage_1/l977ylho/element_151/311378181_3333157583586180_6724543333954054737_n.png"></img>
      </div>
    </div>
  );
}
