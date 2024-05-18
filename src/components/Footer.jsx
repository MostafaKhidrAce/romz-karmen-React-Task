import styles from "../styles/footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.sec_container}>
      <div className={styles.container}>
        <div className={styles.about_sec}>
          <h4>ABOUT THE SHOP</h4>
          <p>
            An accessories store offers a wide range of items that complement
            and enhance one's appearance or lifestyle
          </p>
        </div>
        <div>
          <h4>MENU</h4>
          <div className={styles.footer_links}>
            <a href="#">Home</a>
            <a href="#">Necklaces</a>
            <a href="#">Braceletes</a>
            <a href="#">Rings</a>
            <a href="#">Earrings</a>
            <a href="#">Watches</a>
          </div>
        </div>
        <div>
          <h4>SUPPORT</h4>
          <div className={styles.footer_links}>
            <a href="#">Frequently Asked Qustion</a>
            <a href="#">Returns and refunds</a>
            <a href="#">CGV</a>
            <a href="#">Legal Notice</a>
            <a href="#">Track my order</a>
          </div>
        </div>
        <div>
          <h4>REACHABLE 24/7</h4>
          <p>
            A question? we can be reached by email 24/7 do not hesitate to send
            us a message for any request
          </p>
          <a href="#" className={styles.main_link}>
            Karmen.com
          </a>
        </div>
      </div>
    </footer>
  );
}
