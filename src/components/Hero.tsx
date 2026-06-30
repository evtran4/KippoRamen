import styles from './Hero.module.css';
import logo from '../assets/logo.png';
import toast from '../assets/toast.png'
import uberEats from '../assets/uber-eats.png'
import doordash from '../assets/doordash.png'
import heroSpread from '../assets/hero-spread.png';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate()
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
            navigate("/Menu")
          }}
        >
          View Our Menu
        </button>

        <div className={`${styles.onlineOrder}  ${styles.animate} ${styles.onlineOrderAnim}`}>
          <img src={toast} alt="toast banner"></img>
          <img src={uberEats} alt="uber eats banner"></img>
          <img src={doordash} alt="doordash banner"></img>
        </div>

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