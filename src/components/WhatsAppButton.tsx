"use client";

import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/config";
import styles from "./WhatsAppButton.module.css";

interface WhatsAppButtonProps {
    message?: string;
}

export default function WhatsAppButton({ message }: WhatsAppButtonProps) {
    const text = message || "Hi! I'm interested in your properties. Can you share more details?";
    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.fab}
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp />
            <span className={styles.tooltip}>Chat with us</span>
        </a>
    );
}
