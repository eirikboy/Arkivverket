import React, { useState, useEffect } from "react";
import { getSpringRelease } from "./services/springReleaseSerivce";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const SpringReleaseData = () => {
  const [pageData, setPageData] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    updatePageData().catch((e) => {
      console.error(e);
    });
  }, [pageNumber]); //Trigger useEffect if pageNumber has changed
  const updatePageData = async () => {
    const response = await getSpringRelease(pageNumber);
    setPageData(response.data);
    setPrevious(pageNumber > 1 ? true : false);
    setNext(
      pageNumber < response.data.pagination.number_of_pages ? true : false
    );
};

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Button
          className="mr-2"
          disabled={!hasPrevious}
          onClick={() => {
            decreasePageNumber();
          }}
        >
          Previous
        </Button>
        <Button
          disabled={!hasNext}
          onClick={() => {
            increasePageNumber();
          }}
        >
          Next
        </Button>
      </Row>
      <Row>
        {pageData?.results &&
          pageData.results.map((sr) => (
            <Card key={sr.source_id} style={{ width: "100%" }} className="mb-2">
              <Card.Title>{sr.title}</Card.Title>
              <Card.Text>{sr.description}</Card.Text>
            </Card>
          ))}
      </Row>
    </Container>
  );
};

export default SpringReleaseData;
