import React from "react";
import Dialogue from "../blocks/Dialogue";
import { Header } from "../blocks/Header";
import Main from "../blocks/Main";
import Progress from "../fabrics/Progress";
import { Link } from "react-router-dom";
import HowTo from "../blocks/HowTo";
import ParticlesComponent from "../particles";


function Index() {
  return (
    <>
      <ParticlesComponent theme="light"/>
      <Main />
      <Dialogue />
      <HowTo/>
    </>
  );
}

export default Index;
