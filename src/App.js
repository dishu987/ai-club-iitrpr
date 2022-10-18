// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Hackathons from "./pages/Hackathons";
import NoPage from "./pages/NoPage";
import About_us from "./pages/about_us";
import View_blog from "./pages/view_blog";
import View_Hackathon from "./pages/view_hackathon";
import Footer from "./pages/Footer";
import FaQs from "./pages/faqs";
import Loader from "./pages/loader";
import ContactUs from "./pages/contact";
import { useState, useEffect } from "react";
import ScrollToTop from "./scroll-top";
import Team_Card from "./pages/team-card";
import Login from "./pages/login";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 1000);
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/api/verification", {
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          setIsLoggedIn(true);
          console.log("logged in");
        } else {
          setIsLoggedIn(false);
          console.log("not logged in");
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        console.log("Error Occured");
      });
  }, []);
  if (showContent) {
    return (
      <>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout isLoggedIn={isLoggedIn} />}>
              <Route index element={<Home />} />{" "}
              <Route
                path="blogs/:page"
                element={<Blogs isLoggedIn={isLoggedIn} />}
              />{" "}
              <Route
                path="hackathons/:page"
                element={<Hackathons isLoggedIn={isLoggedIn} />}
              />{" "}
              <Route
                path="hackathon/view/:id"
                element={<View_Hackathon isLoggedIn={isLoggedIn} />}
              />{" "}
              <Route
                path="about_us"
                element={<About_us isLoggedIn={isLoggedIn} />}
              />{" "}
              <Route
                path="blog/view/:id"
                element={<View_blog isLoggedIn={isLoggedIn} />}
              />{" "}
              <Route path="faqs" element={<FaQs isLoggedIn={isLoggedIn} />} />{" "}
              <Route
                path="contact"
                element={<ContactUs isLoggedIn={isLoggedIn} />}
              />{" "}
              <Route
                path="teams"
                element={<Team_Card isLoggedIn={isLoggedIn} />}
              />{" "}
              <Route path="login" element={<Login isLoggedIn={isLoggedIn} />} />{" "}
              <Route path="*" element={<NoPage isLoggedIn={isLoggedIn} />} />{" "}
            </Route>{" "}
          </Routes>{" "}
          <Footer isLoggedIn={isLoggedIn} />
        </BrowserRouter>{" "}
      </>
    );
  } else {
    return <Loader />;
  }
}

export default App;
