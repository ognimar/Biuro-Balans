import React, { useState } from "react";
import "./KontaktForm.css";

export default function KontaktForm() {
 const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  }; 
  return (
    <form onSubmit={handleSubmit}>
      <div className="imps-cont">
        <div className="imps">
          <input placeholder="Podaj imię" type="text" id="name" required />

          <div>
            <input
              placeholder="Podaj adres email"
              type="email"
              id="email"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Treść twojej wiadomości"
              id="message"
              required
            />
          </div>
        </div>
        <div className="sub">
          <button type="submit">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>{status}</span>
          </button>
        </div>
      </div>
    </form>
  );
}
