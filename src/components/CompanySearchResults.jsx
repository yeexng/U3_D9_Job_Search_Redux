import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { companySearchResultsAction } from "../redux/actions";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const favourites = useSelector((state) => state.favourites.companies);
  const companyJobs = useSelector(
    (state) => state.companySearch.companyResults
  );
  const applicationSpinner = useSelector((state) => state.favourites.isLoading);

  useEffect(() => {
    dispatch(companySearchResultsAction(params.companyName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {applicationSpinner && <Spinner animation="border" variant="primary" />}

      <Row>
        <Col>
          {companyJobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
