import Link from "next/link";
import { HiArrowRight, HiStar, HiShieldCheck, HiClock, HiGlobeAlt } from "react-icons/hi";
import PropertyCard from "@/components/PropertyCard";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { properties } from "@/data/properties";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/config";
import styles from "./page.module.css";

export default function Home() {
  const featured = properties.filter((p) => p.featured);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: siteConfig.companyName,
          description: siteConfig.description,
          url: siteConfig.siteUrl,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          image: `${siteConfig.siteUrl}/og-image.png`,
          priceRange: "₹₹₹",
          areaServed: {
            "@type": "City",
            name: "Jaipur",
            sameAs: "https://en.wikipedia.org/wiki/Jaipur",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "C-56, Ashok Marg",
            addressLocality: "Jaipur",
            addressRegion: "Rajasthan",
            postalCode: "302001",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 26.9124,
            longitude: 75.7873,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
          sameAs: [
            siteConfig.socialLinks.facebook,
            siteConfig.socialLinks.instagram,
            siteConfig.socialLinks.twitter,
            siteConfig.socialLinks.linkedin,
          ],
        }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Premium Real Estate</span>
          <h1 className={styles.heroTitle}>
            Discover Luxury <br />
            <span className={styles.heroAccent}>Living Spaces</span>
          </h1>
          <p className={styles.heroDesc}>
            Curated collection of Jaipur&apos;s most exclusive properties.
            Experience the perfect blend of elegance, comfort, and investment value.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/properties" className="btn btn-primary">
              View Properties <HiArrowRight />
            </Link>
            <Link href="/contact" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
              Contact Us
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>200+</span>
              <span className={styles.statLabel}>Properties Sold</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>15+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>50+</span>
              <span className={styles.statLabel}>Premium Listings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="label">Featured Listings</span>
            <h2>Handpicked Properties</h2>
            <div className="divider" />
            <p>Explore our curated selection of premium properties in Jaipur&apos;s most sought-after locations.</p>
          </div>
          <div className="grid-3">
            {featured.map((p) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/properties" className="btn btn-outline">
              View All Properties <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="section-alt">
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutImage}>
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
              alt="Luxury property"
            />
            <div className={styles.aboutBadge}>
              <span className={styles.aboutBadgeNum}>15+</span>
              <span>Years of Excellence</span>
            </div>
          </div>
          <div className={styles.aboutContent}>
            <span className="label" style={{ color: 'var(--color-accent)' }}>About Us</span>
            <h2>Building Trust, Delivering Excellence</h2>
            <p>
              At {siteConfig.companyName}, we believe in transforming the real estate experience.
              With over 15 years of expertise in Jaipur&apos;s luxury property market, we&apos;ve helped
              hundreds of discerning clients find their dream homes.
            </p>
            <p>
              Our team of seasoned professionals combines deep market knowledge with personalized
              service to ensure every transaction exceeds expectations.
            </p>
            <div className={styles.aboutFeatures}>
              <div className={styles.aboutFeature}>
                <HiShieldCheck className={styles.aboutIcon} />
                <div>
                  <h4>Trusted Partner</h4>
                  <p>RERA registered with transparent dealings</p>
                </div>
              </div>
              <div className={styles.aboutFeature}>
                <HiGlobeAlt className={styles.aboutIcon} />
                <div>
                  <h4>Wide Network</h4>
                  <p>Access to exclusive off-market listings</p>
                </div>
              </div>
            </div>
            <Link href="/about" className="btn btn-primary">
              Learn More <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="label">Client Stories</span>
            <h2>What Our Clients Say</h2>
            <div className="divider" />
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <HiStar key={j} />
                  ))}
                </div>
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container text-center">
          <h2 className={styles.ctaTitle}>Ready to Find Your Dream Home?</h2>
          <p className={styles.ctaDesc}>
            Let us help you discover the perfect property that matches your lifestyle and investment goals.
          </p>
          <div className={styles.ctaCtas}>
            <Link href="/properties" className="btn btn-primary">
              Browse Properties
            </Link>
            <Link href="/contact" className="btn btn-white">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Inquiry */}
      <section className="section">
        <div className="container">
          <div className={styles.inquiryGrid}>
            <div>
              <span className="label" style={{ color: 'var(--color-accent)' }}>Get in Touch</span>
              <h2>Have a Question?</h2>
              <p className="text-muted" style={{ marginTop: 'var(--space-md)' }}>
                Fill out the form and our team will get back to you within 24 hours.
                Whether you&apos;re buying, selling, or just exploring — we&apos;re here to help.
              </p>
              <div className={styles.contactInfo}>
                <div>
                  <HiClock className={styles.aboutIcon} />
                  <div>
                    <strong>Office Hours</strong>
                    <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formCard}>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
