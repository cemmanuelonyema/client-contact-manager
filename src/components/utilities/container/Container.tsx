import styles from "./Container.module.scss";

export const Container = ({ children }: any) => {
  return <div className={styles.container}>{children}</div>;
};
