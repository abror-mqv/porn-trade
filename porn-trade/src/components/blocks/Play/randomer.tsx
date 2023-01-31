import React from "react";

function Randomer() {
  const [text, set] = React.useState(0);
  const [notification, setNotification] = React.useState(false);
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  React.useEffect(() => {
    setTimeout(() => {
      set(getRandomInt(36));
      if (notification) {
        alert(text);
      }
    }, 3000);
  }, [text]);
  return (
    <>
      <div className="Game">
        <h2>В этот раз играет</h2>
        <h1>{text}</h1>
      </div>
      <div
        onClick={() => {
          setNotification(!notification);
        }}
        className="Not"
      >
        <img
          src={`/media/notification${notification ? "-on" : ""}.png`}
          alt=""
        />
        Уведомления {notification ? "включены" : "выключены"}
      </div>
    </>
  );
}

export default Randomer;
