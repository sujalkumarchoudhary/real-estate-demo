"use client";

import { useState } from "react";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
    images: string[];
    title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
    const [active, setActive] = useState(0);

    return (
        <div className={styles.gallery}>
            <div className={styles.mainImage}>
                <img src={images[active]} alt={`${title} - Image ${active + 1}`} />
                {images.length > 1 && (
                    <>
                        <button
                            className={`${styles.arrow} ${styles.prev}`}
                            onClick={() => setActive((p) => (p === 0 ? images.length - 1 : p - 1))}
                            aria-label="Previous image"
                        >
                            ‹
                        </button>
                        <button
                            className={`${styles.arrow} ${styles.next}`}
                            onClick={() => setActive((p) => (p === images.length - 1 ? 0 : p + 1))}
                            aria-label="Next image"
                        >
                            ›
                        </button>
                    </>
                )}
                <div className={styles.counter}>
                    {active + 1} / {images.length}
                </div>
            </div>

            {images.length > 1 && (
                <div className={styles.thumbs}>
                    {images.map((img, i) => (
                        <button
                            key={i}
                            className={`${styles.thumb} ${i === active ? styles.active : ""}`}
                            onClick={() => setActive(i)}
                        >
                            <img src={img} alt={`${title} thumbnail ${i + 1}`} />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
