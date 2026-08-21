import styles from './Hero.module.css';
import logo from '../assets/logo.png';
import toast from '../assets/toast.png'
import uberEats from '../assets/uber-eats.png'
import doordash from '../assets/doordash.png'
import heroSpread from '../assets/hero-spread.png';
import { useNavigate } from 'react-router-dom';
import ReviewScroll from './ReviewScroll';

function Hero() {
  const navigate = useNavigate()
  return (
    <div className="page">
      <section className={styles.hero}>
        <div className={styles.panel}>

          <div className={styles.titleContainer}>
            <img
              src={logo}
              alt="Kippo Ramen"
              className={`${styles.logo} ${styles.animate} ${styles.logoAnim}`} />

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
            <br></br><br></br><br></br>
            Join us at 606 S Broadway, Baltimore, MD 21231
          </p>

          <button
            type="button"
            className={`${styles.cta} ${styles.animate} ${styles.ctaAnim}`}
            onClick={() => {
              navigate("/Menu");
            } }
          >
            View Our Menu
          </button>
        </div>

        <div className={`${styles.imageSide} ${styles.animate} ${styles.imageAnim}`}>
          <img
            src={heroSpread}
            alt="A spread of ramen, gyoza, fried chicken and rice at Kippo Ramen" />
        </div>
      </section>

      <section className={styles.bottomBar}>
        <div className={styles.orderRow}>
          <span className={styles.orderLabel}>Order Online</span>
          <div className={styles.onlineOrder}>
            <img 
              src={toast} 
              alt="toast banner"
              onClick={() => window.open('https://order.toasttab.com/online/kippo-ramen-606-s-broadway', '_blank')}
              style={{ cursor: 'pointer' }}
            />
            <img 
              src={uberEats} 
              alt="uber eats banner"
              onClick={() => window.open('https://www.ubereats.com/store/kippo-ramen/FdMFTj7LTWOEUFTAiIKTyQ?srsltid=AfmBOoqU-Vqbkij7WYhCdxyStJdlIkizml854ijzVO-Sav3umWoyVMY-', '_blank')}
              style={{ cursor: 'pointer' }}
            />
            <img 
              src={doordash} 
              alt="doordash banner"
              onClick={() => window.open('https://www.doordash.com/store/kippo-ramen-baltimore-25458769/25836351/?srsltid=AfmBOopOzcSrn111dgMC8V9yzfQnJSf-WdRvV2O2Ui-7Id32L9q9xS9V', '_blank')}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>

        <div className={styles.barDivider} />

        <div className={styles.reviewsBlock}>
          <div className={styles.reviewsHeader}>
            <span className={styles.reviewsLabel}>What Our Guests Say</span>
            <span className={styles.reviewsSub}>★★★★★ &nbsp;Google Reviews</span>
          </div>
          <div className={styles.reviewScrollContainer}>
            <ReviewScroll></ReviewScroll>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;