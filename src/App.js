import React from "react";
import Header from "./components/Header";
import MarqueeSection from "./components/MarqueeSection";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import CustomTech from "./components/CustomTech";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import HeroSec from "./components/HeroSec";

import WhyChooseUs from "./features/whyChooseUs/WhyChooseUs";
import { CaseStudiesBoard } from "./features/caseStudies/CaseStudiesBoard";
import { ContactUs } from "./components/ContactUs";

function App() {
  return (
    <>
      <Header />
      <HeroSec />
      <MarqueeSection />
      <Services />
      <Explore />
      <WhyChooseUs />
      <CaseStudiesBoard />
      <AboutUs />
      <CustomTech />
      <FAQs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;