import styles from './Hero.module.css';
import logo from '../assets/logo.png';
import heroSpread from '../assets/hero-spread.png';
import { RefObject } from 'react';

function Hero({ menu }: { menu: RefObject<HTMLDivElement | null> }) {
  return (
    <section className={styles.hero}>
      <div className={styles.panel}>

        <div className={styles.titleContainer}>
          <img
            src={logo}
            alt="Kippo Ramen"
            className={`${styles.logo} ${styles.animate} ${styles.logoAnim}`}
          />

          <p className={`${styles.tagline} ${styles.animate} ${styles.taglineAnim}`}>
            Authentic Japanese Cuisine
          </p>
        </div>

        <hr className={`${styles.divider} ${styles.animate} ${styles.dividerAnim}`} />

        <p className={`${styles.copy} ${styles.animate} ${styles.copyAnim}`}>
          We offer authentic ramen dishes, including{' '}
          <span className={styles.accent}>Hakata tonkotsu</span>, rich{' '}
          <span className={styles.accent}>Sapporo miso</span>, and vegetarian
          and vegan options. Enjoy delicious meals served by our friendly,
          attentive staff in a relaxing atmosphere.
        </p>

        <button
          type="button"
          className={`${styles.cta} ${styles.animate} ${styles.ctaAnim}`}
          onClick={() => {
            menu.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          View Our Menu
        </button>

      </div>

      <div className={`${styles.imageSide} ${styles.animate} ${styles.imageAnim}`}>
        <img
          src={heroSpread}
          alt="A spread of ramen, gyoza, fried chicken and rice at Kippo Ramen"
        />
      </div>
    </section>
  );
}

export default Hero;