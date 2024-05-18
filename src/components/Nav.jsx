import React, { useState } from "react";
import styles from "../styles/nav.module.css";
export default function Nav() {
  const [togglebtn, setTogglebtn] = useState(false);
  const toggleHandler = () => {
    setTogglebtn(!togglebtn);
  };
  return (
    <nav className={styles.container}>
      <div>
        <img src="/src/assets/Group 82.png" alt="logo" />
      </div>
      <div className={styles.input_cont_r}>
        <div className={togglebtn ? styles.input_cont_s : styles.input_cont}>
          <input type="text" placeholder="Search for everything" />
          <button>
            <img src="/src/assets/Vector.svg" alt="..." />
          </button>
        </div>
        <button onClick={toggleHandler} className={styles.togglebtn}>
          <img src="/src/assets/Vector.svg" alt="..." />
        </button>
      </div>
      <div className={styles.lang_btn}>
        <button>EN/العربيه</button>
      </div>
      <div className={styles.nav_icons}>
        <img src="/src/assets/Vector.png" alt="..." />
        <img src="/src/assets/Vector (1).png" alt="..." />
        <img src="/src/assets/Vector (2).png" alt="..." />
      </div>
    </nav>
  );
}
