export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  priceValue: number;
  type: "House" | "Apartment" | "Plot" | "Farmhouse";
  purpose: "For Sale";
  size: "2.5 Marla" | "3.5 Marla" | "5 Marla" | "8 Marla" | "10 Marla" | "1 Kanal" | "2 Kanal" | "4 Kanal";
  floor?: "Ground Floor" | "First Floor" | "Second Floor";
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  description: string;
  features: string[];
};

export const properties: Property[] = [
  // ─────────────────────────────────────────────
  // HOUSES
  // ─────────────────────────────────────────────

  {
    id: "house-1",
    title: "Modern 2.5 Marla Single Storey House",
    location: "Arabian City, Lahore",
    price: "PKR 48 Lacs",
    priceValue: 4800000,
    type: "House",
    purpose: "For Sale",
    size: "2.5 Marla",
    bedrooms: 2,
    bathrooms: 2,
    area: "2.5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 11.57.27 AM.jpeg",
    description:
      "A well-designed 2.5 marla single storey family house with practical space planning, comfortable bedrooms and essential residential amenities in Arabian City, Lahore.",
    features: [
      "Single Storey",
      "Car Parking",
      "Modern Kitchen",
      "Drawing Room",
      "TV Lounge",
      "Security",
    ],
  },

  {
    id: "house-2",
    title: "Modern 2.5 Marla 1.5 Storey House",
    location: "Arabian City, Lahore",
    price: "PKR 60 Lacs",
    priceValue: 6000000,
    type: "House",
    purpose: "For Sale",
    size: "2.5 Marla",
    bedrooms: 3,
    bathrooms: 3,
    area: "2.5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 11.57.27 AM.jpeg",
    description:
      "A modern 2.5 marla one-and-a-half storey house offering smart space utilization, contemporary interiors and comfortable living spaces in Arabian City, Lahore.",
    features: [
      "1.5 Storey",
      "Car Parking",
      "Modern Kitchen",
      "Drawing Room",
      "TV Lounge",
      "Security",
    ],
  },

  {
    id: "house-3",
    title: "Modern 2.5 Marla Double Storey House",
    location: "Arabian City, Lahore",
    price: "PKR 70 Lacs",
    priceValue: 7000000,
    type: "House",
    purpose: "For Sale",
    size: "2.5 Marla",
    bedrooms: 3,
    bathrooms: 3,
    area: "2.5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 11.57.27 AM.jpeg",
    description:
      "A modern 2.5 marla double storey family house featuring smart space planning, contemporary interiors and essential residential amenities in Arabian City, Lahore.",
    features: [
      "Double Storey",
      "Car Parking",
      "Modern Kitchen",
      "Drawing Room",
      "TV Lounge",
      "Security",
    ],
  },

  {
    id: "house-4",
    title: "Spacious 3.5 Marla Single Storey House",
    location: "Arabian City, Lahore",
    price: "PKR 64 Lacs",
    priceValue: 6400000,
    type: "House",
    purpose: "For Sale",
    size: "3.5 Marla",
    bedrooms: 3,
    bathrooms: 3,
    area: "3.5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 11.57.27 AM.jpeg",
    description:
      "A spacious 3.5 marla single storey house designed for comfortable family living with practical layouts and essential modern amenities in Arabian City, Lahore.",
    features: [
      "Single Storey",
      "Car Parking",
      "Modern Kitchen",
      "Drawing Room",
      "TV Lounge",
      "Security",
    ],
  },

  {
    id: "house-5",
    title: "Modern 3.5 Marla 1.5 Storey House",
    location: "Arabian City, Lahore",
    price: "PKR 80 Lacs",
    priceValue: 8000000,
    type: "House",
    purpose: "For Sale",
    size: "3.5 Marla",
    bedrooms: 4,
    bathrooms: 3,
    area: "3.5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 11.57.27 AM.jpeg",
    description:
      "A modern 3.5 marla one-and-a-half storey house offering additional living space, contemporary interiors and practical family amenities in Arabian City, Lahore.",
    features: [
      "1.5 Storey",
      "Car Parking",
      "Modern Kitchen",
      "Drawing Room",
      "TV Lounge",
      "Security",
    ],
  },

  {
    id: "house-6",
    title: "Modern 3.5 Marla Double Storey House",
    location: "Arabian City, Lahore",
    price: "PKR 95 Lacs",
    priceValue: 9500000,
    type: "House",
    purpose: "For Sale",
    size: "3.5 Marla",
    bedrooms: 4,
    bathrooms: 4,
    area: "3.5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 11.57.27 AM.jpeg",
    description:
      "A modern 3.5 marla double storey family house with well-planned living spaces, contemporary interiors and essential residential amenities in Arabian City, Lahore.",
    features: [
      "Double Storey",
      "Car Parking",
      "Modern Kitchen",
      "Drawing Room",
      "TV Lounge",
      "Security",
    ],
  },

  {
    id: "house-7",
    title: "Spacious 5 Marla Single Storey House",
    location: "Arabian City, Lahore",
    price: "PKR 95 Lacs",
    priceValue: 9500000,
    type: "House",
    purpose: "For Sale",
    size: "5 Marla",
    bedrooms: 3,
    bathrooms: 3,
    area: "5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 11.57.27 AM.jpeg",
    description:
      "A spacious 5 marla single storey family house offering comfortable rooms, practical space planning and modern residential amenities in Arabian City, Lahore.",
    features: [
      "Single Storey",
      "Car Parking",
      "Modern Kitchen",
      "Drawing Room",
      "TV Lounge",
      "Security",
    ],
  },

  {
    id: "house-8",
    title: "Modern 5 Marla 1.5 Storey House",
    location: "Arabian City, Lahore",
    price: "PKR 1 Crore 20 Lacs",
    priceValue: 12000000,
    type: "House",
    purpose: "For Sale",
    size: "5 Marla",
    bedrooms: 4,
    bathrooms: 4,
    area: "5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 11.57.27 AM.jpeg",
    description:
      "A modern 5 marla one-and-a-half storey house providing generous living space, contemporary interiors and practical family amenities in Arabian City, Lahore.",
    features: [
      "1.5 Storey",
      "Car Parking",
      "Modern Kitchen",
      "Drawing Room",
      "TV Lounge",
      "Security",
    ],
  },

  {
    id: "house-9",
    title: "Premium 5 Marla Double Storey House",
    location: "Arabian City, Lahore",
    price: "PKR 1 Crore 40 Lacs",
    priceValue: 14000000,
    type: "House",
    purpose: "For Sale",
    size: "5 Marla",
    bedrooms: 4,
    bathrooms: 4,
    area: "5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 11.57.27 AM.jpeg",
    description:
      "A premium 5 marla double storey family house featuring spacious living areas, modern interiors and essential residential amenities in Arabian City, Lahore.",
    features: [
      "Double Storey",
      "Car Parking",
      "Modern Kitchen",
      "Drawing Room",
      "TV Lounge",
      "Security",
    ],
  },


  // ─────────────────────────────────────────────
  // APARTMENTS
  // ─────────────────────────────────────────────

  {
    id: "apartment-3-5-ground",
    title: "Modern 3.5 Marla Apartment - Ground Floor",
    location: "Arabian City, Lahore",
    price: "PKR 53 Lacs",
    priceValue: 5300000,
    type: "Apartment",
    purpose: "For Sale",
    size: "3.5 Marla",
    floor: "Ground Floor",
    bedrooms: 2,
    bathrooms: 2,
    area: "3.5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 12.33.45 PM.jpeg",
    description:
      "A modern ground-floor apartment offering efficient living space, contemporary interiors and convenient residential facilities in Arabian City, Lahore.",
    features: [
      "Ground Floor",
      "Elevator",
      "Parking",
      "Security",
      "Modern Kitchen",
      "Balcony",
      "Backup Power",
    ],
  },

  {
    id: "apartment-3-5-first",
    title: "Modern 3.5 Marla Apartment - First Floor",
    location: "Arabian City, Lahore",
    price: "PKR 47 Lacs",
    priceValue: 4700000,
    type: "Apartment",
    purpose: "For Sale",
    size: "3.5 Marla",
    floor: "First Floor",
    bedrooms: 2,
    bathrooms: 2,
    area: "3.5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 12.33.45 PM.jpeg",
    description:
      "A modern first-floor apartment offering efficient living space, contemporary interiors and convenient residential facilities in Arabian City, Lahore.",
    features: [
      "First Floor",
      "Elevator",
      "Parking",
      "Security",
      "Modern Kitchen",
      "Balcony",
      "Backup Power",
    ],
  },

  {
    id: "apartment-3-5-second",
    title: "Modern 3.5 Marla Apartment - Second Floor",
    location: "Arabian City, Lahore",
    price: "PKR 44 Lacs",
    priceValue: 4400000,
    type: "Apartment",
    purpose: "For Sale",
    size: "3.5 Marla",
    floor: "Second Floor",
    bedrooms: 2,
    bathrooms: 2,
    area: "3.5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 12.33.45 PM.jpeg",
    description:
      "A modern second-floor apartment offering efficient living space, contemporary interiors and convenient residential facilities in Arabian City, Lahore.",
    features: [
      "Second Floor",
      "Elevator",
      "Parking",
      "Security",
      "Modern Kitchen",
      "Balcony",
      "Backup Power",
    ],
  },

  {
    id: "apartment-5-ground",
    title: "Modern 5 Marla Apartment - Ground Floor",
    location: "Arabian City, Lahore",
    price: "PKR 75 Lacs 90 Thousands",
    priceValue: 7590000,
    type: "Apartment",
    purpose: "For Sale",
    size: "5 Marla",
    floor: "Ground Floor",
    bedrooms: 3,
    bathrooms: 3,
    area: "5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 12.33.45 PM.jpeg",
    description:
      "A spacious ground-floor apartment offering modern interiors, comfortable bedrooms and convenient residential facilities in Arabian City, Lahore.",
    features: [
      "Ground Floor",
      "Elevator",
      "Parking",
      "Security",
      "Modern Kitchen",
      "Balcony",
      "Backup Power",
    ],
  },

  {
    id: "apartment-5-first",
    title: "Modern 5 Marla Apartment - First Floor",
    location: "Arabian City, Lahore",
    price: "PKR 65 Lacs 45 Thousands",
    priceValue: 6545000,
    type: "Apartment",
    purpose: "For Sale",
    size: "5 Marla",
    floor: "First Floor",
    bedrooms: 3,
    bathrooms: 3,
    area: "5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 12.33.45 PM.jpeg",
    description:
      "A spacious first-floor apartment offering modern interiors, comfortable bedrooms and convenient residential facilities in Arabian City, Lahore.",
    features: [
      "First Floor",
      "Elevator",
      "Parking",
      "Security",
      "Modern Kitchen",
      "Balcony",
      "Backup Power",
    ],
  },

  {
    id: "apartment-5-second",
    title: "Modern 5 Marla Apartment - Second Floor",
    location: "Arabian City, Lahore",
    price: "PKR 60 Lacs",
    priceValue: 6000000,
    type: "Apartment",
    purpose: "For Sale",
    size: "5 Marla",
    floor: "Second Floor",
    bedrooms: 3,
    bathrooms: 3,
    area: "5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 12.33.45 PM.jpeg",
    description:
      "A spacious second-floor apartment offering modern interiors, comfortable bedrooms and convenient residential facilities in Arabian City, Lahore.",
    features: [
      "Second Floor",
      "Elevator",
      "Parking",
      "Security",
      "Modern Kitchen",
      "Balcony",
      "Backup Power",
    ],
  },

  {
    id: "apartment-10-ground",
    title: "Luxury 10 Marla Apartment - Ground Floor",
    location: "Arabian City, Lahore",
    price: "PKR 1 Crore 21 Lacs",
    priceValue: 12100000,
    type: "Apartment",
    purpose: "For Sale",
    size: "10 Marla",
    floor: "Ground Floor",
    bedrooms: 4,
    bathrooms: 4,
    area: "10 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 12.33.45 PM.jpeg",
    description:
      "A spacious luxury ground-floor apartment offering generous living areas, modern interiors and convenient residential facilities in Arabian City, Lahore.",
    features: [
      "Ground Floor",
      "Elevator",
      "Parking",
      "Security",
      "Modern Kitchen",
      "Balcony",
      "Backup Power",
    ],
  },

  {
    id: "apartment-10-first",
    title: "Luxury 10 Marla Apartment - First Floor",
    location: "Arabian City, Lahore",
    price: "PKR 1 Crore 4 Lacs",
    priceValue: 10400000,
    type: "Apartment",
    purpose: "For Sale",
    size: "10 Marla",
    floor: "First Floor",
    bedrooms: 4,
    bathrooms: 4,
    area: "10 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 12.33.45 PM.jpeg",
    description:
      "A spacious luxury first-floor apartment offering generous living areas, modern interiors and convenient residential facilities in Arabian City, Lahore.",
    features: [
      "First Floor",
      "Elevator",
      "Parking",
      "Security",
      "Modern Kitchen",
      "Balcony",
      "Backup Power",
    ],
  },

  {
    id: "apartment-10-second",
    title: "Luxury 10 Marla Apartment - Second Floor",
    location: "Arabian City, Lahore",
    price: "PKR 93 Lacs 50 Thousands",
    priceValue: 9350000,
    type: "Apartment",
    purpose: "For Sale",
    size: "10 Marla",
    floor: "Second Floor",
    bedrooms: 4,
    bathrooms: 4,
    area: "10 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 12.33.45 PM.jpeg",
    description:
      "A spacious luxury second-floor apartment offering generous living areas, modern interiors and convenient residential facilities in Arabian City, Lahore.",
    features: [
      "Second Floor",
      "Elevator",
      "Parking",
      "Security",
      "Modern Kitchen",
      "Balcony",
      "Backup Power",
    ],
  },

  // ─────────────────────────────────────────────
  // PLOTS
  // ─────────────────────────────────────────────

  {
    id: "plot-1",
    title: "3.5 Marla Residential Plot",
    location: "Arabian City, Lahore",
    price: "PKR 18 Lacs 40 Thousands",
    priceValue: 1840000,
    type: "Plot",
    purpose: "For Sale",
    size: "3.5 Marla",
    bedrooms: 0,
    bathrooms: 0,
    area: "3.5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 3.11.56 PM (14).jpeg",
    description:
      "A residential 3.5 marla plot suitable for constructing a compact modern home in a developing residential area of Lahore.",
    features: [
      "Residential Plot",
      "Road Access",
      "Electricity",
      "Water",
      "Sewerage",
      "Secure Location",
    ],
  },

  {
    id: "plot-2",
    title: "5 Marla Residential Plot",
    location: "Arabian City, Lahore",
    price: "PKR 25 Lacs 50 Thousands",
    priceValue: 2550000,
    type: "Plot",
    purpose: "For Sale",
    size: "5 Marla",
    bedrooms: 0,
    bathrooms: 0,
    area: "5 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 3.11.56 PM (12).jpeg",
    description:
      "A 5 marla residential plot with convenient road access and essential utilities, suitable for building a family home.",
    features: [
      "Residential Plot",
      "Road Access",
      "Electricity",
      "Water",
      "Sewerage",
      "Secure Location",
    ],
  },

  {
    id: "plot-3",
    title: "8 Marla Residential Plot",
    location: "Arabian City, Lahore",
    price: "PKR 38 Lacs",
    priceValue: 3800000,
    type: "Plot",
    purpose: "For Sale",
    size: "8 Marla",
    bedrooms: 0,
    bathrooms: 0,
    area: "8 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 3.11.54 PM (2).jpeg",
    description:
      "An 8 marla residential plot providing a larger footprint for a spacious family home in Arabian City, Lahore.",
    features: [
      "Residential Plot",
      "Wide Road",
      "Electricity",
      "Water",
      "Sewerage",
      "Secure Location",
    ],
  },

  {
    id: "plot-4",
    title: "10 Marla Premium Residential Plot",
    location: "Arabian City, Lahore",
    price: "PKR 44 Lacs 50 Thousands",
    priceValue: 4450000,
    type: "Plot",
    purpose: "For Sale",
    size: "10 Marla",
    bedrooms: 0,
    bathrooms: 0,
    area: "10 Marla",
    image: "/images/WhatsApp Image 2026-09-21 at 3.11.54 PM (6).jpeg",
    description:
      "A premium 10 marla residential plot offering ample space for a large modern family residence in a well-connected Lahore location.",
    features: [
      "Residential Plot",
      "Prime Location",
      "Wide Road",
      "Electricity",
      "Water",
      "Sewerage",
      "Secure Location",
    ],
  },

  // ─────────────────────────────────────────────
  // FARMHOUSES
  // ─────────────────────────────────────────────

  {
    id: "farmhouse-1",
    title: "Modern 1 Kanal Farmhouse",
    location: "Arabian City, Lahore",
    price: "PKR 1.2 Crore",
    priceValue: 12000000,
    type: "Farmhouse",
    purpose: "For Sale",
    size: "1 Kanal",
    bedrooms: 4,
    bathrooms: 4,
    area: "1 Kanal",
    image: "/images/WhatsApp Image 2026-09-21 at 3.11.54 PM (20).jpeg",
    description:
      "A modern 1 kanal farmhouse designed for comfortable family living with open outdoor space, greenery and contemporary residential features.",
    features: [
      "Residential Plot",
      "Wide Road",
      "Electricity",
      "Water",
      "Sewerage",
      "Secure Location",
    ],
  },

  {
    id: "farmhouse-2",
    title: "Luxury 2 Kanal Farmhouse",
    location: "Arabian City, Lahore",
    price: "PKR 2 Crore",
    priceValue: 20000000,
    type: "Farmhouse",
    purpose: "For Sale",
    size: "2 Kanal",
    bedrooms: 5,
    bathrooms: 6,
    area: "2 Kanal",
    image: "/images/WhatsApp Image 2026-09-21 at 3.11.54 PM (17).jpeg",
    description:
      "A spacious 2 kanal farmhouse offering a premium lifestyle with large living areas, landscaped outdoor space and modern family amenities.",
    features: [
      "Residential Plot",
      "Wide Road",
      "Electricity",
      "Water",
      "Sewerage",
      "Secure Location",
    ],  
  },

  {
    id: "farmhouse-3",
    title: "Premium 4 Kanal Farmhouse",
    location: "Arabian City, Lahore",
    price: "PKR 3.5 Crore",
    priceValue: 35000000,
    type: "Farmhouse",
    purpose: "For Sale",
    size: "4 Kanal",
    bedrooms: 6,
    bathrooms: 7,
    area: "4 Kanal",
    image: "/images/WhatsApp Image 2026-09-21 at 3.11.54 PM (10).jpeg",
    description:
      "A premium 4 kanal farmhouse offering extensive outdoor space, spacious accommodation and a private environment for luxury family living.",
    features: [
      "Residential Plot",
      "Wide Road",
      "Electricity",
      "Water",
      "Sewerage",
      "Secure Location",
    ],    
  },
];