import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { siteConfig } from "@/data/config";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.brand}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoIcon}>◆</span>
                        {siteConfig.companyName}
                    </Link>
                    <p className={styles.tagline}>{siteConfig.tagline}</p>
                    <p className={styles.desc}>{siteConfig.description}</p>
                    <div className={styles.social}>
                        <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                        <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                        <a href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                        <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                    </div>
                </div>

                <div className={styles.col}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/properties">Properties</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.col}>
                    <h4>Property Types</h4>
                    <ul>
                        <li><Link href="/properties">Penthouses</Link></li>
                        <li><Link href="/properties">Apartments</Link></li>
                        <li><Link href="/properties">Villas</Link></li>
                        <li><Link href="/properties">Mansions</Link></li>
                    </ul>
                </div>

                <div className={styles.col}>
                    <h4>Contact Us</h4>
                    <ul className={styles.contactList}>
                        <li>
                            <HiPhone className={styles.icon} />
                            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                        </li>
                        <li>
                            <HiMail className={styles.icon} />
                            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                        </li>
                        <li>
                            <HiLocationMarker className={styles.icon} />
                            <span>{siteConfig.address}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
