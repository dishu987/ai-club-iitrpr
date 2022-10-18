import "./CSS/footer-css.css";
import { Outlet, Link } from "react-router-dom";

const Footer = (props) => {
  const onLogout = () => {
    fetch("http://localhost:3001/api/logout", {
      method: "POST",
      credentials: "include",
      redirect: "follow",
    })
      .then((res) => {
        if (res.status === 200) {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div className="divider-line">
        <span></span>
      </div>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">ioTA-Cluster</h1>
          <h2>Contact</h2>
          <address>
            Indian Institute of Technology, Ropar
            <br />
            <Link to={"/contact"} className="footer__btn">
              {" "}
              Contact Us{" "}
            </Link>{" "}
          </address>
        </div>
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Blogs</h2>

            <ul className="nav__ul">
              <li>
                <Link to={"/"}> Online</Link>
              </li>
              <li>
                <Link to={"/"}> Print</Link>
              </li>

              <li>
                <Link to={"/"}>ads</Link>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Hackathons</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <Link to={"/"}> Online</Link>
              </li>

              <li>
                <Link to={"/"}> Online</Link>
              </li>

              <li>
                <Link to={"/"}> Online</Link>
              </li>

              <li>
                <Link to={"/"}> Online</Link>
              </li>

              <li>
                <Link to={"/"}> Online</Link>
              </li>

              <li>
                <Link to={"/"}> Online</Link>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <Link to={"/"}>Privacy Policy</Link>
              </li>

              <li>
                <Link to={"/"}> Terms of Use</Link>
              </li>
              <li>
                <Link to={"/"}> Sitemap</Link>
              </li>
              <li>
                {(() => {
                  if (props.isLoggedIn === true) {
                    return (
                      <Link
                        onClick={() => {
                          onLogout();
                        }}
                      >
                        Logout
                      </Link>
                    );
                  }
                })()}
                {(() => {
                  if (props.isLoggedIn === false) {
                    return <Link to={"/login"}>Admin Login</Link>;
                  }
                })()}
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2022 Copyright ioTA-Cluster. All rights reserved.</p>

          <div className="legal__links">
            <span>
              Made By{" "}
              <span
                className="heart"
                style={{
                  color: "var(--shade-red-primary)",
                }}
              >
                ♥
              </span>{" "}
              ioTa-Cluster Developer Team
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
