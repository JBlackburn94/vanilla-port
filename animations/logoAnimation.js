import gsap from "gsap";

const logoAnimation = () => {
  const logo = document.getElementById("logo");
  gsap.from(logo, { y: 100, opacity: 0, duration: 0.6, delay: 0.2 });
};

export default logoAnimation;
