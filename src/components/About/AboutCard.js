import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut! Je m'appelle <span className="purple">NKENKE EYEBE Samuel </span>
           je vis à <span className="purple"> Libreville / Gabon</span>
            <br />Je suis développeur fullStack/UX Design. 
            <br />
            <br />
            A part le code, je 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer du Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Production de musique
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Toujours coder comme si la personne qui finit par maintenir votre code sera un psychopathe violent qui sait où vous habitez."{" "}
          </p>
          <footer className="blockquote-footer">Sam Nk Lcf</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
