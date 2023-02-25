import React from "react";
import "./Film.css";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Icon, CardTitle, Row, Col, Card, Container } from "react-materialize";
import { Link } from "react-router-dom";
import { Films } from "../../shared/ListOfFilms";

export default function Film() {
  return (
    <Container style={{ marginTop: 20 }}>
      <Row>
        {Films.map((film) => (
          <Col s={4} key={film.id}>
            <Card
              header={<CardTitle image={film.imgage} reveal waves="light" />}
              reveal={<p>{film.info}</p>}
              revealIcon={<Icon>more_vert</Icon>}
              title={film.name}
            >
              <Link to={`detail/${film.id}`}>
                <p>
                  <button>Detail</button>
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
