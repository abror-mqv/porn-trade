import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

export default function HowTo() {
  const StyledAbout = styled.div`
    .FMC {
      height: 200px;
      margin-top: 66px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 36px;
      min-height: 400px;
      a {
        display: block;
        position: relative;
        width: 80%;
        margin-left: 10%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 1px;
        -webkit-box-shadow: 1px 1px 7px 0 rgb(0 0 0 / 16%);
        box-shadow: 1px 1px 7px 0 rgb(0 0 0 / 16%);
        border-radius: 4px;
        text-decoration: none;
        font-weight: 400;
        font-size: 1rem;
        border: #01d695 1px solid;
        background-color: #3f505f;
        color: #01d695;
        font-size: 1.2rem;
        -webkit-box-shadow: 0px 0px 29px -12px rgba(1, 214, 149, 1);
        -moz-box-shadow: 0px 0px 29px -12px rgba(1, 214, 149, 1);
        box-shadow: 0px 0px 29px -12px rgba(1, 214, 149, 1);
        background-color: rgb(94 109 129 / 35%);
        backdrop-filter: blur(2px);
        transition: 0.2s;
      }
      a:hover{
        background-color: white;
        color: #01d695;
        font-weight: 900;
      }
      .ChoosePlanButton {
        background-color: #3f505f;
        background-color: rgb(94 109 129 / 35%);
        backdrop-filter: blur(2px);
      }
      a:visited {
        color: #01d695;
        text-decoration: none;
      }
    }
  `;
  return (
    <StyledAbout>
      <div className="FMC">
        <motion.div
          className="FMCf"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.div variants={blobVariants}>
            <Link to="/about">Как воспользоваться?</Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="FMCf"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.div variants={blobVariants}>
            <Link to="/get" className="ChoosePlanButton">
              Выбрать план
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </StyledAbout>
  );
}

const blobVariants: Variants = {
  offscreen: {
    y: 300,
    rotate: 0,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const titleVariants: Variants = {
  offscreen: {
    x: -300,
    rotate: 5,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.0,
    },
  },
};
