import "./style.css";
import { createIcons, Menu } from "lucide";
import logoAnimation from "./animations/logoAnimation";
import menuButtonAnimation from "./animations/menuButtonAnimation";
import menuToggle from "./animations/menuToggle";
import menuIconAnimations from "./animations/menuIconAnimations";
import menuOpen from "./animations/menuTextAnimation";

createIcons({
  icons: {
    Menu,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  logoAnimation();
  menuButtonAnimation();
  menuToggle();
  menuIconAnimations();
  menuOpen();

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
