import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./LandingFile.css";

const landingfile = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button className="landingbutton" variant="primary">
                  Login
                </Button>{" "}
              </a>
              <a href="/register">
                <Button className="landingbutton" variant="primary">
                  Signup
                </Button>{" "}
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default landingfile;
