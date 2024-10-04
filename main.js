import "./style.css";
import { createIcons, Menu } from "lucide";
import { gsap } from "gsap";
import logoAnimation from "./animations/logoAnimation";
import menuButtonAnimation from "./animations/menuButtonAnimation";

createIcons({
  icons: {
    Menu,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  logoAnimation();
  menuButtonAnimation();

  const links = [
    {
      name: "What We Do",
      url: "#",
    },
    {
      name: "Why We Do It",
      url: "#",
    },
    {
      name: "Who We Work With",
      url: "#",
    },
    {
      name: "Insights",
      url: "#",
    },
    {
      name: "Join Our Team",
      url: "#",
    },
    {
      name: "Get In Touch",
      url: "#",
    },
  ];

  const heading = [
    {
      word: "Great",
    },
    {
      word: "Digital",
    },
    {
      word: "For",
    },
    {
      word: "Good",
    },
  ];
});
