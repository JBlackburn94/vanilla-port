import gsap from "gsap";

const menuTextAnimation = () => {
  const listContainers = document.querySelectorAll(".list-container");

  gsap.from(Array.from(listContainers), {
    y: 100,
    duration: 0.2,
    stagger: 0.1,
  });
};

const menuOpen = () => {
  const menuButton = document.getElementById("menu");

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      menuTextAnimation();
    });
  }
};

export default menuOpen;
