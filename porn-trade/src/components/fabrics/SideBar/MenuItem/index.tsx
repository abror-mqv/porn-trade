import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, data }: any) => {
  const style = { border: `2px solid ${colors[i]}` };
  const StyledMenuItem = styled.div`
    background-image: url(${`/media/${data.picture}`});
    background-position: center;
    background-size: 32px;
    background-repeat: no-repeat;
  `;
  const StyledFuckingText = styled.p`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-weight: 600;
    padding-bottom: 2px;
    font-size: 14px;
  `;
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <StyledMenuItem
        className="icon-placeholder"
        style={style}
      ></StyledMenuItem>
      <StyledFuckingText className="text-placeholder" style={style}>
        {data.title}
      </StyledFuckingText>
    </motion.li>
  );
};
