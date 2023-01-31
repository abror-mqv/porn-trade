import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Ment from "./Ment";
import { motion, Variants } from "framer-motion";

const StyledPayment = styled.div`
  position: relative;
  padding-top: 14px;
  .Status {
    position: absolute;
    width: 45%;
    height: max-content;
    max-width: 200px;
    border-radius: 12px;
    border: #01d695 1.5px solid;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    margin-left: 44%;
    padding: 12px;
    font-size: 1rem;
    line-height: 28px;
    top: 11px;
    right: 15px;
    .ID {
      color: white;
      font-weight: 200;
      font-size: 1.2rem;
      letter-spacing: 1px;
    }
    p,
    a {
      display: flex;
      justify-content: space-between;
      width: 100%;
      text-decoration: none;
    }
    a {
      text-decoration: underline;
      font-weight: 300;
      text-align: end;
      display: flex;
      justify-content: flex-end;
      font-size: 0.8rem;
    }
    a {
      p {
        width: fit-content;
      }
    }
    a:active {
      color: #bec0c2;
    }
    a:visited {
      color: #bec0c2;
    }
  }
  p {
    margin: 0;
    text-align: center;
  }
  h4 {
    margin-top: 160px;
    width: 90%;
    margin-left: 5%;
    text-align: center;
    font-size: 1.5rem;
  }
  .Payments {
    width: 90%;
    height: max-content;
    margin-left: 5%;
    margin-top: 40px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    .Prices{
      width: 90%;
      max-width: 500px;
    }
  }
`;

function Index() {
  const history = useHistory();
  const [id, setId] = React.useState(0);
  const [cost, setCost] = React.useState(0);
  const [plan, setPlan] = React.useState(null);
  React.useEffect(() => {
    if (localStorage.id !== undefined) {
      setId(localStorage.id);
    } else {
      const new_id = Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem("id", new_id.toString());
      setId(localStorage.id);
    }
    if (localStorage.cost !== undefined) {
      setCost(localStorage.cost);
    } else {
      history.push("/get");
    }
    if (localStorage.plan !== undefined) {
      setPlan(localStorage.plan);
    } else {
      history.push("/get");
    }
  }, []);

  return (
    <StyledPayment>
      <div className="Status">
        <p>
          <span> Ваш ID: </span> <span className="ID">{id}</span>
        </p>
        <p>
          <span>Счет:</span> <span> {cost}</span>
        </p>
        <p>
          <span>План:</span> <span> {plan}</span>
        </p>
        <Link to="/get">
          <p>Изменить план</p>
        </Link>
      </div>
      <h4>Выберите способ оплаты:</h4>
      <div className="Payments">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          className="Prices"
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.div variants={blobVariants} className="Price">
            <Ment
              char="Telegram Bot"
              ico="telegram.png"
              link="telegram-bot"
              color="#ffffffb6"
              textColor="#000000"
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          className="Prices"
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.div variants={blobVariants} className="Price">
            <Ment
              char="О! Деньги"
              ico="oCash.png"
              link="ocash"
              color="#ffffffb6"
              textColor="#000000"
            />
          </motion.div>
        </motion.div>
      </div>
    </StyledPayment>
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
