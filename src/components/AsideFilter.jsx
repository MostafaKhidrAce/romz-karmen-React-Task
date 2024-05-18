import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import styles from "../styles/asideFilter.module.css";

export default function AsideFilter() {
  return (
    <div className={styles.container}>
      <input
        className={styles.inp_filter}
        type="text"
        placeholder="Filter by"
      />
      <div className={styles.aside_list_sty}>
        <h3>Category</h3>
        <div>
          <input type="checkbox" name="All" id="All" />
          <label htmlFor="All">All</label>
        </div>
        <div>
          <input type="checkbox" name="Rings" id="Rings" />
          <label htmlFor="Rings">Rings</label>
        </div>
        <div>
          <input type="checkbox" name="Ring1" id="Rings1" />
          <label htmlFor="Rings1">Rings</label>
        </div>
        <div>
          <input type="checkbox" name="Earings" id="Earings" />
          <label htmlFor="Earings">Earings</label>
        </div>
        <div>
          <input type="checkbox" name="Earings1" id="Earings1" />
          <label htmlFor="Earings1">Earings</label>
        </div>
      </div>
      <hr />
      <div className={styles.aside_list_sty}>
        <h3>Category</h3>
        <div>
          <input type="checkbox" name="Newest" id="Newest" />
          <label htmlFor="Newest">Newest</label>
        </div>
        <div>
          <input type="checkbox" name="Highly_Rated" id="Highly_Rated" />
          <label htmlFor="Highly_Rated">Highly Rated</label>
        </div>
        <div>
          <input type="checkbox" name="Nost_Ordered" id="Nost_Ordered" />
          <label htmlFor="Nost_Ordered">Nost Ordered</label>
        </div>
      </div>
      <hr />
      <div className={styles.aside_list_sty}>
        <h3>Show Product</h3>
        <div>
          <input type="checkbox" name="Newest1" id="Newest1" />
          <label htmlFor="Newest1">Newest</label>
        </div>
        <div>
          <input type="checkbox" name="All_Products" id="All_Products" />
          <label htmlFor="All_Products">All Products</label>
        </div>
      </div>
      <hr />

      <div className={styles.pricing_con}>
        <div className={styles.pricing_con_t}>
          <h3>Price</h3>
          <img src="/src/assets/dashes.png" alt="..." />
        </div>
        <div className={styles.pricing_inp}>
          <RangeSlider
            className="r_inp"
            min={0}
            max={150}
            step={6}
            value={[51, 113]}
          />
        </div>
        <div className={styles.pricing_inp_labels}>
          <span>0</span>
          <span>10</span>
          <span>24</span>
          <span>56</span>
          <span>100</span>
          <span>150</span>
        </div>
      </div>
    </div>
  );
}
