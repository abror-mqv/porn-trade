import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const marqueeVariants = {
  animate: {
    x: [0, -1350],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const RunLine = () => {
  const StyledRunLine = styled.div`
    position: relative;
    display: block;
    top: 80px;
    margin-bottom: -200px;
    font-family: 'Plaster', cursive;
    .marquee {
      width: 120vw;
      max-width: 120%;
      height: 206px;
      /* overflow-x: hidden; */
      transform: rotate(-20deg);
      .track {
        white-space: nowrap;
        will-change: transform;
      }
      .track > h3 {
        margin: 20px 0;
        font-size: 3rem;
        /* font-family: Antonio; */
        /* -webkit-text-fill-color: rgba(255, 255, 255, 0);
        -webkit-text-stroke-width: 2px; */
        /* -webkit-text-stroke-color: #f4965c4c; */
        color: #ffffff59;
        text-transform: uppercase;
      }
    }
  `;
  return (
    <StyledRunLine>
      <div className="marquee">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h3>
            LETS HACK THIS LIFE LETS HACK THIS LIFE LETS HACK THIS LIFE LETS
            HACK THIS LIFE LETS HACK THIS LIFE LETS HACK THIS LIFE
          </h3>
        </motion.div>
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h3>
            LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT LUCKY BOT 
          </h3>
        </motion.div>
      </div>
    </StyledRunLine>
  );
};

export default RunLine;
