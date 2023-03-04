import styles from "@/styles/Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Goraku</h1>
      <input className={styles.searchInput} type="text" />
    </div>
  );
};

export default HomePage;
