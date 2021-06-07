import React, { useEffect, useRef, useState } from "react";

const useNotification = (title, options) => {
  useEffect(() => {
    const fireNotif = () => {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(title, options);
          } else {
            return;
          }
        });
      } else {
        new Notification(title, options);
      }
    };
    return fireNotif;
  }, []);
  if (!("Notification" in window)) {
    return;
  }
};

//Functional Component
const App = () => {
  const tirggerNotif = useNotification("Can I ask you?");
  return (
    <div>
      <h1>hello</h1>
      <button onClick={tirggerNotif}></button>
    </div>
  );
};

export default App;
