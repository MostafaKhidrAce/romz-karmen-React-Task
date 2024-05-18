import { useLocation } from "react-router-dom";
import styles from "../styles/listSection.module.css";

const switchRender = (path) => {
  switch (path) {
    case "":
      return {
        data: [
          {
            id: 1,
            title: "Gold Rings",
            rate: 5,
            price: 1000,
            img: "assets/products/Gold Rings.png",
          },
          {
            id: 2,
            title: "Heart Necklaces",
            rate: 5,
            price: 7000,
            img: "assets/products/Heart Necklaces.png",
          },
          {
            id: 3,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 5000,
            img: "assets/products/Small Hoop Earrings.png",
          },
          {
            id: 4,
            title: "Silver watch",
            rate: 5,
            price: 1000,
            img: "assets/products/Silver watch.png",
          },
          {
            id: 5,
            title: "Gold Braceletes",
            rate: 5,
            price: 7000,
            img: "assets/products/Gold Braceletes.png",
          },
          {
            id: 6,
            title: "Gold Rings",
            rate: 5,
            price: 5000,
            img: "assets/products/Gold Rings.png",
          },
          {
            id: 7,
            title: "Gold Rings",
            rate: 5,
            price: 1000,
            img: "assets/products/Gold Rings.png",
          },
          {
            id: 8,
            title: "Gucci watch",
            rate: 5,
            price: 7000,
            img: "assets/products/Gucci watch.png",
          },
          {
            id: 9,
            title: "Gold Rings",
            rate: 5,
            price: 5000,
            img: "assets/products/Gold Rings.png",
          },
          {
            id: 10,
            title: "Gold Rings",
            rate: 5,
            price: 1000,
            img: "assets/products/Gold Rings.png",
          },
          {
            id: 11,
            title: "Silver Braceletes",
            rate: 5,
            price: 7000,
            img: "assets/products/Silver Braceletes.png",
          },
          {
            id: 12,
            title: "Gold watch",
            rate: 5,
            price: 5000,
            img: "assets/products/Gold watch.png",
          },
          {
            id: 13,
            title: "Silver Rings",
            rate: 5,
            price: 1000,
            img: "assets/products/Silver Rings.png",
          },
          {
            id: 14,
            title: "Silver Rings",
            rate: 5,
            price: 7000,
            img: "assets/products/Silver Rings.png",
          },
          {
            id: 15,
            title: "Silver Braceletes",
            rate: 5,
            price: 5000,
            img: "assets/products/Silver Braceletes.png",
          },
        ],
      };
    case "rings":
      return {
        options: {
          hasOptions: true,
          options: [
            { type: "Silver Rings", img: "assets/categories/rings/silver.png" },
            { type: "Gold Rings", img: "assets/categories/rings/gold.png" },
            { type: "Stacking Rings", img: "assets/categories/rings/set.png" },
            {
              type: "Gemstone Rings",
              img: "assets/categories/rings/pearl.png",
            },
          ],
        },
        data: [
          {
            id: 1,
            title: "Gold Rings",
            rate: 5,
            price: 1000,
            img: "assets/products/Rectangle 11.png",
          },
          {
            id: 2,
            title: "Gold Rings",
            rate: 5,
            price: 7000,
            img: "assets/products/Gold Rings.png",
          },
          {
            id: 3,
            title: "Gold Rings",
            rate: 5,
            price: 5000,
            img: "assets/products/Rectangle 11.png",
          },
          {
            id: 4,
            title: "Gold Rings",
            rate: 5,
            price: 1000,
            img: "assets/products/Gold Rings.png",
          },
          {
            id: 5,
            title: "Gold Rings",
            rate: 5,
            price: 7000,
            img: "assets/products/Rectangle 11.png",
          },
          {
            id: 6,
            title: "Gold Rings",
            rate: 5,
            price: 5000,
            img: "assets/products/Gold Rings.png",
          },
          {
            id: 7,
            title: "Gold Rings",
            rate: 5,
            price: 1000,
            img: "assets/products/Rectangle 11.png",
          },
          {
            id: 8,
            title: "Silver Rings",
            rate: 5,
            price: 7000,
            img: "assets/products/Silver Rings.png",
          },
          {
            id: 9,
            title: "Silver Rings",
            rate: 5,
            price: 5000,
            img: "assets/products/Silver Rings.png",
          },
          {
            id: 10,
            title: "Silver Rings",
            rate: 5,
            price: 1000,
            img: "assets/products/Rectangle 11.png",
          },
          {
            id: 11,
            title: "Gold Rings",
            rate: 5,
            price: 7000,
            img: "assets/products/Gold Rings.png",
          },
          {
            id: 12,
            title: "Gold Rings",
            rate: 5,
            price: 5000,
            img: "assets/products/Gold Rings.png",
          },
          {
            id: 13,
            title: "Silver Rings",
            rate: 5,
            price: 1000,
            img: "assets/products/Silver Rings.png",
          },
          {
            id: 14,
            title: "Gold Rings",
            rate: 5,
            price: 7000,
            img: "assets/products/Silver Rings.png",
          },
          {
            id: 15,
            title: "Silver Rings",
            rate: 5,
            price: 5000,
            img: "assets/products/Silver Rings.png",
          },
        ],
      };
    case "necklaces":
      return {
        options: {
          hasOptions: true,
          options: [
            {
              type: "Silver Necklaces",
              img: "assets/categories/rings/silver.png",
            },
            { type: "Gold Necklaces", img: "assets/categories/rings/gold.png" },
            { type: "Necklaces Set", img: "assets/categories/rings/set.png" },
            {
              type: "Necklaces Pearl",
              img: "assets/categories/rings/pearl.png",
            },
          ],
        },
        data: [
          {
            id: 1,
            title: "Heart Necklaces",
            rate: 5,
            price: 1000,
            img: "assets/products/Rectangle 11 (1).png",
          },
          {
            id: 2,
            title: "Heart Necklaces",
            rate: 5,
            price: 7000,
            img: "assets/products/Rectangle 12.png",
          },
          {
            id: 3,
            title: "Heart Necklaces",
            rate: 5,
            price: 5000,
            img: "assets/products/Heart Necklaces.png",
          },
          {
            id: 4,
            title: "Heart Necklaces",
            rate: 5,
            price: 1000,
            img: "assets/products/Rectangle 11 (1).png",
          },
          {
            id: 5,
            title: "Heart Necklaces",
            rate: 5,
            price: 7000,
            img: "assets/products/Heart Necklaces.png",
          },
          {
            id: 6,
            title: "Heart Necklaces",
            rate: 5,
            price: 5000,
            img: "assets/products/Rectangle 12.png",
          },
          {
            id: 7,
            title: "Heart Necklaces",
            rate: 5,
            price: 1000,
            img: "assets/products/Rectangle 11 (1).png",
          },
          {
            id: 8,
            title: "Heart Necklaces",
            rate: 5,
            price: 7000,
            img: "assets/products/Rectangle 12.png",
          },
          {
            id: 9,
            title: "Heart Necklaces",
            rate: 5,
            price: 5000,
            img: "assets/products/Heart Necklaces.png",
          },
          {
            id: 10,
            title: "Heart Necklaces",
            rate: 5,
            price: 1000,
            img: "assets/products/Rectangle 11 (1).png",
          },
          {
            id: 11,
            title: "Heart Necklaces",
            rate: 5,
            price: 7000,
            img: "assets/products/Heart Necklaces.png",
          },
          {
            id: 12,
            title: "Heart Necklaces",
            rate: 5,
            price: 5000,
            img: "assets/products/Rectangle 11 (1).png",
          },
          {
            id: 13,
            title: "Heart Necklaces",
            rate: 5,
            price: 1000,
            img: "assets/products/Heart Necklaces.png",
          },
          {
            id: 14,
            title: "Heart Necklaces",
            rate: 5,
            price: 7000,
            img: "assets/products/Heart Necklaces.png",
          },
          {
            id: 15,
            title: "Heart Necklaces",
            rate: 5,
            price: 5000,
            img: "assets/products/Rectangle 11 (1).png",
          },
        ],
      };
    case "watches":
      return {
        options: {
          hasOptions: true,
          options: [
            {
              type: "Silver Watches",
              img: "assets/categories/rings/silver.png",
            },
            { type: "Gold Watches", img: "assets/categories/rings/gold.png" },
            { type: "Smart Watches", img: "assets/categories/rings/set.png" },
          ],
        },
        data: [
          {
            id: 1,
            title: "Silver watch",
            rate: 5,
            price: 1000,
            img: "assets/products/000.png",
          },
          {
            id: 2,
            title: "Gucci watch",
            rate: 5,
            price: 7000,
            img: "assets/products/Gucci watch.png",
          },
          {
            id: 3,
            title: "Silver watch",
            rate: 5,
            price: 5000,
            img: "assets/products/Silver watch.png",
          },
          {
            id: 4,
            title: "Gucci watch",
            rate: 5,
            price: 1000,
            img: "assets/products/000.png",
          },
          {
            id: 5,
            title: "Silver watch",
            rate: 5,
            price: 7000,
            img: "assets/products/Silver watch.png",
          },
          {
            id: 6,
            title: "Gucci watch",
            rate: 5,
            price: 5000,
            img: "assets/products/000.png",
          },
          {
            id: 7,
            title: "Silver watch",
            rate: 5,
            price: 1000,
            img: "assets/products/Silver watch.png",
          },
          {
            id: 8,
            title: "Gucci watch",
            rate: 5,
            price: 7000,
            img: "assets/products/Gucci watch.png",
          },
          {
            id: 9,
            title: "Silver watch",
            rate: 5,
            price: 5000,
            img: "assets/products/000.png",
          },
          {
            id: 10,
            title: "Gucci watch",
            rate: 5,
            price: 1000,
            img: "assets/products/000.png",
          },
          {
            id: 11,
            title: "Silver watch",
            rate: 5,
            price: 7000,
            img: "assets/products/Silver watch.png",
          },
          {
            id: 12,
            title: "Gucci watch",
            rate: 5,
            price: 5000,
            img: "assets/products/000.png",
          },
          {
            id: 13,
            title: "Silver watch",
            rate: 5,
            price: 1000,
            img: "assets/products/Silver watch.png",
          },
          {
            id: 14,
            title: "Gucci watch",
            rate: 5,
            price: 7000,
            img: "assets/products/000.png",
          },
          {
            id: 15,
            title: "Silver watch",
            rate: 5,
            price: 5000,
            img: "assets/products/Silver watch.png",
          },
        ],
      };
    case "earrings":
      return {
        options: {
          hasOptions: true,
          options: [
            {
              type: "Silver Earrings",
              img: "assets/categories/rings/silver.png",
            },
            { type: "Gold Earrings", img: "assets/categories/rings/gold.png" },
            { type: "Earrings Set", img: "assets/categories/rings/set.png" },
            {
              type: "Earrings Pearl",
              img: "assets/categories/rings/pearl.png",
            },
          ],
        },
        data: [
          {
            id: 1,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 1000,
            img: "assets/products/12.png",
          },
          {
            id: 2,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 7000,
            img: "assets/products/13.png",
          },
          {
            id: 3,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 5000,
            img: "assets/products/14.png",
          },
          {
            id: 4,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 1000,
            img: "assets/products/13.png",
          },
          {
            id: 5,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 7000,
            img: "assets/products/Small Hoop Earrings.png",
          },
          {
            id: 6,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 5000,
            img: "assets/products/14.png",
          },
          {
            id: 7,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 1000,
            img: "assets/products/Small Hoop Earrings.png",
          },
          {
            id: 8,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 7000,
            img: "assets/products/12.png",
          },
          {
            id: 9,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 5000,
            img: "assets/products/13.png",
          },
          {
            id: 10,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 1000,
            img: "assets/products/14.png",
          },
          {
            id: 11,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 7000,
            img: "assets/products/Small Hoop Earrings.png",
          },
          {
            id: 12,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 5000,
            img: "assets/products/14.png",
          },
          {
            id: 13,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 1000,
            img: "assets/products/13.png",
          },
          {
            id: 14,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 7000,
            img: "assets/products/Small Hoop Earrings.png",
          },
          {
            id: 15,
            title: "Small Hoop Earrings",
            rate: 5,
            price: 5000,
            img: "assets/products/Small Hoop Earrings.png",
          },
        ],
      };
    case "braceletes":
      return {
        options: {
          hasOptions: true,
          options: [
            {
              type: "Silver Braceletes",
              img: "assets/categories/rings/silver.png",
            },
            {
              type: "Gold Braceletes",
              img: "assets/categories/rings/gold.png",
            },
            { type: "Braceletes Set", img: "assets/categories/rings/set.png" },
            {
              type: "Braceletes Pearl",
              img: "assets/categories/rings/pearl.png",
            },
          ],
        },
        data: [
          {
            id: 1,
            title: "Gold Braceletes",
            rate: 5,
            price: 1000,
            img: "assets/products/11.png",
          },
          {
            id: 2,
            title: "Gold Braceletes",
            rate: 5,
            price: 7000,
            img: "assets/products/Gold Braceletes.png",
          },
          {
            id: 3,
            title: "Gold Braceletes",
            rate: 5,
            price: 5000,
            img: "assets/products/11.png",
          },
          {
            id: 4,
            title: "Gold Braceletes",
            rate: 5,
            price: 1000,
            img: "assets/products/Gold Braceletes.png",
          },
          {
            id: 5,
            title: "Gold Braceletes",
            rate: 5,
            price: 7000,
            img: "assets/products/11.png",
          },
          {
            id: 6,
            title: "Gold Braceletes",
            rate: 5,
            price: 5000,
            img: "assets/products/Gold Braceletes.png",
          },
          {
            id: 7,
            title: "Gold Braceletes",
            rate: 5,
            price: 1000,
            img: "assets/products/11.png",
          },
          {
            id: 8,
            title: "Gold Braceletes",
            rate: 5,
            price: 7000,
            img: "assets/products/Gold Braceletes.png",
          },
          {
            id: 9,
            title: "Gold Braceletes",
            rate: 5,
            price: 5000,
            img: "assets/products/11.png",
          },
          {
            id: 10,
            title: "Gold Braceletes",
            rate: 5,
            price: 1000,
            img: "assets/products/Gold Braceletes.png",
          },
          {
            id: 11,
            title: "Silver Braceletes",
            rate: 5,
            price: 7000,
            img: "assets/products/11.png",
          },
          {
            id: 12,
            title: "Gold Braceletes",
            rate: 5,
            price: 5000,
            img: "assets/products/Gold Braceletes.png",
          },
          {
            id: 13,
            title: "Gold Braceletes",
            rate: 5,
            price: 1000,
            img: "assets/products/11.png",
          },
          {
            id: 14,
            title: "Gold Braceletes",
            rate: 5,
            price: 7000,
            img: "assets/products/Gold Braceletes.png",
          },
          {
            id: 15,
            title: "Silver Braceletes",
            rate: 5,
            price: 5000,
            img: "assets/products/11.png",
          },
        ],
      };
    case "anklet":
      return {
        options: {
          hasOptions: true,
          options: [
            {
              type: "Silver Anklet",
              img: "assets/categories/rings/silver.png",
            },
            { type: "Gold Anklet", img: "assets/categories/rings/gold.png" },
            { type: "Anklet Set", img: "assets/categories/rings/set.png" },
            {
              type: "Anklet Pearl",
              img: "assets/categories/rings/pearl.png",
            },
          ],
        },
        data: [
          {
            id: 1,
            title: "Silver Anklet",
            rate: 5,
            price: 1000,
            img: "assets/products/Silver Anklet.png",
          },
          {
            id: 2,
            title: "Silver Anklet",
            rate: 5,
            price: 7000,
            img: "assets/products/Silver Anklet.png",
          },
          {
            id: 3,
            title: "Silver Anklet",
            rate: 5,
            price: 5000,
            img: "assets/products/Silver Anklet.png",
          },
          {
            id: 4,
            title: "Silver Anklet",
            rate: 5,
            price: 1000,
            img: "assets/products/Silver Anklet.png",
          },
          {
            id: 5,
            title: "Silver Anklet",
            rate: 5,
            price: 7000,
            img: "assets/products/Silver Anklet.png",
          },
          {
            id: 6,
            title: "Silver Anklet",
            rate: 5,
            price: 5000,
            img: "assets/products/Silver Anklet.png",
          },
          {
            id: 7,
            title: "Silver Anklet",
            rate: 5,
            price: 1000,
            img: "assets/products/Silver Anklet.png",
          },
          {
            id: 8,
            title: "Silver Anklet",
            rate: 5,
            price: 7000,
            img: "assets/products/Silver Anklet.png",
          },
          {
            id: 9,
            title: "Silver Anklet",
            rate: 5,
            price: 5000,
            img: "assets/products/Silver Anklet.png",
          },
          {
            id: 10,
            title: "Silver Anklet",
            rate: 5,
            price: 1000,
            img: "assets/products/Silver Anklet.png",
          },
          {
            id: 11,
            title: "Silver Anklet",
            rate: 5,
            price: 7000,
            img: "assets/products/Silver Anklet.png",
          },
          {
            id: 12,
            title: "Silver Anklet",
            rate: 5,
            price: 5000,
            img: "assets/products/Silver Anklet.png",
          },
          {
            id: 13,
            title: "Silver Anklet",
            rate: 5,
            price: 1000,
            img: "assets/products/Silver Anklet.png",
          },
          {
            id: 14,
            title: "Silver Anklet",
            rate: 5,
            price: 7000,
            img: "assets/products/Silver Anklet.png",
          },
          {
            id: 15,
            title: "Silver Anklet",
            rate: 5,
            price: 5000,
            img: "assets/products/Silver Anklet.png",
          },
        ],
      };
    case "noseraings":
      return {
        options: {
          hasOptions: true,
          options: [
            {
              type: "Silver Nos Raings",
              img: "assets/categories/rings/silver.png",
            },
            {
              type: "Gold Nos Raings",
              img: "assets/categories/rings/gold.png",
            },
            { type: "Nos Raings Set", img: "assets/categories/rings/set.png" },
            {
              type: "Nos Raings Pearl",
              img: "assets/categories/rings/pearl.png",
            },
          ],
        },
        data: [
          {
            id: 1,
            title: "Gold nose raings",
            rate: 5,
            price: 1000,
            img: "assets/products/zz.png",
          },
          {
            id: 2,
            title: "Gold nose raings",
            rate: 5,
            price: 7000,
            img: "assets/products/Gold nose raings.png",
          },
          {
            id: 3,
            title: "Gold nose raings",
            rate: 5,
            price: 5000,
            img: "assets/products/zz.png",
          },
          {
            id: 4,
            title: "Gold nose raings",
            rate: 5,
            price: 1000,
            img: "assets/products/Gold nose raings.png",
          },
          {
            id: 5,
            title: "Gold nose raings",
            rate: 5,
            price: 7000,
            img: "assets/products/zz.png",
          },
          {
            id: 6,
            title: "Gold nose raings",
            rate: 5,
            price: 5000,
            img: "assets/products/Gold nose raings.png",
          },
          {
            id: 7,
            title: "Gold nose raings",
            rate: 5,
            price: 1000,
            img: "assets/products/zz.png",
          },
          {
            id: 8,
            title: "Gold nose raings",
            rate: 5,
            price: 7000,
            img: "assets/products/Gold nose raings.png",
          },
          {
            id: 9,
            title: "Gold nose raings",
            rate: 5,
            price: 5000,
            img: "assets/products/zz.png",
          },
          {
            id: 10,
            title: "Gold nose raings",
            rate: 5,
            price: 1000,
            img: "assets/products/Gold nose raings.png",
          },
          {
            id: 11,
            title: "Gold nose raings",
            rate: 5,
            price: 7000,
            img: "assets/products/zz.png",
          },
          {
            id: 12,
            title: "Gold nose raings",
            rate: 5,
            price: 5000,
            img: "assets/products/Gold nose raings.png",
          },
          {
            id: 13,
            title: "Gold nose raings",
            rate: 5,
            price: 1000,
            img: "assets/products/zz.png",
          },
          {
            id: 14,
            title: "Gold nose raings",
            rate: 5,
            price: 7000,
            img: "assets/products/Gold nose raings.png",
          },
          {
            id: 15,
            title: "Gold nose raings",
            rate: 5,
            price: 5000,
            img: "assets/products/zz.png",
          },
        ],
      };
  }
};

export default function ListSection() {
  const pathName = useLocation().pathname.slice(1);
  return (
    <div className={styles.sec_container}>
      {switchRender(pathName).options && (
        <div className={styles.top_sec}>
          {switchRender(pathName).options.options.map((item) => (
            <div className={styles.sm_container} key={item.id}>
              <img src={`${item.img}`} alt="..." />
              <h3>{item.type}</h3>
            </div>
          ))}
        </div>
      )}
      <div className={styles.main_list_sec}>
        {switchRender(pathName).data.map((item) => (
          <div className={styles.card} key={item.id}>
            <img src={`${item.img}`} alt="..." />
            <div className={styles.card_cont}>
              <h4>{item.title}</h4>
              <img src="/assets/Frame 10.png" alt="..." />
              <h4>{item.price}</h4>
              <button className={styles.card_btn}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
