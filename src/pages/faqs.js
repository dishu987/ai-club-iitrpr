import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./CSS/faqs.css";
import { useState, useEffect } from "react";
import Loader from "./loader-line";
import { useSearchParams } from "react-router-dom";
import faqs_data from "./DATA/faqs_data";

function FaQs(props) {
  const [isActive, setIsActive] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  }, []);
  useEffect(() => {
    setSearchParams({ isActive });
  }, [isActive]);
  if (showContent) {
    return (
      <>
        <div className="heading">
          <h1>FaQ's</h1>
        </div>
        <Container className="main-content">
          {faqs_data.map((d) => (
            <div className="accordion" key={d.id}>
              <div className="accordion-item">
                <div
                  className="accordion-title"
                  onClick={() =>
                    isActive == d.id ? setIsActive(null) : setIsActive(d.id)
                  }
                >
                  <div>
                    #{d.id} - {d.title}
                  </div>
                  <div>{isActive === d.id ? "-" : "+"}</div>
                </div>
                <div
                  className={
                    isActive === d.id
                      ? "accordion-content-active"
                      : "accordion-content"
                  }
                >
                  {d.answer}
                </div>
              </div>
            </div>
          ))}
        </Container>
      </>
    );
  } else {
    return <Loader />;
  }
}

export default FaQs;
