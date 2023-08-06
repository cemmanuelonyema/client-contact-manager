import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./signup.module.scss";

const Signup = () => {
  //user states
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = user;
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    // <section className={styles.signUp}>
    //   <div className={`${styles.signContainer} container`}>
    //     <div className={styles.formContainer}>
    //       <div className={styles.formHeader}>

    //       </div>

    //       <form onSubmit={handleSubmit} className="form">

    //         <div className={styles.formFooter}>
    //           <input className={styles.formBtn} type="submit" value="Sign up" />

    //           <span>
    //             Have an account already? <Link to="/login">Login</Link>
    //           </span>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </section>

    <section className={styles.signUp}>
      <div className={styles.signUpContainer}>
        <div className={styles.signUpHeader}>
          <h1>Welcome </h1>
          <p>Sign up with Contact Manager</p>
        </div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor=" username">
              username
            </label>
            <input
              className={styles.input}
              ref={inputRef}
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="your username"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="youraddress@mail.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor=" password">
              Password
            </label>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="your password"
              required
            />
          </div>
          <div className={styles.signUpFooter}>
            <input className={styles.formBtn} type="submit" value="Sign up" />
            <span>
              Don't' have an account? <Link to="/login">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
