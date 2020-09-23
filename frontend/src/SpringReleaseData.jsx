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
};


export default SpringReleaseData;
