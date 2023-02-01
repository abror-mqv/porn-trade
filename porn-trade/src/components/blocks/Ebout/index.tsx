import React from "react";
import styled from "styled-components";
import ParticlesComponent from "../../particles";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

const StyledEbout = styled.div`
  position: relative;
  a:visited {
    color: #bcffeb;
    text-decoration: none;
  }
  .Title {
    .division {
      height: 19px;
    }
    h2 {
      margin: 0;
      background-color: #6d8aa388;
      margin-left: 82px;
      width: fit-content;
      text-align: end;
      padding: 7px 10px;
      font-weight: 300;
      border-radius: 5px;
      max-width: 300px;
      backdrop-filter: blur(3px);
    }
  }
  p {
    margin: 0;
    font-size: 4.4vh;
    margin-bottom: 12px;
    font-weight: 900;
    letter-spacing: 5px;
  }
  .Steps {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 40px;
    height: calc(100vh - 112px);
    max-width: 600px;
    h3 {
      background-color: #6d8aa388;
      padding: 11px 21px 14px 17px;
      font-weight: 300;
      border-radius: 0px 8px 8px 0px;
      width: 20px;
      margin-left: 0;
      text-align: end;
      height: 22px;
      margin-top: 6px;
      backdrop-filter: blur(3px);
      font-size: 1.4rem;
      font-family: "Plaster", cursive;
    }
    .Step_One {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Info {
      width: 80%;
      height: max-content;
      background-color: #6d8aa326;
      backdrop-filter: blur(8px);
      padding: 18px 12px;
      border-radius: 4px;
      font-weight: 100;
      color: #ffffffb0;
      line-height: 1.3rem;
      max-width: 450px;
      font-size: 2.2vh;
      border: #01d695 1px solid;
    }
    .One {
    }
    .Win {
      border: #01d695 1px solid;
      /* color: #01d695; */
      font-size: 1rem;
      -webkit-box-shadow: 0px 0px 29px -12px rgba(1, 214, 149, 1);
      -moz-box-shadow: 0px 0px 29px -12px rgba(1, 214, 149, 1);
      box-shadow: 0px 0px 29px -12px rgba(1, 214, 149, 1);
    }
  }
  .parag {
    margin-bottom: 20px;
    height: 130px;
  }
  a:active {
    color: #bcffeb;
  }
  a {
    color: #bcffeb;
  }
  .ChoosePlanButton {
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
    transition: 0.2;
  }
  .ChoosePlanButton:hover {
    background-color: white;
    color: #01d695;
    font-weight: 900;
  }
  .MARG {
    height: 80px;
  }
`;
function Index() {
  return (
    <StyledEbout>
      <ParticlesComponent theme="light" />
      <div className="Title">
        <div className="division"></div>
        <h2>Инструкция к Lucky Bot</h2>
      </div>
      <div className="Steps">
        <div className="Step_One">
          <div className="Info One">
            <div className="parag">
              <p>выберите план:</p>
              Сперва выберите подходящий вам тариф из{" "}
              <Link to="get"> этого списка</Link>
            </div>
            <div className="parag">
              <p>оплата:</p>
              Оплатите ранее выбранный тариф любым удобным{" "}
              <Link to="payment"> здесь</Link>. Следуйте инструкциям оплаты в
              зависимости от выбранного вами способа
            </div>
            <div className="parag">
              <p>выигрывайте:</p>
              После успешной оплаты вам открывается доступ к боту на этом сайте,
              который будет каждый раз показывать число, которое выпадет
              следующим. Делать деньги уже за вами)
            </div>
          </div>
        </div>
      </div>
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
      <div className="MARG"></div>
    </StyledEbout>
  );
}

export default Index;

const blobVariants: Variants = {
  offscreen: {
    x: -300,
    rotate: 0,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
};
