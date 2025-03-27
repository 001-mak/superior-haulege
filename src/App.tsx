// import './App.css'
import HeroSection from "./components/Hero Section/HeroSection";
import Navbar from "./components/Navbar";
import WhatWeHaul from "./components/WhatWeHaul/WhatWeHaul";
import Services from "./components/Services/Services";
import Partners from "./components/Partners/Partners";
import Testimonials from "./components/Testimonial/Testimonials";
import Footer from "./components/Footer/Footer";
import About from "./components/about/About";
// import Keypoints from "./components/Keypoints/Keypoints";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <WhatWeHaul></WhatWeHaul>
      <Services/>
      {/* <Keypoints></Keypoints> */}
      <Partners></Partners>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}

export default App;
