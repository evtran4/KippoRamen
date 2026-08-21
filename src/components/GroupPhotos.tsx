// GroupPhotos.tsx
import React from 'react';
import styles from './Components.module.css';

export default function GroupPhotos (params: {photos: string[], size?: number}) {
    const { photos, size = 48 } = params;
    const overlap = Math.round(size * 0.25);

    return (
        <div className={styles.groupPhotos}>
            {photos.map((src, index) => (
                <div
                    key={index}
                    className={styles.groupPhotoItem}
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        marginLeft: index === 0 ? 0 : `-${overlap}px`,
                        zIndex: photos.length - index,
                    }}
                >
                    <img
                        src={src}
                        alt={`${index + 1}`}
                        className={styles.groupPhotoImg}
                    />
                </div>
            ))}
        </div>
    );
}