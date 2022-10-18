import { Outlet, Link } from "react-router-dom";
import styles from "./CSS/navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./IMAGES/logo-ai.jpeg";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader_top from "./loader-for-top";
const Layout = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [topLoader, setTopLoader] = useState(true);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { pathname } = useLocation();
  const [whichActive, setWhichActive] = useState("home");
  useEffect(() => {
    setTimeout(() => {
      setTopLoader(false);
    }, 1000);
    setTopLoader(true);
    let activePath = pathname.replace(/\d+/g, "");
    if (activePath == "/") {
      setWhichActive("home");
    } else if (activePath == "/blogs/" || activePath == "/blog/view/") {
      setWhichActive("blogs");
    } else if (
      activePath == "/hackathons/" ||
      activePath == "/hackathon/view/"
    ) {
      setWhichActive("hackathons");
    } else if (activePath == "/faqs") {
      setWhichActive("faqs");
    } else if (activePath == "/contact") {
      setWhichActive("contact");
    } else if (activePath == "/teams") {
      setWhichActive("teams");
    }
  }, [pathname]);
  return (
    <>
      {(() => {
        if (topLoader) {
          return <Loader_top />;
        }
      })()}
      <Navbar
        collapseOnSelect
        expand="lg"
        className={scrollPosition > 0 ? "navbar scrolled" : "navbar"}
      >
        <Container>
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <Navbar.Brand className="club-name">
              <img src={logo} alt="" />
              AI CLUB
              {(() => {
                if (props.isLoggedIn === true) {
                  return "(Logged in)";
                }
              })()}
            </Navbar.Brand>{" "}
          </Link>{" "}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="navbar_container"
          >
            <Nav>
              <Link
                to="/"
                data-title="Home"
                className={
                  whichActive == "home" ? "navbar_links-active" : "navbar_links"
                }
              >
                {" "}
                Home{" "}
              </Link>{" "}
              <Link
                to="/blogs/1"
                data-title="Blogs"
                className={
                  whichActive == "blogs"
                    ? "navbar_links-active"
                    : "navbar_links"
                }
              >
                {" "}
                Blogs{" "}
              </Link>{" "}
              <Link
                to="/hackathons/1"
                data-title="Blogs"
                className={
                  whichActive == "hackathons"
                    ? "navbar_links-active"
                    : "navbar_links"
                }
              >
                {" "}
                Hackathons{" "}
              </Link>{" "}
              <Link
                to="/teams"
                data-title="Teams"
                className={
                  whichActive == "teams"
                    ? "navbar_links-active"
                    : "navbar_links"
                }
              >
                {" "}
                Teams{" "}
              </Link>{" "}
              <Link
                to="/contact"
                data-title="Contact"
                className={
                  whichActive == "contact"
                    ? "navbar_links-active"
                    : "navbar_links"
                }
              >
                {" "}
                Contact{" "}
              </Link>{" "}
              <Link
                to="/faqs"
                data-title="Contact"
                className={
                  whichActive == "faqs" ? "navbar_links-active" : "navbar_links"
                }
              >
                {" "}
                FAQ's{" "}
              </Link>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;
