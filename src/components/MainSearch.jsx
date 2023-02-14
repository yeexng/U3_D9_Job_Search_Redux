import { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mainSearchResultsAction } from "../redux/actions";
import Job from "./Job";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const jobsFromRedux = useSelector((state) => state.mainSearch.mainResults);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(mainSearchResultsAction(query));
  };

  const applicationSpinner = useSelector((state) => state.mainSearch.isLoading);
  const applicationError = useSelector((state) => state.mainSearch.isError);
  return (
    <Container>
      {
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1>Remote Jobs Search</h1>
            <Button onClick={() => navigate("/favourites")}>Favourites</Button>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="type and press Enter"
              />
            </Form>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {applicationSpinner && (
              <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner animation="border" variant="primary" />
              </div>
            )}
            {applicationError && (
              <div>
                <img
                  className="img-fluid"
                  src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
                  alt=""
                />
              </div>
            )}
            {jobsFromRedux ? (
              jobsFromRedux.map((jobData) => (
                <Job key={jobData._id} data={jobData} />
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </Col>
        </Row>
      }
    </Container>
  );
};
export default MainSearch;
