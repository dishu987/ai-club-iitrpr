import "./CSS/contact.css";
import { useEffect, useState, React } from "react";
import Loader from "./loader-line";
function ContactUs(props) {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  }, []);
  if (showContent) {
    return (
      <>
        <div className="container">
          <div className="row">
            <h1>Contact us</h1>
          </div>
          <form>
            <div className="row input-container">
              <div className="col-xs-12">
                <div className="styled-input wide">
                  <input type="text" required />
                  <label>Name</label>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="styled-input">
                  <input type="text" required />
                  <label>Email</label>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="styled-input" style={{ float: "right" }}>
                  <input type="text" required />
                  <label>Phone Number</label>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="styled-input wide">
                  <textarea required></textarea>
                  <label>Message</label>
                </div>
              </div>
              <div className="col-xs-12">
                <button className="btn-lrg submit-btn" type="submit">
                  Send{"  "}
                  <i className="fa fa-send" aria-hidden="true"></i>
                </button>
                <button
                  className="btn-lrg submit-btn"
                  type="reset"
                  style={{
                    backgroundColor: "var(--text-primary)",
                    color: "var(--shade-red-primary)",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  } else {
    return <Loader />;
  }
}
export default ContactUs;
