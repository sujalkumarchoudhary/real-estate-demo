import type { Metadata } from "next";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import styles from "./properties.module.css";

export const metadata: Metadata = {
    title: "Premium Properties",
    description:
        "Browse our exclusive collection of luxury properties in Jaipur — villas, flats, plots and premium residences in C-Scheme, Vaishali Nagar, Malviya Nagar & more.",
};

export default function PropertiesPage() {
    return (
        <>
            {/* Page Hero */}
            <section className={styles.pageHero}>
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>Our Portfolio</span>
                    <h1>Premium Properties</h1>
                    <p>Discover Jaipur&apos;s finest residential addresses</p>
                </div>
            </section>

            {/* Filter Bar (decorative) */}
            <section className={styles.filterBar}>
                <div className="container">
                    <div className={styles.filters}>
                        <div className={styles.filterGroup}>
                            <label>Property Type</label>
                            <select>
                                <option>All Types</option>
                                <option>Penthouse</option>
                                <option>Apartment</option>
                                <option>Villa</option>
                                <option>Mansion</option>
                            </select>
                        </div>
                        <div className={styles.filterGroup}>
                            <label>Location</label>
                            <select>
                                <option>All Locations</option>
                                <option>Bandra West</option>
                                <option>Worli</option>
                                <option>Juhu</option>
                                <option>Powai</option>
                            </select>
                        </div>
                        <div className={styles.filterGroup}>
                            <label>Price Range</label>
                            <select>
                                <option>Any Price</option>
                                <option>₹2 Cr - ₹5 Cr</option>
                                <option>₹5 Cr - ₹10 Cr</option>
                                <option>₹10 Cr+</option>
                            </select>
                        </div>
                        <div className={styles.filterGroup}>
                            <label>Status</label>
                            <select>
                                <option>All</option>
                                <option>Ready to Move</option>
                                <option>Under Construction</option>
                            </select>
                        </div>
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="section">
                <div className="container">
                    <p className={styles.count}>{properties.length} Properties Found</p>
                    <div className="grid-3">
                        {properties.map((p) => (
                            <PropertyCard key={p.slug} property={p} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
