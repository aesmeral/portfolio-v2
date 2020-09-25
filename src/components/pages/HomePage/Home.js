import React from "react";
import HeroSection from "../HeroSection";
import About from "./AboutPage";
import { HomeObjOne, HomeObjTwo } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...HomeObjOne} />
    </>
  );
}

export default Home;
