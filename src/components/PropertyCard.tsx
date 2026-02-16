import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { LuBath, LuMaximize } from "react-icons/lu";
import type { Property } from "@/data/properties";
import styles from "./PropertyCard.module.css";

interface PropertyCardProps {
    property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrap}>
                <img
                    src={property.images[0]}
                    alt={property.title}
                    className={styles.image}
                />
                <span className={styles.badge}>{property.status}</span>
                <span className={styles.price}>{property.price}</span>
            </div>

            <div className={styles.content}>
                <div className={styles.location}>
                    <HiLocationMarker />
                    <span>{property.location}</span>
                </div>

                <h3 className={styles.title}>{property.title}</h3>
                <p className={styles.desc}>{property.shortDescription}</p>

                <div className={styles.meta}>
                    <div className={styles.metaItem}>
                        <IoBedOutline />
                        <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className={styles.metaItem}>
                        <LuBath />
                        <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className={styles.metaItem}>
                        <LuMaximize />
                        <span>{property.area}</span>
                    </div>
                </div>

                <Link href={`/properties/${property.slug}`} className={styles.cta}>
                    View Details →
                </Link>
            </div>
        </div>
    );
}
