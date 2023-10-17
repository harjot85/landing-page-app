import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
  const [gigId, setGigId] = useState(0);
  const [countryId, setCountryId] = useState(0);
  const [adSource, setAdSource] = useState(0);
  const [refId, setRefId] = useState(0);

  const url = new URL(window.location.href);

  useEffect(() => {
    const gigId = url.searchParams.get("gig_id");
    setGigId(gigId);
    const adSourceId = url.searchParams.get("adsource_id");
    setAdSource(adSourceId);
    const refId = !isNaN(parseInt(url.searchParams.get("ref_id")))
      ? url.searchParams.get("ref_id")
      : 0;
    setRefId(refId);
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

        <Row>
          <Col>
            <a
              href={`https://app-dev.gigcxmarketplace.com/gig-apply?gig_id=${gigId}&adsource_id=${adSource}&country_id=${countryId}&ref_id=${refId}`}
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
