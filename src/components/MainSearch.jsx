import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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
  // const baseEndpoint =
  //   "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  //   try {
  //     const response = await fetch(baseEndpoint + query + "&limit=20");
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       setJobs(data);
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // moved to action/index.js
  return (
    <Container>
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
          {jobsFromRedux ? (
            jobsFromRedux.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default MainSearch;
