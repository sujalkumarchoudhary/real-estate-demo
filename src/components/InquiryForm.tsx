"use client";

import { useState, FormEvent } from "react";
import styles from "./InquiryForm.module.css";

interface InquiryFormProps {
    propertyTitle?: string;
}

export default function InquiryForm({ propertyTitle }: InquiryFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: propertyTitle
            ? `I'm interested in ${propertyTitle}. Please share more details.`
            : "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const sheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
            if (sheetUrl) {
                await fetch(sheetUrl, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...formData,
                        property: propertyTitle || "General Inquiry",
                        timestamp: new Date().toISOString(),
                    }),
                });
            }
            setStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className={styles.successMsg}>
                <div className={styles.checkIcon}>✓</div>
                <h3>Thank You!</h3>
                <p>We&apos;ve received your inquiry and will get back to you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => setStatus("idle")}>
                    Send Another
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
                <label htmlFor="name">Full Name</label>
                <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>

            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>
            </div>

            <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Inquiry"}
            </button>

            {status === "error" && (
                <p className={styles.errorMsg}>Something went wrong. Please try again or call us directly.</p>
            )}
        </form>
    );
}
