import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
  const [gigId, setGigId] = useState(3087);
  const [countryId, setCountryId] = useState(1);
  const [res, setRes] = useState(undefined);

  const url = new URL(window.location.href);

  useEffect(() => {
    const gigId = url.searchParams.get("gig_id");
    setGigId(gigId);
    //const adSourceId = query.get("adsource_id");
    //const refId = query.get("ref_id");
    const countryId = url.searchParams.get("country_id");
    setCountryId(countryId);
  }, []);

  return (
      <Container>
        <Row
          className="justify-content-md-center"
          style={{ textAlign: "center" }}
        >
          <Row>
            <Col>
              <h3>Gig Landing Page app</h3>
            </Col>
          </Row>
          {console.log(
            "Redirecting...",
            `https://www.google.com?gigId=${gigId}&countryId=${countryId}`
          )}
          <Row>
            <Col>
              <a
                href={`https://www.google.com?gigId=${gigId}&countryId=${countryId}`}
              >
                <Button>Click here to Apply</Button>
              </a>
            </Col>
          </Row>
        </Row>
      </Container>
  );
}

export default App;
