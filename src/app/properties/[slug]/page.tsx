import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { HiLocationMarker, HiArrowLeft } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { LuBath, LuMaximize } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import ImageGallery from "@/components/ImageGallery";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import { properties } from "@/data/properties";
import { siteConfig } from "@/data/config";
import styles from "./detail.module.css";

export function generateStaticParams() {
    return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const property = properties.find((p) => p.slug === slug);
    if (!property) return { title: "Property Not Found" };
    return {
        title: `${property.title} — ${property.location}`,
        description: property.shortDescription,
        openGraph: {
            title: `${property.title} — ${property.price} | ${siteConfig.companyName}`,
            description: property.shortDescription,
            images: property.images,
        },
        twitter: {
            card: "summary_large_image",
            title: `${property.title} — ${property.price}`,
            description: property.shortDescription,
            images: property.images,
        },
    };
}

export default async function PropertyDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const property = properties.find((p) => p.slug === slug);

    if (!property) notFound();

    const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
        `Hi, I'm interested in ${property.title} (${property.price}) at ${property.location}. Please share more details.`
    )}`;

    return (
        <>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "RealEstateListing",
                    name: property.title,
                    description: property.description,
                    url: `${siteConfig.siteUrl}/properties/${property.slug}`,
                    image: property.images,
                    price: property.priceValue,
                    priceCurrency: "INR",
                    numberOfRooms: property.bedrooms,
                    floorSize: {
                        "@type": "QuantitativeValue",
                        value: property.area,
                        unitCode: "SQF",
                    },
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: property.location,
                        addressRegion: "Rajasthan",
                        addressCountry: "IN",
                    },
                }}
            />

            <div className={styles.page}>
                <div className="container">
                    {/* Back */}
                    <Link href="/properties" className={styles.back}>
                        <HiArrowLeft /> Back to Properties
                    </Link>

                    {/* Gallery */}
                    <ImageGallery images={property.images} title={property.title} />

                    <div className={styles.grid}>
                        {/* Left: Details */}
                        <div className={styles.details}>
                            <div className={styles.header}>
                                <div>
                                    <div className={styles.location}>
                                        <HiLocationMarker />
                                        <span>{property.location}</span>
                                    </div>
                                    <h1>{property.title}</h1>
                                </div>
                                <div className={styles.priceBox}>
                                    <span className={styles.price}>{property.price}</span>
                                    <span className={styles.status}>{property.status}</span>
                                </div>
                            </div>

                            <div className={styles.metaRow}>
                                <div className={styles.metaItem}>
                                    <IoBedOutline />
                                    <div>
                                        <strong>{property.bedrooms}</strong>
                                        <span>Bedrooms</span>
                                    </div>
                                </div>
                                <div className={styles.metaItem}>
                                    <LuBath />
                                    <div>
                                        <strong>{property.bathrooms}</strong>
                                        <span>Bathrooms</span>
                                    </div>
                                </div>
                                <div className={styles.metaItem}>
                                    <LuMaximize />
                                    <div>
                                        <strong>{property.area}</strong>
                                        <span>Area</span>
                                    </div>
                                </div>
                                <div className={styles.metaItem}>
                                    <span className={styles.typeIcon}>⊞</span>
                                    <div>
                                        <strong>{property.type}</strong>
                                        <span>Type</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.section}>
                                <h3>About This Property</h3>
                                <p>{property.description}</p>
                            </div>

                            <div className={styles.section}>
                                <h3>Amenities & Features</h3>
                                <div className={styles.amenities}>
                                    {property.amenities.map((a, i) => (
                                        <span key={i} className={styles.amenity}>
                                            ✦ {a}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.section}>
                                <h3>Location</h3>
                                <div className={styles.mapWrap}>
                                    <iframe
                                        src={property.mapEmbed}
                                        width="100%"
                                        height="350"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`Map of ${property.title}`}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right: Inquiry */}
                        <div className={styles.sidebar}>
                            <div className={styles.sidebarCard}>
                                <h3>Interested in this property?</h3>
                                <p>Fill out the form below and our team will contact you within 24 hours.</p>
                                <InquiryForm propertyTitle={property.title} />
                                <div className={styles.divider}>
                                    <span>OR</span>
                                </div>
                                <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
                                    <FaWhatsapp /> Chat on WhatsApp
                                </a>
                                <a href={`tel:${siteConfig.phone}`} className={styles.callBtn}>
                                    Call {siteConfig.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
