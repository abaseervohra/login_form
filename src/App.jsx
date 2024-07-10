import React, { useState } from "react";
import BulbOn from "./assets/Bulbon.jpeg"
import BulbOff from './assets/Bulbof.jpg';
import "./App.css";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import listItems from "./list";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
    </div>
  );
};

export default App;