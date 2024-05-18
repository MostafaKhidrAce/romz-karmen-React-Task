import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/filterSec.module.css";

export default function FilterSec() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.sec_container}>
      <div className={styles.container}>
        <div className={styles.coc}>
          <select name="All Categeries" id="a">
            <option value="All Categeries">All Categeries</option>
          </select>
          <div className={styles.burger} onClick={toggleMenu}>
            ☰
          </div>
        </div>
        <div className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
          <Link to="/">Trending</Link>
          <Link to="/rings">Rings</Link>
          <Link to="/necklaces">Necklaces</Link>
          <Link to="/watches">Watches</Link>
          <Link to="/earrings">Earrings</Link>
          <Link to="/braceletes">Braceletes</Link>
          <Link to="/anklet">Anklet</Link>
          <Link to="/noseraings">nose raings</Link>
        </div>
      </div>
    </div>
  );
}
