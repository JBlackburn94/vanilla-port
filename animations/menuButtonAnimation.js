import gsap from "gsap";

const menuButtonAnimation = () => {
  const menu = document.getElementById("menu");
  let isRotated = false;

  gsap.from(menu, { y: 100, opacity: 0, duration: 0.6, delay: 0.3 });

  menu.addEventListener("click", () => {
    if (isRotated) {
      gsap.to(menu, { rotate: 0, duration: 0.2 });
    } else {
      gsap.to(menu, { rotate: 90, duration: 0.2 });
    }
    isRotated = !isRotated;
  });
};

export default menuButtonAnimation;
