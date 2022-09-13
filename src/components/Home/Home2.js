import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> Je me présente</span>
            </h1>
            <p className="home-about-body">
            Je suis tombé amoureux de la programmation et j'ai au moins appris quelque chose, je pense… 🤷‍♂️.
              
              <br />
              <br />Je maîtrise les classiques comme

              <i>
                <b className="purple">Javascript, Python et PHP. </b>
              </i>
              <br />
              <br />
                Mes domaines d'intérêt sont la création de nouvelles &nbsp;
              <i>
                <b className="purple">technologies et produits Web </b> ainsi
                que les domaines liés{" "}
                <b className="purple">
                 à l'apprentissage en profondeur et au traitement du langage naturel.
                </b>
              </i>
              <br />
              <br />
             
              
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ MOI SUR</h1>
            <p>
            N'hésitez pas à <span className="purple">me </span>contacter
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/samnklcf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/samnklcf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/samnklcf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sam_nk_lcf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
