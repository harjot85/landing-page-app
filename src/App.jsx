import { Button, Col, Container, Row } from "react-bootstrap";
function App() {
  return (
    <Container>
      <Row className="justify-content-md-center" style={{textAlign: "center"}}>
        <Row>
          <Col xs lg="2">
            <h3>Gig Landing Page app</h3>
          </Col>
        </Row>
        <Row>
          <Col xs lg="2">
            <Button>Click here to Apply</Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default App;
