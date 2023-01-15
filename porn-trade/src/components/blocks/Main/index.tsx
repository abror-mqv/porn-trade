import React from "react";
import styled from "styled-components";
import TitleOne from "../../fabrics/Title-1";
import TitleTwo from "../../fabrics/Title-2";
import { motion, Variants } from "framer-motion";
import Results from "../../fabrics/Results";
import RunLine from "../../fabrics/RunLine";
import DialogueLeft from "../../fabrics/Dialogue/left";
import DialogueRight from "../../fabrics/Dialogue/right";

export default function Main() {
  const StyledMain = styled.main`
    height: max-content;
    overflow-x: hidden;
    .Blub {
      height: 350px;
      width: 100vw;
      margin-left: -20px;
      z-index: 1000000;
    }
    .FMC {
      margin-bottom: 80px;
    }
    .Abs{
      position: absolute;
    }
  `;
  return (
    <StyledMain>
      <RunLine/>
      <motion.div
        className="FMC"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div className="Blub" variants={blobVariants}></motion.div>
        <motion.div variants={titleVariants}>
          <TitleOne>LUCKY BOT - AI RINGOTRADE PREDICTOR</TitleOne>
        </motion.div>
        <motion.div variants={titleVariants}>
          <TitleTwo>Схема торговли на RingoTrade</TitleTwo>
        </motion.div>
      </motion.div>

      <motion.div
        className="Message"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }}
      >
        <motion.div variants={dialogueLeftVariants}>
          <DialogueLeft>Вы зарабатываете на RingoTrade?</DialogueLeft>
        </motion.div>
      </motion.div>
      <motion.div
        className="Message"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }}
      >
        <motion.div variants={dialogueRightVariants}>
          <DialogueRight>Да, но но часто я ошибаюсь в прогнозах</DialogueRight>
        </motion.div>
      </motion.div>
      <motion.div
        className="Message"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }}
      >
        <motion.div variants={dialogueRightVariants}>
          <DialogueRight>Вот бы кто то меня трахнул</DialogueRight>
        </motion.div>
      </motion.div>
      <motion.div
        className="Message"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }}
      >
        <motion.div variants={dialogueLeftVariants}>
          <DialogueLeft>
            Мы разработали Искуственный интеллект, который со 100% вероятностью
            прогнозирует цифру
          </DialogueLeft>
        </motion.div>
      </motion.div>
      <motion.div
        className="Message"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }}
      >
        <motion.div variants={dialogueRightVariants}>
          <DialogueRight>
            И как ему удается прогнозировать с такой точностью?
          </DialogueRight>
        </motion.div>
      </motion.div>
      <motion.div
        className="Message"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }}
      >
        <motion.div variants={dialogueLeftVariants}>
          <DialogueLeft>
            У нас огромная база данных, которую анализирует Искуственный
            интеллект на суперпроцессоре
          </DialogueLeft>
        </motion.div>
      </motion.div>
      <motion.div
        className="Message"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }}
      >
        <motion.div variants={dialogueRightVariants}>
          <DialogueRight>
            Как воспользоваться Искуственным интеллектом?
          </DialogueRight>
        </motion.div>
      </motion.div>
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

const dialogueLeftVariants: Variants = {
  offscreen: {
    x: -200,
    rotate: 0,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.0,
    },
  },
};

const dialogueRightVariants: Variants = {
  offscreen: {
    x: 200,
    rotate: 0,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.0,
    },
  },
};
