import React from 'react';
import styles from './Signup.module.css';

const Signup = ({toggleForm}) => {
  return (
    <div className={styles.signupSection}>
      <div className={styles.container}>
        <div className={styles.signup}>
          <h2>Sign up for Facebook</h2>
          <input type="text" placeholder="Enter your name" />
          <input type="text" placeholder="Enter your email address" />
          <input type="password" placeholder="Password" />
          <button className={styles.btn}>Sign up</button>
          <p>
            Already have an account?{' '}
            <a href="#login" onClick={toggleForm}>
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
