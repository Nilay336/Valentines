
import { ValentineDay, DayConfig } from './types';

export const VALENTINE_DAYS: DayConfig[] = [
  {
    id: ValentineDay.ROSE,
    title: "Rose Day",
    date: "Feb 7",
    icon: "🌹",
    color: "from-rose-500 to-red-600",
    secondaryColor: "bg-rose-100",
    description: "Start the week of love with the timeless beauty of a rose. Each color tells a different story.",
    prompt: "Write a short, romantic poem about different colors of roses and their meanings for Rose Day.",
    visualUrl: "https://picsum.photos/seed/rose/800/600"
  },
  {
    id: ValentineDay.PROPOSE,
    title: "Propose Day",
    date: "Feb 8",
    icon: "💍",
    color: "from-blue-400 to-indigo-600",
    secondaryColor: "bg-blue-100",
    description: "Gather your courage and express your heart's truest feelings to that special someone.",
    prompt: "Generate 3 unique and romantic ways to propose to a partner, ranging from simple to grand.",
    visualUrl: "https://picsum.photos/seed/propose/800/600"
  },
  {
    id: ValentineDay.CHOCOLATE,
    title: "Chocolate Day",
    date: "Feb 9",
    icon: "🍫",
    color: "from-amber-700 to-orange-900",
    secondaryColor: "bg-amber-100",
    description: "Life is like a box of chocolates, but today is for sharing the sweetest ones with your love.",
    prompt: "Describe the 'perfect chocolate experience' and write a sweet message to send with a box of chocolates.",
    visualUrl: "https://picsum.photos/seed/chocolate/800/600"
  },
  {
    id: ValentineDay.TEDDY,
    title: "Teddy Day",
    date: "Feb 10",
    icon: "🧸",
    color: "from-orange-300 to-orange-500",
    secondaryColor: "bg-orange-50",
    description: "Something soft to hold when you can't be there. A teddy bear is a hug that lasts forever.",
    prompt: "Write a 'bear-y' cute and pun-filled message for Teddy Day to make someone smile.",
    visualUrl: "https://picsum.photos/seed/teddy/800/600"
  },
  {
    id: ValentineDay.PROMISE,
    title: "Promise Day",
    date: "Feb 11",
    icon: "🤝",
    color: "from-emerald-400 to-teal-600",
    secondaryColor: "bg-emerald-100",
    description: "Build a foundation of trust. Make promises that come from the soul and intend to keep them.",
    prompt: "Generate a list of 5 meaningful relationship promises that aren't just clichés.",
    visualUrl: "https://picsum.photos/seed/promise/800/600"
  },
  {
    id: ValentineDay.HUG,
    title: "Hug Day",
    date: "Feb 12",
    icon: "🫂",
    color: "from-pink-400 to-rose-400",
    secondaryColor: "bg-pink-100",
    description: "A simple hug can heal a thousand wounds. Feel the warmth of a heart beating against yours.",
    prompt: "Write a cozy paragraph about the science and soul of a warm hug.",
    visualUrl: "https://picsum.photos/seed/hug/800/600"
  },
  {
    id: ValentineDay.KISS,
    title: "Kiss Day",
    date: "Feb 13",
    icon: "💋",
    color: "from-red-500 to-rose-700",
    secondaryColor: "bg-red-100",
    description: "The ultimate expression of passion. A silent conversation between two souls.",
    prompt: "Write a poetic description of a first kiss and its magic.",
    visualUrl: "https://picsum.photos/seed/kiss/800/600"
  },
  {
    id: ValentineDay.VALENTINE,
    title: "Valentine's Day",
    date: "Feb 14",
    icon: "💝",
    color: "from-fuchsia-600 to-pink-600",
    secondaryColor: "bg-fuchsia-100",
    description: "The culmination of love. A day to celebrate the bond that makes everything beautiful.",
    prompt: "Write an epic, grand declaration of love for Valentine's Day that summarizes a beautiful journey together.",
    visualUrl: "https://picsum.photos/seed/valentine/800/600"
  }
];
