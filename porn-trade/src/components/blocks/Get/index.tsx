import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import ParticlesComponent from "../../particles";

const StyledIndex = styled.div`
  position: relative;
  overflow-x: hidden;
  .Title {
    margin: 0;
    width: 100%;
    text-align: center;
    padding: 30px;
    font-size: 18px;
  }
  .Prices {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    .Price {
      backdrop-filter: blur(4px);
      width: 90%;
      height: max-content;
      max-width: 400px;
      border-radius: 12px;
      border: #01d695 1.5px solid;
      z-index: 999999999 !important;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      p {
        text-align: center;
        font-size: 1.8rem;
        margin: 0;
        padding: 0;
        margin-top: 10%;
      }
      ul {
        position: relative;
        top: 0;
        padding: 0;
        padding: 8% 8% 8% 8%;
        width: 80%;
        margin: 0;
        font-size: 0.9rem;
        font-weight: 300;
        color: #ffffffa3;
        list-style: armenian;
      }
      a {
        position: relative;
        bottom: 0;
        height: 50px;
        background-color: #01d695;
        color: white;
        font-size: 20px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border-radius: 0px 0px 8px 8px;
        transition: 0.2s;
        width: 100%;
        text-decoration: none;
      }
      a:hover {
        background-color: white;
        color: #01d695;
        height: 70px;
      }
      .Digit {
        margin-top: 0;
        margin-bottom: 8%;
        font-size: 1rem;
        padding: 8px;
        background-color: #01d69634;
        border-radius: 6px;
        height: max-content;
        width: max-content;
      }
    }
  }
  @media screen and (min-width: 900px) {
    .Prices {
      flex-direction: row;
      align-items: flex-start;
      li{
        font-size: 20px !important;
      }
    }
    .Title{
      padding: 0;
      margin-top: 10;
    }
  }
  padding-bottom: 40px;
`;
function Index() {
  function toCart(cost: string, plan: string) {
    localStorage.setItem("cost", cost.toString());
    localStorage.setItem("plan", plan.toString());
  }
  return (
    <StyledIndex>
      <p className="Title">Откройте доступ к Lucky Bot</p>
      <ParticlesComponent theme="light" />
      <div className="Prices">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          className="Princes"
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.div variants={blobVariants} className="Price">
            <p>План "На час"</p>
            <ul>
              <li>- полный доступ к LuckyBot на 60 минут</li>
              <li>
                - 100% возврат денег в течение первых 5 минут после покупки в
                случае неполадок
              </li>
              <li>- техническа поддержка в режиме очереди</li>
              <li>- защита покупателя цифровго продукта</li>
            </ul>
            <p className="Digit">стоимость - 3.000 сом</p>
            <Link
              to="/payment"
              onClick={() => {
                toCart("3.000 сом", "На час");
              }}
            >
              Получить
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          className="Princes"
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.div variants={blobVariants} className="Price">
            <p>План "На день"</p>
            <ul>
              <li>- полный доступ к LuckyBot на 60 минут</li>
              <li>
                - 100% возврат денег в течение первых 5 минут после покупки в
                случае неполадок
              </li>
              <li>- техническа поддержка в режиме очереди</li>
              <li>- защита покупателя цифровго продукта</li>
            </ul>
            <p className="Digit">стоимость - 6.000 сом</p>
            <Link
              to="/payment"
              onClick={() => {
                toCart("6.000 сом", "На день");
              }}
            >
              Получить
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="Princes"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.div variants={blobVariants} className="Price">
            <p>План "На неделю"</p>
            <ul>
              <li>- полный доступ к LuckyBot на 60 минут</li>
              <li>
                - 100% возврат денег в течение первых 5 минут после покупки в
                случае неполадок
              </li>
              <li>- техническа поддержка в режиме очереди</li>
              <li>- защита покупателя цифровго продукта</li>
            </ul>
            <p className="Digit">стоимость - 16.000 сом</p>
            <Link
              to="/payment"
              onClick={() => {
                toCart("16.000 сом", "На неделю");
              }}
            >
              Получить
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </StyledIndex>
  );
}

export default Index;

const blobVariants: Variants = {
  offscreen: {
    x: -500,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
