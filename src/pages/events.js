import "./CSS/events.css";
import { Link } from "react-router-dom";

function Events(props) {
  return (
    <>
      <div className="events-title">
        <h1>Past Events</h1>
      </div>
      <div className="events-container">
        <div className="event-main">
          <div className="event-date">
            <span className="date">15</span>
            <span className="day">Thrusday</span>
            <small style={{ color: "var(--shade-red-primary)" }}>
              August,2022
            </small>
          </div>
          <div className="event-content">
            <div className="event-content-header">
              <p>Introduction to Ai</p>
            </div>
            <div className="event-content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae necessitatibus, perspiciatis possimus.
            </div>
            <div className="event-more-btn">
              <Link to={"/"}>Details</Link>
            </div>
          </div>
        </div>
        <div className="event-main">
          <div className="event-date">
            <span className="date">15</span>
            <span className="day">Thrusday</span>
            <small style={{ color: "var(--shade-red-primary)" }}>
              August,2022
            </small>
          </div>
          <div className="event-content">
            <div className="event-content-header">
              <p>Introduction to Ai</p>
            </div>
            <div className="event-content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae necessitatibus, perspiciatis possimus.
            </div>
            <div className="event-more-btn">
              <Link to={"/"}>Details</Link>
            </div>
          </div>
        </div>
        <div className="event-main">
          <div className="event-date">
            <span className="date">15</span>
            <span className="day">Thrusday</span>
            <small style={{ color: "var(--shade-red-primary)" }}>
              August,2022
            </small>
          </div>
          <div className="event-content">
            <div className="event-content-header">
              <p>Introduction to Ai</p>
            </div>
            <div className="event-content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae necessitatibus, perspiciatis possimus.
            </div>
            <div className="event-more-btn">
              <Link to={"/"}>Details</Link>
            </div>
          </div>
        </div>
        <div className="event-main">
          <div className="event-date">
            <span className="date">15</span>
            <span className="day">Thrusday</span>
            <small style={{ color: "var(--shade-red-primary)" }}>
              August,2022
            </small>
          </div>
          <div className="event-content">
            <div className="event-content-header">
              <p>Introduction to Ai</p>
            </div>
            <div className="event-content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae necessitatibus, perspiciatis possimus.
            </div>
            <div className="event-more-btn">
              <Link to={"/"}>Details</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="more-events">
        <Link to={`/`}> Expore More </Link>
      </div>
    </>
  );
}

export default Events;
