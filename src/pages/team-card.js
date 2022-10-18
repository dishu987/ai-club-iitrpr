import "./CSS/team-card.css";
import teams_data from "./DATA/teams-data";
import Loader from "./loader-line";
import { useState, useEffect } from "react";

function Team_Card(props) {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  }, []);
  if (showContent) {
    return (
      <>
        <div className="team-container">
          <div className="team-heading">
            <h1>Teams</h1>
          </div>
          <div className="teams-main">
            {teams_data.map((d) => (
              <div class="our-team">
                <div class="picture">
                  <img
                    class="img-fluid"
                    src={require(`./IMAGES/team-prfile-images/${d.image}`)}
                  />
                </div>
                <div class="team-content">
                  <h3 class="name">{d.name}</h3>
                  <h4 class="title">{d.designation}</h4>
                  <p>{d.email}</p>
                </div>
                <ul class="social">
                  <li>
                    <a
                      href={`https://instagram.com/${d.instagram}`}
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href={d.twitter}
                      class="fa fa-twitter"
                      aria-hidden="true"
                    ></a>
                  </li>
                  {/* <li>
                    <Link
                      to={`window.location.href = "https://google.com/contact"`}
                      class="fa fa-envelope"
                      aria-hidden="true"
                    ></Link>
                  </li> */}
                  <li>
                    <a
                      href={d.linkedin}
                      class="fa fa-linkedin"
                      aria-hidden="true"
                    ></a>
                  </li>
                  <li>
                    <a
                      href={`https://api.whatsapp.com/send?phone=91${d.mobile}&text=Thanks`}
                      target="_blank"
                      class="fa fa-whatsapp"
                      aria-hidden="true"
                    ></a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return <Loader />;
  }
}

export default Team_Card;
