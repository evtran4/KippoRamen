import { useEffect, useMemo, useState } from 'react';
import styles from './Menu.module.css';
import { MenuItem, MenuSection } from '../../BasicMenu';

const MENU_URL = 'https://getmenu-qrzfpevbxa-uc.a.run.app';

const BADGE_CLASS = {
  VEGETARIAN: styles.badgeVegetarian,
  SPICY: styles.badgeSpicy,
  'MUST TRY': styles.badgeMustTry,
} as const;

function ItemCard({ item }: { item: MenuItem }): JSX.Element {
  return (
    <article className={styles.card}>
      <div className={styles.itemHeader}>
        <div className={styles.itemTitleRow}>
          <h4 className={styles.itemName}>{item.label}</h4>

          {item.tag && (
            <span
              className={`${styles.badge} ${BADGE_CLASS[item.tag]}`}
              aria-label={item.tag}
            >
              {item.tag}
            </span>
          )}
        </div>
      </div>

      {item.description && (
        <p className={styles.itemDescription}>{item.description}</p>
      )}
    </article>
  );
}

export default function Menu(): JSX.Element {
  const [menu, setMenu] = useState<MenuSection[]>([]);
  const [active, setActive] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          'https://getmenu-qrzfpevbxa-uc.a.run.app'
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch menu: ${response.status}`);
        }

        const data = await response.json();
        const sections: MenuSection[] = data.sections ?? [];

        setMenu(sections);

        if (sections.length > 0) {
          setActive(sections[0].title);
        }
      } catch (err) {
        console.error('Failed to fetch menu:', err);
        setError('Unable to load the menu. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const activeSection = useMemo(
    () => menu.find((section) => section.title === active) ?? menu[0],
    [menu, active]
  );

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.heroEyebrow}>KIPPO RAMEN</p>

        <h1 className={styles.heroTitle}>Our Menu</h1>

        <p className={styles.heroSub}>
          Every bowl crafted with care. Explore our menu below.
        </p>

        <div className={styles.heroDivider}>
          <span className={styles.heroDot} />
        </div>
      </header>

      {loading && (
        <main className={styles.section}>
          <p>Loading menu...</p>
        </main>
      )}

      {error && (
        <main className={styles.section}>
          <p>{error}</p>
        </main>
      )}

      {!loading && !error && menu.length > 0 && (
        <>
          <div className={styles.tabsWrapper}>
            <nav className={styles.tabs} aria-label="Menu sections">
              {menu.map((section) => (
                <button
                  key={section.title}
                  type="button"
                  className={`${styles.tab} ${
                    active === section.title ? styles.tabActive : ''
                  }`}
                  onClick={() => setActive(section.title)}
                  aria-current={
                    active === section.title ? 'page' : undefined
                  }
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

          <main className={styles.section}>
            <div className={styles.sectionHeading}>
              <span className={styles.star} aria-hidden="true">
                ✦
              </span>

              <h2 className={styles.sectionTitle}>
                {activeSection.title}
              </h2>

              <span className={styles.star} aria-hidden="true">
                ✦
              </span>
            </div>

            <div className={styles.sectionContainer}>
              {activeSection.subsections ? (
                activeSection.subsections.map((subsection) => (
                  <section
                    key={subsection.title}
                    className={styles.subsection}
                    aria-labelledby={`subsection-${subsection.title}`}
                  >
                    <h3
                      id={`subsection-${subsection.title}`}
                      className={styles.subsectionTitle}
                    >
                      {subsection.title}
                    </h3>

                    {subsection.description && (
                      <p className={styles.subsectionDescription}>
                        {subsection.description}
                      </p>
                    )}

                    <div className={styles.grid}>
                      {subsection.items.map((item) => (
                        <ItemCard key={item.label} item={item} />
                      ))}
                    </div>
                  </section>
                ))
              ) : (
                <div className={styles.grid}>
                  {activeSection.items?.map((item) => (
                    <ItemCard key={item.label} item={item} />
                  ))}
                </div>
              )}
            </div>
          </main>
        </>
      )}
    </div>
  );
}