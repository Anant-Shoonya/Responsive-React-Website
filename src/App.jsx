import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Title from "./components/Title";
import About from "./components/About";
import Campus from "./components/Campus";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {

  const [flag, setFlag] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Programs" title="What We Offer" />
        <Programs />
        <About turnFlag = {setFlag}/>
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus/>
        <Title subTitle="Testimonials" title="What Student Says" />
        <Testimonials/>
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact/>
        <Footer/>
        <VideoPlayer mediaPlayer = {flag} setMediaPlayer = {setFlag}/>
      </div>
      
    </div>
  );
};

export default App;
