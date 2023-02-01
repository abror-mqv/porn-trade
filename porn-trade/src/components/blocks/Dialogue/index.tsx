import { motion, Variants } from "framer-motion";
import DialogueLeft from "../../fabrics/Dialogue/left";
import DialogueRight from "../../fabrics/Dialogue/right";
import styled from "styled-components";

function Dialogue() {
  const StyledDialogue = styled.div`
    max-width: 600px;
    overflow-x: hidden;
    margin-top: 40px;
    position: relative;
    @media screen and (min-width: 900px) {
      margin-left: 15%;
      max-width: 70%;
      border-left: 1px solid #01d695;
      border-right: 1px solid #01d695;
    }
  `;
  const lemon = Array.prototype;
  return (
    <StyledDialogue>
      {Chat.map((mes) => {
        return (
          <>
            {mes.left ? (
              <motion.div
                className="Message"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 1 }}
              >
                <motion.div variants={dialogueLeftVariants}>
                  <DialogueLeft>{mes.text}</DialogueLeft>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                className="Message"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 1 }}
              >
                <motion.div variants={dialogueRightVariants}>
                  <DialogueRight>{mes.text}</DialogueRight>
                </motion.div>
              </motion.div>
            )}
          </>
        );
      })}
    </StyledDialogue>
  );
}

export default Dialogue;

const dialogueLeftVariants: Variants = {
  offscreen: {
    x: -520,
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
    x: 520,
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

const Chat = [
  {
    left: true,
    text: "Вы зарабатываете на RingoTrade?",
  },
  {
    left: false,
    text: "Да, но но часто я ошибаюсь в прогнозах",
  },
  {
    left: true,
    text: "Мы разработали Искуственный интеллект, который со 100% вероятностью прогнозирует цифру",
  },
  {
    left: false,
    text: "И как ему удается прогнозировать с такой точностью?",
  },
  {
    left: true,
    text: "У нас огромная база данных, которую анализирует Искуственный интеллект на суперпроцессоре",
  },
  {
    left: false,
    text: "Как воспользоваться Искуственным интеллектом?",
  },
];
