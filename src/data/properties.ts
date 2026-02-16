export interface Property {
    slug: string;
    title: string;
    price: string;
    priceValue: number;
    location: string;
    shortDescription: string;
    description: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    type: string;
    status: string;
    amenities: string[];
    images: string[];
    featured: boolean;
    mapEmbed: string;
}

export const properties: Property[] = [
    {
        slug: "skyline-penthouse-bandra",
        title: "Skyline Penthouse",
        price: "₹12.5 Cr",
        priceValue: 125000000,
        location: "Bandra West, Mumbai",
        shortDescription:
            "Luxurious 4BHK penthouse with panoramic sea views and private terrace garden.",
        description:
            "Experience the pinnacle of luxury living in this stunning 4BHK penthouse located in the heart of Bandra West. Spread across 4,500 sq.ft., this residence offers breathtaking 270-degree views of the Arabian Sea and the city skyline. The penthouse features Italian marble flooring, floor-to-ceiling windows, a gourmet kitchen with imported appliances, and a private terrace garden perfect for entertaining. The master suite includes a walk-in wardrobe and a spa-inspired bathroom with a jacuzzi. Building amenities include a rooftop infinity pool, state-of-the-art gym, concierge service, and 24/7 security.",
        bedrooms: 4,
        bathrooms: 5,
        area: "4,500 sq.ft.",
        type: "Penthouse",
        status: "Ready to Move",
        amenities: [
            "Swimming Pool",
            "Gym",
            "Terrace Garden",
            "Concierge",
            "Parking",
            "Smart Home",
            "Sea View",
            "Jacuzzi",
        ],
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        ],
        featured: true,
        mapEmbed:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.83!3d19.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM2LjAiTiA3MsKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    },
    {
        slug: "the-residences-worli",
        title: "The Residences at Worli",
        price: "₹8.9 Cr",
        priceValue: 89000000,
        location: "Worli Sea Face, Mumbai",
        shortDescription:
            "Elegant 3BHK apartment with world-class amenities and iconic sea-link views.",
        description:
            "Discover refined living at The Residences, an iconic address on Worli Sea Face. This exquisite 3BHK apartment spans 3,200 sq.ft. and offers uninterrupted views of the Bandra-Worli Sea Link and the Arabian Sea. Designed by internationally acclaimed architects, the residence features European oak flooring, Bulthaup kitchen, Duravit bathrooms, and centralized air conditioning. The building offers a temperature-controlled infinity pool, residents' lounge, business center, and a landscaped podium garden. Located minutes from the Worli business district and top international schools.",
        bedrooms: 3,
        bathrooms: 3,
        area: "3,200 sq.ft.",
        type: "Apartment",
        status: "Ready to Move",
        amenities: [
            "Infinity Pool",
            "Business Center",
            "Landscaped Garden",
            "Valet Parking",
            "Kids Play Area",
            "Clubhouse",
            "Sea View",
            "Power Backup",
        ],
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        ],
        featured: true,
        mapEmbed:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.8!2d72.81!3d19.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzM2LjAiTiA3MsKwNDgnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    },
    {
        slug: "royal-villa-juhu",
        title: "Royal Villa Juhu",
        price: "₹25 Cr",
        priceValue: 250000000,
        location: "Juhu, Mumbai",
        shortDescription:
            "Magnificent 5BHK villa with private pool, garden, and proximity to Juhu Beach.",
        description:
            "An extraordinary 5BHK independent villa nestled in the prestigious Juhu enclave. This 6,800 sq.ft. masterpiece sits on a 12,000 sq.ft. plot and features a stunning private pool, manicured garden, and a grand double-height living room. The villa boasts Venetian plaster walls, custom Italian cabinetry, a wine cellar, home theater, and a staff quarters wing. Each bedroom is a private suite with en-suite bathroom and walk-in closet. The rooftop terrace offers 360-degree views of the surroundings. Just a 5-minute walk from the famous Juhu Beach.",
        bedrooms: 5,
        bathrooms: 6,
        area: "6,800 sq.ft.",
        type: "Villa",
        status: "Ready to Move",
        amenities: [
            "Private Pool",
            "Garden",
            "Home Theater",
            "Wine Cellar",
            "Staff Quarters",
            "Rooftop Terrace",
            "CCTV",
            "Power Backup",
        ],
        images: [
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
            "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
        ],
        featured: true,
        mapEmbed:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.3!2d72.83!3d19.10!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzAwLjAiTiA3MsKwNDknNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    },
    {
        slug: "azure-tower-powai",
        title: "Azure Tower Residence",
        price: "₹4.2 Cr",
        priceValue: 42000000,
        location: "Powai, Mumbai",
        shortDescription:
            "Modern 3BHK with lake views, contemporary design, and premium club amenities.",
        description:
            "Welcome to Azure Tower, a modern architectural marvel overlooking the serene Powai Lake. This thoughtfully designed 3BHK apartment offers 2,100 sq.ft. of contemporary living space with an open floor plan, floor-to-ceiling windows, and a spacious balcony with mesmerizing lake views. Features include vitrified tile flooring, modular kitchen with Bosch appliances, video door phone, and centralized gas supply. The gated community includes an Olympic-sized swimming pool, tennis court, jogging track, amphitheater, and a 30,000 sq.ft. clubhouse. Excellent connectivity to the Eastern Express Highway and IT parks.",
        bedrooms: 3,
        bathrooms: 3,
        area: "2,100 sq.ft.",
        type: "Apartment",
        status: "Under Construction",
        amenities: [
            "Lake View",
            "Swimming Pool",
            "Tennis Court",
            "Clubhouse",
            "Jogging Track",
            "Amphitheater",
            "Security",
            "Parking",
        ],
        images: [
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80",
        ],
        featured: false,
        mapEmbed:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6!2d72.91!3d19.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzEyLjAiTiA3MsKwNTQnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    },
    {
        slug: "heritage-mansion-south-mumbai",
        title: "Heritage Mansion",
        price: "₹18 Cr",
        priceValue: 180000000,
        location: "Malabar Hill, Mumbai",
        shortDescription:
            "Restored heritage 4BHK with colonial architecture, lush gardens, and city landmark views.",
        description:
            "Own a piece of Mumbai's heritage with this meticulously restored 4BHK mansion on Malabar Hill. Spread across 5,200 sq.ft., this property beautifully blends colonial architectural grandeur with modern luxury. Original teak wood flooring, arched doorways, 14-foot ceilings, and crystal chandeliers create a timeless ambiance. The modern additions include a fully fitted Poggenpohl kitchen, Hansgrohe bathroom fittings, central air conditioning, and a home automation system. Set within 2 acres of lush landscaped gardens with views of the Hanging Gardens and the Arabian Sea.",
        bedrooms: 4,
        bathrooms: 4,
        area: "5,200 sq.ft.",
        type: "Mansion",
        status: "Ready to Move",
        amenities: [
            "Heritage Architecture",
            "Landscaped Gardens",
            "Home Automation",
            "Parking",
            "City Views",
            "Security",
            "Service Elevator",
            "Library",
        ],
        images: [
            "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
            "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80",
        ],
        featured: false,
        mapEmbed:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5!2d72.80!3d18.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU3JzM2LjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    },
    {
        slug: "palm-grove-estate-goregaon",
        title: "Palm Grove Estate",
        price: "₹3.5 Cr",
        priceValue: 35000000,
        location: "Goregaon East, Mumbai",
        shortDescription:
            "Spacious 2BHK in a premium gated community with world-class sports facilities.",
        description:
            "Palm Grove Estate offers the perfect blend of luxury and comfort in the rapidly developing Goregaon East corridor. This premium 2BHK apartment spans 1,450 sq.ft. with an efficient layout, large windows for natural light, and a dedicated utility room. The apartment features wooden laminate flooring in bedrooms, anti-skid tiles in bathrooms, and a well-appointed modular kitchen. The integrated township includes a 9-hole golf course, cricket pitch, football field, swimming pool, spa, multiplex, and retail boulevard. Excellent connectivity to the Western Express Highway and upcoming metro station.",
        bedrooms: 2,
        bathrooms: 2,
        area: "1,450 sq.ft.",
        type: "Apartment",
        status: "Under Construction",
        amenities: [
            "Golf Course",
            "Cricket Pitch",
            "Swimming Pool",
            "Spa",
            "Multiplex",
            "Retail Boulevard",
            "Metro Connectivity",
            "Parking",
        ],
        images: [
            "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        ],
        featured: false,
        mapEmbed:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2!2d72.86!3d19.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEwJzEyLjAiTiA3MsKwNTEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    },
];
