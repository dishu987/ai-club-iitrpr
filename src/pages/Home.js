import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CSS/home.css";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import slide_data from "./DATA/home";
import Blog_card from "./blog_card";
import logo_ai from "./IMAGES/logo-ai.jpeg";
import ai_header from "./IMAGES/ai-header.jpg";
import Testimonial from "./testimonials";
import { useState, useEffect } from "react";
import Loader from "./loader-line";
import Events from "./events";

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  }, []);
  if (showContent) {
    return (
      <>
        <div
          className="wrapper_header"
          style={{
            backgroundImage: `url(${ai_header})`,
          }}
        >
          <div className="main-header-home">
            <div className="header-img-home">
              <img src={logo_ai} alt="" />
            </div>
            <div className="header-content-home">
              <h1>Welcome, to</h1>
              <div></div>
              <p>AI-Club, IIT Ropar</p>
              <Link to={`/about_us`}> About Us </Link>{" "}
            </div>
          </div>
        </div>
        <Events />
        <div className="blog-section">
          <div className="section-title">
            <h1>Blogs</h1>
          </div>
          <div className="blogs">
            <Blog_card number_of_cards={3} page={1} link="/blog/view/" />{" "}
          </div>
          <Link to={`/blogs/1`}> Expore More </Link>
        </div>
        <div className="blog-section">
          <div className="section-title">
            <h1>Hackathon's</h1>
          </div>
          <div className="blogs">
            <Blog_card number_of_cards={3} page={1} link="/hackathon/view/" />{" "}
          </div>
          <Link to={`/hackathons/1`}>Explore More</Link>
        </div>
        <div className="myContainer">
          <h1>Testimonial,</h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{
            zIndex: "0",
          }}
        >
          {slide_data.map((d) => (
            <SwiperSlide key={d.id}>
              <Testimonial />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  } else {
    return (
      <>
        <Loader />
      </>
    );
  }
};

export default Home;
