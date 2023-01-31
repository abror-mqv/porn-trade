import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem/index";
import { Link } from "react-router-dom";
const variants = {
  open: {
    y: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    y: -400,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle }: any) => (
  <motion.ul variants={variants} onClick={toggle}>
    <MenuItem i={0} key={0} data={data[0]} onClick={toggle} />
    <MenuItem i={1} key={1} data={data[1]} onClick={toggle} />
    <MenuItem i={2} key={2} data={data[2]} onClick={toggle} />
    <MenuItem i={3} key={3} data={data[3]} onClick={toggle} />
  </motion.ul>
);

const data = [
  {
    picture: "ai.png",
    title: "Робот и акча",
    link: "/",
  },
  {
    picture: "stock.png",
    title: "Как пользоваться?",
    link: "/about",
  },
  {
    picture: "dollar.png",
    title: "Как приобрести",
    link: "/get",
  },
  {
    picture: "rocket.png",
    title: "Играть",
    link: "/play"
  }
];
