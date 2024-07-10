import React from "react";
import styles from "./Login.module.css"

const Login = ({toggleForm}) => {
  return (
    <>
      <div className={styles.loginSection}>
        <div className={styles.container}>
          <div className={styles.login}>
            <h2>Log in to Facebook</h2>
            <input type="text" placeholder="Enter the email address" />
            <input type="password" placeholder="Password" />
            <button className={styles.btn}>Log in</button>
          
            <a href="#signup" onClick={toggleForm}>
              Sign up
            </a>
            
           
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
