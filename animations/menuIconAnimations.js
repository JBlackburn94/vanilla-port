import gsap from "gsap";

const menuIconAnimations = () => {
  const icons = document.querySelectorAll(".visible-icon");
  const iconContainers = document.querySelectorAll(".list-container");
  const hiddenIcons = document.querySelectorAll(".hidden-icon");

  iconContainers.forEach((iconContainer) => {
    const icons = iconContainer.querySelectorAll(".visible-icon");
    const hiddenIcons = iconContainer.querySelectorAll(".hidden-icon");

    let hoverAnimations = [];

    iconContainer.addEventListener("mouseenter", () => {
      hoverAnimations.forEach((animation) => animation.kill());
      hoverAnimations = [
        gsap.to(icons, { x: 20, duration: 0.3, transition: "ease-in-out" }),
        gsap.to(hiddenIcons, { x: 20, duration: 0.3, delay: 0.2 }),
      ];
    });

    iconContainer.addEventListener("mouseleave", () => {
      hoverAnimations.forEach((animation) => animation.kill());
      hoverAnimations = [
        gsap.to(icons, {
          x: 0,
          duration: 0.3,
          transition: "ease-in-out",
          delay: 0.2,
        }),
        gsap.to(hiddenIcons, { x: 0, duration: 0.3 }),
      ];
    });
  });
};

export default menuIconAnimations;
