export interface Testimonial {
    name: string;
    role: string;
    quote: string;
    avatar: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        name: "Rajesh Sharma",
        role: "Business Owner",
        quote:
            "Luxe Realty made our dream of owning a sea-view penthouse a reality. Their team understood exactly what we were looking for and delivered beyond expectations. The entire process was seamless and professional.",
        avatar: "/images/avatar-1.jpg",
        rating: 5,
    },
    {
        name: "Priya Mehta",
        role: "Interior Designer",
        quote:
            "As someone in the design industry, I have very specific tastes. Luxe Realty curated a selection of properties that matched my aesthetic perfectly. Their attention to detail is unmatched in the market.",
        avatar: "/images/avatar-2.jpg",
        rating: 5,
    },
    {
        name: "Arjun Kapoor",
        role: "Tech Entrepreneur",
        quote:
            "I've worked with several real estate agencies, but Luxe Realty stands out for their transparency and market expertise. They helped me find the perfect investment property in Powai with excellent returns.",
        avatar: "/images/avatar-3.jpg",
        rating: 5,
    },
    {
        name: "Neha Gupta",
        role: "Doctor",
        quote:
            "The team at Luxe Realty took the stress out of finding our family home. From shortlisting to paperwork, everything was handled with utmost professionalism. Highly recommend their services!",
        avatar: "/images/avatar-4.jpg",
        rating: 5,
    },
];
