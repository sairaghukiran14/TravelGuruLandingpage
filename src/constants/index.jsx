import { MapPin, CalendarDays, Plane, Hotel, Camera, Users } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Destinations", href: "#" },
  { label: "Planner", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Alex Turner",
    company: "Globetrotter",
    image: user1,
    text: "The travel planner made my trip effortless! I could organize everything in one place and discover hidden gems along the way.",
  },
  {
    user: "Maria Lopez",
    company: "Adventure Seekers",
    image: user2,
    text: "I loved how easy it was to coordinate with friends and keep track of our itinerary. Highly recommended for group trips!",
  },
  {
    user: "Samir Patel",
    company: "Wanderlust Inc.",
    image: user3,
    text: "From booking flights to finding the best hotels, this planner had it all. My vacation was stress-free and memorable.",
  },
  {
    user: "Lina Chen",
    company: "Travel Tales",
    image: user4,
    text: "The collaborative features made planning with my family a breeze. We all stayed updated and excited for our journey.",
  },
  {
    user: "James Smith",
    company: "ExploreMore",
    image: user5,
    text: "I discovered amazing local experiences thanks to the recommendations. The planner is intuitive and packed with useful tools.",
  },
  {
    user: "Sophie Dubois",
    company: "Voyageur",
    image: user6,
    text: "Managing bookings, activities, and budgets in one place saved me so much time. I’ll use this for every trip!",
  },
];

export const features = [
  {
    icon: <MapPin />,
    text: "Smart Destination Search",
    description:
      "Find and explore destinations with personalized recommendations based on your interests and travel history.",
  },
  {
    icon: <CalendarDays />,
    text: "Custom Itinerary Builder",
    description:
      "Easily create, edit, and share detailed travel itineraries with drag-and-drop simplicity.",
  },
  {
    icon: <Plane />,
    text: "Integrated Bookings",
    description:
      "Book flights, hotels, and activities directly from the planner for a seamless travel experience.",
  },
  {
    icon: <Hotel />,
    text: "Accommodation Finder",
    description:
      "Compare and reserve hotels, hostels, or vacation rentals that fit your budget and preferences.",
  },
  {
    icon: <Camera />,
    text: "Travel Memories",
    description:
      "Capture and organize your travel photos, notes, and experiences in a digital travel journal.",
  },
  {
    icon: <Users />,
    text: "Group Planning",
    description:
      "Collaborate with friends or family, assign tasks, and keep everyone updated in real time.",
  },
];

export const checklistItems = [
  {
    title: "Plan trips with ease",
    description:
      "Organize every aspect of your journey, from flights to sightseeing, in one place.",
  },
  {
    title: "Collaborate with travel buddies",
    description:
      "Invite friends and family to plan together and keep everyone in sync.",
  },
  {
    title: "Book and manage reservations",
    description:
      "Handle all your bookings and confirmations without leaving the planner.",
  },
  {
    title: "Track expenses and budgets",
    description:
      "Stay on top of your travel spending and split costs with your group.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic itinerary planning",
      "Up to 3 trips",
      "Collaborate with 2 friends",
      "Photo journal",
    ],
  },
  {
    title: "Pro",
    price: "$8",
    features: [
      "Unlimited trips",
      "Advanced itinerary tools",
      "Group planning (up to 10 people)",
      "Priority support",
    ],
  },
  {
    title: "Enterprise",
    price: "$50",
    features: [
      "Team travel management",
      "Custom integrations",
      "Unlimited collaborators",
      "Dedicated account manager",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Travel Guides" },
  { href: "#", text: "Packing Tips" },
  { href: "#", text: "FAQ" },
  { href: "#", text: "Support" },
];

export const platformLinks = [
  { href: "#", text: "Mobile App" },
  { href: "#", text: "Web App" },
  { href: "#", text: "Integrations" },
  { href: "#", text: "Offline Mode" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Travel Stories" },
  { href: "#", text: "Forums" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Photo Contests" },
  { href: "#", text: "Jobs" },
];
