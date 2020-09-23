import React, { useState, useEffect } from "react";
import { getSpringRelease } from "./services/springReleaseSerivce";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const SpringReleaseData = () => {
  const [pageData, setPageData] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [hasPrevious, setPrevious] = useState(false); //We alwasy start with first page
  const [hasNext, setNext] = useState(); //We dont know if there are multiple pages

  useEffect(() => {
    updatePageData().catch((e) => {
      console.error(e);
    });
  }, [pageNumber]); //Trigger useEffect if pageNumber has changed

  const increasePageNumber = () => {
    if (
      pageData.pagination &&
      pageNumber < pageData.pagination.number_of_pages
    ) {
      setPageNumber(pageNumber + 1);
      return true;
    }
    return false;
  };

  const decreasePageNumber = () => {
    if (pageData.pagination && pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      return true;
    }
    return false;
  };

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
