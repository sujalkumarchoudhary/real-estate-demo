import type { Metadata } from "next";
import { HiShieldCheck, HiUsers, HiClock, HiGlobeAlt, HiTrendingUp, HiHeart } from "react-icons/hi";
import { siteConfig } from "@/data/config";
import styles from "./about.module.css";

export const metadata: Metadata = {
    title: "About Us",
    description: `Learn about ${siteConfig.companyName} — Jaipur's trusted luxury real estate partner with 15+ years of experience delivering exceptional properties and client service.`,
};

const stats = [
    { num: "200+", label: "Properties Sold" },
    { num: "15+", label: "Years Experience" },
    { num: "₹500Cr+", label: "Worth Transacted" },
    { num: "98%", label: "Client Satisfaction" },
];

const reasons = [
    {
        icon: HiShieldCheck,
        title: "RERA Registered",
        desc: "Fully compliant with all regulatory requirements. Every transaction is transparent and documented.",
    },
    {
        icon: HiUsers,
        title: "Expert Team",
        desc: "Our seasoned professionals bring decades of combined experience in luxury real estate.",
    },
    {
        icon: HiGlobeAlt,
        title: "Exclusive Access",
        desc: "Get early access to off-market properties and pre-launch opportunities through our network.",
    },
    {
        icon: HiTrendingUp,
        title: "Investment Focused",
        desc: "We help you identify properties with the highest appreciation potential and rental yields.",
    },
    {
        icon: HiClock,
        title: "End-to-End Service",
        desc: "From property search to registration, we handle every detail so you can focus on what matters.",
    },
    {
        icon: HiHeart,
        title: "Client First",
        desc: "Your vision drives our search. We don't stop until we find the perfect match for your needs.",
    },
];

const team = [
    { name: "Vikram Malhotra", role: "Founder & CEO", initial: "VM" },
    { name: "Ananya Desai", role: "Head of Sales", initial: "AD" },
    { name: "Rohit Singhania", role: "Property Consultant", initial: "RS" },
    { name: "Kavita Nair", role: "Legal & Compliance", initial: "KN" },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.pageHero}>
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.label}>Our Story</span>
                    <h1>About {siteConfig.companyName}</h1>
                    <p>Jaipur&apos;s trusted partner in luxury real estate since 2010</p>
                </div>
            </section>

            {/* Story */}
            <section className="section">
                <div className={`container ${styles.storyGrid}`}>
                    <div className={styles.storyImage}>
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                            alt="Luxury building"
                        />
                    </div>
                    <div className={styles.storyContent}>
                        <span className={styles.label}>Who We Are</span>
                        <h2>Building Dreams, Creating Legacies</h2>
                        <p>
                            Founded in 2010, {siteConfig.companyName} has grown from a boutique consultancy into
                            one of Jaipur&apos;s most respected luxury real estate firms. Our journey began with a
                            simple belief: everyone deserves a home that reflects their aspirations.
                        </p>
                        <p>
                            Over the past 15 years, we&apos;ve helped over 200 families and investors find their
                            ideal properties across Jaipur&apos;s most coveted addresses — from the elegant
                            bungalows of C-Scheme to the modern villas of Vaishali Nagar.
                        </p>
                        <p>
                            Our deep market knowledge, extensive developer relationships, and commitment to
                            transparency have earned us the trust of Jaipur&apos;s most discerning property buyers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.statsSection}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        {stats.map((s, i) => (
                            <div key={i} className={styles.statCard}>
                                <span className={styles.statNum}>{s.num}</span>
                                <span className={styles.statLabel}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="container">
                    <div className="section-heading">
                        <span className="label">Our Edge</span>
                        <h2>Why Choose {siteConfig.companyName}</h2>
                        <div className="divider" />
                        <p>We go beyond transactions to build lasting relationships</p>
                    </div>
                    <div className={styles.reasonsGrid}>
                        {reasons.map((r, i) => (
                            <div key={i} className={styles.reasonCard}>
                                <div className={styles.reasonIcon}>
                                    <r.icon />
                                </div>
                                <h4>{r.title}</h4>
                                <p>{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-alt">
                <div className="container">
                    <div className="section-heading">
                        <span className="label">Our People</span>
                        <h2>Meet the Team</h2>
                        <div className="divider" />
                        <p>The professionals behind your exceptional real estate experience</p>
                    </div>
                    <div className={styles.teamGrid}>
                        {team.map((t, i) => (
                            <div key={i} className={styles.teamCard}>
                                <div className={styles.teamAvatar}>{t.initial}</div>
                                <h4>{t.name}</h4>
                                <p>{t.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
