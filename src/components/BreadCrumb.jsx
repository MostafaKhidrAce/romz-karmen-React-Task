import styles from "../styles/breadCrumb.module.css";
export default function BreadCrumb() {
  return (
    <div className={styles.container}>
      <p>Home</p>
      <p> &gt; </p>
      <p>Categories</p>
      <p> &gt; </p>
      <p className={styles.active_link}>Rings</p>
    </div>
  );
}
