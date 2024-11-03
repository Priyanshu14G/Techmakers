import { Rocket, Shield, Star, LineChart,RefreshCcw, Users, Cpu, User, Bell, Grid, Link } from 'lucide-react';

import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import user6 from "../assets/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];
export const testimonials = [
    {
      user: "John Doe",
      company: "Stellar Solutions",
      image: user1,
      text: "I am extremely satisfied with the service. The team was responsive and professional, delivering results beyond my expectations. I couldn't thank them enough.",
    },
    {
      user: "Jane Smith",
      company: "Blue Horizon Technologies",
      image: user2,
      text: "I couldn’t be happier with the outcome. The team's creativity and problem-solving skills were essential in realizing our vision. We are extremely happy with the results.",
    },
    {
      user: "David Johnson",
      company: "Quantum Innovations",
      image: user3,
      text: "Working with this company was a pleasure. Their attention to detail and excellence were commendable. I highly recommend their services and expertise.",
    },
    {
      user: "Ronee Brown",
      company: "Fusion Dynamics",
      image: user4,
      text: "The team at XYZ Company transformed our project. Their detailed attention and innovative solutions helped us meet our goals quickly. We are thankful.",
    },
    {
      user: "Michael Wilson",
      company: "Visionary Creations",
      image: user5,
      text: "I am impressed by the professionalism and dedication shown. They exceeded expectations and delivered outstanding results for our project.",
    },
    {
      user: "Emily Davis",
      company: "Synergy Systems",
      image: user6,
      text: "The team went above and beyond for our project. Their unmatched expertise and dedication were crucial for our success. Looking forward to more.",
    },
  ];
  

export const features = [
  {
    icon: <Cpu />,
    text: "AI-Powered Diagnostics",
    description:
      "Get precise diagnoses with AI analyzing your health data for key patterns and insights.",
  },
  {
    icon: <LineChart />,
    text: "Predictive Health Analytics",
    description:
      "Anticipate future health risks and receive personalized preventive advice based on your data",
  },
  {
    icon: <User />,
    text: "Personalized Treatment Recommendations",
    description:
      "Receive customized treatment plans tailored to your unique medical history.",
  },
  {
    icon: <Bell />,
    text: "Real-Time Monitoring & Alerts",
    description:
      "Monitor your health in real time with instant alerts for any significant changes in your vitals", 
  },
  {
    icon: <Grid />,
    text: "Comprehensive Patient Management Dashboard",
    description:
      "Track your health data and treatment plans easily with our dashboard.",
  },
  {
    icon: <Link />,
    text: "Seamless Integration & Accessibility",
    description:
      "Access your health information with support across all devices.",
  },
];



export const checklistItems = [
    {
        title: "Quick and Secure Login",
        description:
          "Start by logging in and setting up your health profile effortlessly.",
      }, 
    {
      title: "Share Your Queries with Our Chatbot",
      description:
        "Describe your symptoms to our smart AI chatbot for a rapid initial assessment.",
    },
    {
      title: "Upload Medical History and Reports",
      description:
        "Provide your past medical records and reports to enhance diagnostic accuracy.",
    },
    {
      title: "Receive an Instant AI Diagnosis",
      description:
        "Get an on-the-spot diagnosis powered by advanced AI analytics.",
    },
    {
      title: "Access Tailored Health Recommendations",
      description:
        "Receive customized treatment suggestions and health tips based on your unique needs.",
    },
    {
      title: "Find Trusted Local Doctors",
      description:
        "Easily discover and connect with healthcare providers in your area.",
    }, {
      title: "Seamlessly Book Your Appointment",
      description:
        "Schedule a consultation with a local doctor with just a few clicks.",
    }, 
  ];
  

export const pricingOptions = [
  {
    title: "Basic",
    price: "Rs 0",
    features: [
      "AI-driven symptom analysis",
      "Basic diagnosis and recommendations",
      "Access to local doctors",
      "Secure medical report storage",
    ],
  },
  {
    title: "Standard",
    price: "Rs 299.99",
    features: [
      "Advanced diagnostics with personalized recommendations",
      "Real-time monitoring and alerts",
      "Priority access to doctors",
      "Dedicated customer support",
    ],
  },
  {
    title: "Premium",
    price: "Rs 499.99",
    features: [
      "Unlimited consultations with top specialists",
      "Detailed health analytics and progress tracking",
      "Custom wellness and prevention plans",
      ,
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];