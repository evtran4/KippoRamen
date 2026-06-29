import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Gallery.module.css';

interface GalleryItem {
  src: string;
  label: string;
  description?: string;
}

interface GalleryProps {
  title: string;
  items: GalleryItem[];
}

function Gallery({ title, items }: GalleryProps): JSX.Element {
  const trackRef = useRef<HTMLDivElement>(null);
  const setWidthRef = useRef(0);

  const loopedItems = useMemo(() => [...items, ...items, ...items], [items]);

  const [openItem, setOpenItem] = useState<GalleryItem | null>(null);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measureAndCenter = () => {
      const setWidth = track.scrollWidth / 3;
      setWidthRef.current = setWidth;
      track.scrollLeft = setWidth;
    };

    requestAnimationFrame(measureAndCenter);

    window.addEventListener('resize', measureAndCenter);
    return () => window.removeEventListener('resize', measureAndCenter);
  }, [items]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleWheel = (event: WheelEvent) => {
      const delta =
        Math.abs(event.deltaY) > Math.abs(event.deltaX)
          ? event.deltaY
          : event.deltaX;

      if (delta === 0) return;

      event.preventDefault();
      track.scrollLeft += delta;
    };

    track.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      track.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const setWidth = setWidthRef.current;
    const maxScroll = track.scrollWidth - track.clientWidth;

    if (track.scrollLeft <= 1) {
      track.scrollLeft += setWidth;
    } else if (track.scrollLeft >= maxScroll - 1) {
      track.scrollLeft -= setWidth;
    }
  };

  return (
    <section className={styles.gallery}>
      <h1>{title}</h1>

      <div
        ref={trackRef}
        className={styles.grid}
        onScroll={handleScroll}
      >
        {loopedItems.map((item, index) => (
          <div className={styles.item} key={`${item.label}-${index}`}>
            <div className={styles.imageWrap}>
              <img src={item.src} alt={item.label} onClick={()=>{
                setOpenItem(item)
              }}/>
            </div>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>

    {openItem && (
      <div className={styles.overlay} onClick={() => setOpenItem(null)}>
        <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
          
          <div className={styles.left}>
            <h1>{openItem.label}</h1>
            {openItem.description && <p>{openItem.description}</p>}
          </div>

          <div className={styles.right}>
            <img src={openItem.src} alt={openItem.label} />
          </div>

        </div>
      </div>
    )}
    </section>
  );
}

export default Gallery;