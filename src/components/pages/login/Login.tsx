import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";

const Login = () => {
  //user states
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUser({
      username: "",
      password: "",
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className={styles.signUp}>
      <div className={`${styles.signContainer} container`}>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h1>Welcome back !</h1>
            <p>Continue with Contact Manager</p>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className={styles.formGroup}>
              <label htmlFor="username">Username</label>
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

            <div className={styles.formFooter}>
              <input className={styles.formBtn} type="submit" value="Login" />

              <span>
                Don't' have an account? <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
