import testimonialsImage1 from "@/public/assets/images/model/Testimonials-2.jpg";
import testimonialsImage2 from "@/public/assets/images/model/Testimonials-3.jpg";
import testimonialsImage3 from "@/public/assets/images/model/Testimonials-4.jpg";
import testimonialsImage4 from "@/public/assets/images/model/Testimonials-5.jpg";
import testimonialsImage5 from "@/public/assets/images/model/Testimonials-6.jpg";
import { TTranslations } from "@/src/hooks";

// ----------------------------

export const EXAMPLE_PACKAGES_DATA = [
  {
    description: [
      { id: 1, text: "Unlimited Photos" },
      { id: 2, text: "High-Resolution Images" },
      { id: 3, text: "Photo Editing" },
      { id: 4, text: "Online Gallery" },
      { id: 5, text: "Prints Available" },
    ],
    id: 1,
    price: "5000000",
    title: "PHOTOGRAPHY BASIC",
  },
  {
    description: [
      { id: 1, text: "Unlimited Photos" },
      { id: 2, text: "High-Resolution Images" },
      { id: 3, text: "Photo Editing" },
      { id: 4, text: "Online Gallery" },
      { id: 5, text: "Prints Available" },
      { id: 6, text: "Photo Album" },
    ],
    id: 2,
    price: "7000000",
    title: "PHOTOGRAPHY STANDARD",
  },
  {
    description: [
      { id: 1, text: "Unlimited Photos" },
      { id: 2, text: "High-Resolution Images" },
      { id: 3, text: "Photo Editing" },
      { id: 4, text: "Online Gallery" },
      { id: 5, text: "Prints Available" },
      { id: 6, text: "Photo Album" },
      { id: 7, text: "Framed Prints" },
    ],
    id: 3,
    price: "10000000",
    title: "PHOTOGRAPHY PREMIUM",
  },
  {
    description: [
      { id: 1, text: "Unlimited Photos" },
      { id: 2, text: "High-Resolution Images" },
      { id: 3, text: "Photo Editing" },
      { id: 4, text: "Online Gallery" },
      { id: 5, text: "Prints Available" },
      { id: 6, text: "Photo Album" },
      { id: 7, text: "Framed Prints" },
      { id: 8, text: "Custom Photo Book" },
    ],
    id: 4,
    price: "15000000",
    title: "PHOTOGRAPHY ULTIMATE",
  },
  {
    description: [
      { id: 1, text: "Full HD Video" },
      { id: 2, text: "Video Editing" },
      { id: 3, text: "Highlight Reel" },
      { id: 4, text: "Online Delivery" },
      { id: 5, text: "DVD Copy" },
    ],
    id: 5,
    price: "8000000",
    title: "VIDEOGRAPHY BASIC",
  },
  {
    description: [
      { id: 1, text: "Full HD Video" },
      { id: 2, text: "Video Editing" },
      { id: 3, text: "Highlight Reel" },
      { id: 4, text: "Online Delivery" },
      { id: 5, text: "DVD Copy" },
      { id: 6, text: "Drone Footage" },
    ],
    id: 6,
    price: "12000000",
    title: "VIDEOGRAPHY STANDARD",
  },
  {
    description: [
      { id: 1, text: "Full HD Video" },
      { id: 2, text: "Video Editing" },
      { id: 3, text: "Highlight Reel" },
      { id: 4, text: "Online Delivery" },
      { id: 5, text: "DVD Copy" },
      { id: 6, text: "Drone Footage" },
      { id: 7, text: "Custom USB Drive" },
    ],
    id: 7,
    price: "18000000",
    title: "VIDEOGRAPHY PREMIUM",
  },
  {
    description: [
      { id: 1, text: "Full HD Video" },
      { id: 2, text: "Video Editing" },
      { id: 3, text: "Highlight Reel" },
      { id: 4, text: "Online Delivery" },
      { id: 5, text: "DVD Copy" },
      { id: 6, text: "Drone Footage" },
      { id: 7, text: "Custom USB Drive" },
      { id: 8, text: "Feature Film" },
    ],
    id: 8,
    price: "25000000",
    title: "VIDEOGRAPHY ULTIMATE",
  },
];

// ----------------------------

export const NAVIGATION_DATA = (dt?: TTranslations) => [
  { href: "#home", id: 1, label: dt?.navigation[0] },
  { href: "#about", id: 2, label: dt?.navigation[1] },
  { href: "#portfolio", id: 3, label: dt?.navigation[2] },
  { href: "#packages", id: 4, label: dt?.navigation[3] },
  { href: "#contact", id: 5, label: dt?.navigation[4] },
];

// ----------------------------

export const TIME_SLOTS_DATA = [
  { id: 1, time: "06:00 - 09:00" },
  { id: 2, time: "10:00 - 13:00" },
  { id: 3, time: "14:00 - 17:00" },
  { id: 4, time: "18:00 - 21:00" },
  { id: 5, time: "22:00 - 01:00" },
  { id: 6, time: "02:00 - 05:00" },
];

// ----------------------------

export const PACKAGES_DATA = (dt?: TTranslations) => [
  {
    description: dt?.packages.list[0],
    id: 1,
    price: "3500000",
    title: "WEDDING A",
  },
  {
    description: dt?.packages.list[1],
    id: 2,
    price: "2500000",
    title: "WEDDING B",
  },
  {
    description: dt?.packages.list[2],
    id: 3,
    price: "1500000",
    title: "WEDDING C",
  },
  {
    description: dt?.packages.list[3],
    id: 4,
    price: "450000",
    title: "PREWEDDING",
  },
  {
    description: dt?.packages.list[4],
    id: 5,
    price: "350000",
    title: "ENGAGEMENT",
  },
  {
    description: dt?.packages.list[5],
    id: 6,
    price: "300000",
    title: "GRADUATION",
  },
  {
    description: dt?.packages.list[6],
    id: 7,
    price: "200000",
    title: "REGULAR",
  },
];

// ----------------------------

export const TESTIMONIALS_DATA = (dt?: TTranslations) => [
  {
    id: 1,
    image: testimonialsImage3,
    name: "Emily Carter",
    rating: 5,
    role: dt?.testimonials.list[1].role,
    word: dt?.testimonials.list[1].word,
  },
  {
    id: 2,
    image: testimonialsImage2,
    name: "Linda Martinez",
    rating: 5,
    role: dt?.testimonials.list[2].role,
    word: dt?.testimonials.list[2].word,
  },
  {
    id: 3,
    image: testimonialsImage1,
    name: "Sarah Anderson",
    rating: 5,
    role: dt?.testimonials.list[3].role,
    word: dt?.testimonials.list[3].word,
  },
  {
    id: 4,
    image: testimonialsImage4,
    name: "Jessica Lee",
    rating: 5,
    role: dt?.testimonials.list[4].role,
    word: dt?.testimonials.list[4].word,
  },
  {
    id: 5,
    image: testimonialsImage5,
    name: "Sophia Wilson",
    rating: 5,
    role: dt?.testimonials.list[5].role,
    word: dt?.testimonials.list[5].word,
  },
];

// ----------------------------

export const SUGGESTIONS_DATA = [
  "Professional Service",
  "Excellent Makeup Skills",
  "Highly Recommended",
  "Friendly and Attentive",
  "On Time and Punctual",
  "Affordable Pricing",
  "Clean & Hygienic Tools",
  "Creative and Trendy Styles",
  "Perfect Color Matching",
  "Long-lasting Makeup",
  "Comfortable Application",
  "Attention to Detail",
  "Customized Look",
  "Patient and Understanding",
  "Skilled Makeup Artist",
];

// ----------------------------

const options = {
  A: ["SS", "S", "N", "TS", "ST"],
  B: ["Selalu", "Sering", "Kadang-kadang", "Jarang", "Tidak pernah"],
};

export const QUESTIONS_DATA = [
  {
    id: 1,
    options: options.A,
    question: "Apakah informasi yang disediakan di website kami mudah dipahami dan diakses?",
  },
  {
    id: 2,
    options: options.A,
    question: "Seberapa baik penampilan fisik tempat layanan makeup kami?",
  },
  {
    id: 3,
    options: options.B,
    question: "Seberapa sering Anda mendapatkan layanan yang sesuai dengan deskripsi yang diberikan?",
  },
  {
    id: 4,
    options: options.A,
    question: "Apakah Anda merasa bahwa kami memenuhi janji waktu yang telah ditentukan untuk layanan?",
  },
  {
    id: 5,
    options: options.A,
    question: "Seberapa baik tim kami dalam memberikan informasi yang Anda butuhkan sebelum layanan?",
  },
  {
    id: 6,
    options: options.A,
    question: "Apakah Anda merasa bahwa kami memberikan solusi yang memadai untuk masalah atau keluhan yang Anda ajukan?",
  },
  {
    id: 7,
    options: options.A,
    question:
      "Seberapa baik Anda merasa bahwa staf kami memiliki pengetahuan dan keterampilan yang diperlukan untuk memberikan layanan yang berkualitas?",
  },
  {
    id: 8,
    options: options.A,
    question: "Apakah Anda merasa bahwa kami menjaga privasi dan kerahasiaan informasi Anda selama menggunakan layanan kami?",
  },
  {
    id: 9,
    options: options.A,
    question: "Seberapa baik tim kami mendengarkan dan memahami kekhawatiran Anda selama proses makeup?",
  },
  {
    id: 10,
    options: options.A,
    question: "Apakah Anda merasa bahwa kami memberikan layanan yang dipersonalisasi sesuai dengan preferensi Anda?",
  },
  {
    id: 11,
    options: options.A,
    question: "Seberapa puas Anda dengan harga yang Anda bayar untuk layanan yang Anda terima?",
  },
  {
    id: 12,
    options: options.A,
    question: "Apakah Anda akan merekomendasikan layanan kami kepada teman atau keluarga?",
  },
  {
    id: 13,
    options: "textarea",
    question: "Apa yang dapat kami lakukan untuk meningkatkan pengalaman Anda di masa mendatang?",
  },
];
