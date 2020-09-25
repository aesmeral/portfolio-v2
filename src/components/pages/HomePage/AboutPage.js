import React from "react";
import About from "../About";
import { HomeObjTwo } from "./Data";

function AboutPage() {
  return (
    <>
      <About {...HomeObjTwo} />
    </>
  );
}

export default AboutPage;
