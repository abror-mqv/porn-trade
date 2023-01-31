import styled from "styled-components";
import TitleOne from "../../fabrics/Title-1";
import TitleTwo from "../../fabrics/Title-2";
import { motion, Variants } from "framer-motion";
import Results from "../../fabrics/Results";
import RunLine from "../../fabrics/RunLine";

export default function Main() {
  const StyledMain = styled.main`
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 10;
    position: relative;
    .Blub {
      height: 350px;
      width: 100vw;
      /* margin-left: -20px; */
      z-index: 9000000;

    }
    .FMC {
      margin-bottom: 10px;
    }
    .Abs {
      position: absolute;
    }
    .Results {
      width: 100%;
      height: max-content;
      margin-bottom: 80px;
      margin-top: 30px;
    }
    .Title{
      max-width: 80%;
      margin-left: 10%;
    }
  `;
  return (
    <StyledMain className="top">
      <RunLine />
      <motion.div
        className="FMC"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div className="Blub" variants={blobVariants}></motion.div>
        <motion.div variants={titleVariants} className="Title">
          <TitleOne className="Title">LUCKY BOT - AI RINGOTRADE PREDICTOR</TitleOne>
        </motion.div>
        <motion.div variants={titleVariants}>
          <TitleTwo>Схема торговли на RingoTrade</TitleTwo>
        </motion.div>
      </motion.div>
      <div className="Results">
        <Results />
      </div>
    </StyledMain>
  );
}

const blobVariants: Variants = {
  offscreen: {
    y: -300,
    rotate: 180,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.7,
      duration: 1.8,
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
