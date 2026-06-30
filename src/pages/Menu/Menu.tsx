import { useMemo, useState } from 'react';
import styles from './Menu.module.css';
import { menu } from '../../menu';

const BADGE_CLASS = {
  'BEST SELLER': styles.badgeBestseller,
  "CHEF'S PICK": styles.badgeChef,
  SPICY: styles.badgeSpicy,
  NEW: styles.badgeNew,
} as const;

export default function Menu(): JSX.Element {
  const [active, setActive] = useState<string>(menu[0].title);

  const activeSection = useMemo(
    () => menu.find((section) => section.title === active) ?? menu[0],
    [active]
  );

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.heroEyebrow}>KIPPO RAMEN</p>

        <h1 className={styles.heroTitle}>Our Menu</h1>

        <p className={styles.heroSub}>
          Every bowl crafted with care. Hover a dish to see details.
        </p>

        <div className={styles.heroDivider}>
          <span className={styles.heroDot} />
        </div>
      </header>

      <div className={styles.tabsWrapper}>
        <div className={styles.tabs}>
          {menu.map((section) => (
            <button
              key={section.title}
              className={`${styles.tab} ${
                active === section.title ? styles.tabActive : ''
              }`}
              onClick={() => setActive(section.title)}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span className={styles.star}>✦</span>
          <h2 className={styles.sectionTitle}>{activeSection.title}</h2>
          <span className={styles.star}>✦</span>
        </div>

        <div className={styles.grid}>
          {activeSection.items.map((item) => (
            <div key={item.label} className={styles.card}>
              <div className={styles.imageWrap}>
                {item.tag && (
                  <span
                    className={`${styles.badge} ${BADGE_CLASS[item.tag]}`}
                  >
                    {item.tag}
                  </span>
                )}

                <img
                  src={item.src}
                  alt={item.label}
                  className={styles.image}
                />
              </div>

              <p className={styles.itemName}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}