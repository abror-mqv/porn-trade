import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem/index";
import AIPic from './ai.png'
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    <MenuItem i={0} key={0} data={data[0]} />
    <MenuItem i={1} key={1} data={data[1]} />
    <MenuItem i={2} key={2} data={data[2]} />
    <MenuItem i={3} key={3} data={data[0]} />
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];

const data = [
  {   
    picture: "ai.png",
    title: "Робот и акча",
    link: "string"
  },
  {
    picture: "stock.png",
    title: "Как пользоваться?",
    link: "string"
  },
  {
    picture: "dollar.png",
    title: "Как отмыть?",
    link: "string"
  }
]