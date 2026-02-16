import type { Metadata } from "next";
import { HiPhone, HiMail, HiLocationMarker, HiClock } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import InquiryForm from "@/components/InquiryForm";
import { siteConfig } from "@/data/config";
import styles from "./contact.module.css";

export const metadata: Metadata = {
    title: "Contact Us",
    description: `Get in touch with ${siteConfig.companyName}. Schedule a property viewing, ask about listings, or discuss your real estate needs. We respond within 24 hours.`,
};

const contactInfo = [
    {
        icon: HiPhone,
        label: "Phone",
        value: siteConfig.phone,
        href: `tel:${siteConfig.phone}`,
    },
    {
        icon: HiMail,
        label: "Email",
        value: siteConfig.email,
        href: `mailto:${siteConfig.email}`,
    },
    {
        icon: HiLocationMarker,
        label: "Office",
        value: siteConfig.address,
        href: undefined,
    },
    {
        icon: HiClock,
        label: "Hours",
        value: "Mon–Sat: 9:00 AM – 7:00 PM",
        href: undefined,
    },
];

export default function ContactPage() {
    const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
        "Hi, I'd like to know more about your properties."
    )}`;

    return (
        <>
            {/* Hero */}
            <section className={styles.pageHero}>
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>Reach Out</span>
                    <h1>Contact Us</h1>
                    <p>We&apos;d love to hear from you. Let&apos;s start a conversation.</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section">
                <div className={`container ${styles.contactGrid}`}>
                    {/* Form */}
                    <div className={styles.formSide}>
                        <h2>Send Us a Message</h2>
                        <p className="text-muted" style={{ marginBottom: 'var(--space-2xl)' }}>
                            Fill out the form below and our team will respond within 24 hours.
                        </p>
                        <InquiryForm />
                    </div>

                    {/* Info */}
                    <div className={styles.infoSide}>
                        <div className={styles.infoCards}>
                            {contactInfo.map((c, i) => (
                                <div key={i} className={styles.infoCard}>
                                    <div className={styles.infoIcon}>
                                        <c.icon />
                                    </div>
                                    <div>
                                        <span className={styles.infoLabel}>{c.label}</span>
                                        {c.href ? (
                                            <a href={c.href} className={styles.infoValue}>
                                                {c.value}
                                            </a>
                                        ) : (
                                            <span className={styles.infoValue}>{c.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* WhatsApp */}
                        <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.waCard}>
                            <FaWhatsapp className={styles.waIcon} />
                            <div>
                                <strong>Chat on WhatsApp</strong>
                                <span>Get instant responses on WhatsApp</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className={styles.mapSection}>
                <div className="container">
                    <div className="section-heading">
                        <span className="label">Visit Us</span>
                        <h2>Our Office Location</h2>
                        <div className="divider" />
                    </div>
                    <div className={styles.mapWrap}>
                        <iframe
                            src={siteConfig.googleMapsEmbed}
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
