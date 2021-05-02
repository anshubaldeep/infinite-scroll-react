import React, { useContext, useEffect, useRef, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import instance from "../axios";
import AuthContext from "../Context/AuthContext";

const MainScreen = (props) => {
  const { setLogin, userName } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const logoutHandler = () => {
    setLogin(false);
    localStorage.setItem("login", false);
    props.history.push("/login");
  };

  useEffect(() => {
    instance
      .get("/photos?_page=" + page + "&_limit=5")
      .then(function (response) {
        setData([...data, ...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  return (
    <div className="MainScreen">
      <Row>
        <Col md={10} sm={12}>
          <h3>Welcome User: {userName}</h3>
        </Col>
        <Col md={2} sm={12}>
          <button
            class="btn btn-outline-danger"
            type="button"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </Col>
      </Row>
      <div className="ScrollList">
        <Row>
          {data.map((data) => (
            <Col md={4} sm={12} key={data.id} className="Scroll-Card">
              <Card>
                <Card.Img variant="top" src={data.url} />
                <Card.Body>
                  <Card.Title>{data.id}</Card.Title>
                  <Card.Text>{data.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="spinner-div" ref={loader}>
        <Spinner
          animation="border"
          role="status"
          size="xl"
          variant="danger"
          as="div"
        >
          <span className="sr-only center">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default MainScreen;
