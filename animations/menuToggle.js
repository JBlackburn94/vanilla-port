import gsap from "gsap";

const menuToggle = () => {
  const menu = document.getElementById("menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const body = document.body;
  let isOpen = false;

  gsap.set(mobileMenu, { display: "none" });

  menu.addEventListener("click", () => {
    if (!isOpen) {
      gsap.set(mobileMenu, { display: "block" });
      gsap.fromTo(mobileMenu, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      body.classList.add("no-scroll");
    } else {
      gsap.to(mobileMenu, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set(mobileMenu, { display: "none" });
          body.classList.remove("no-scroll");
        },
      });
    }
    isOpen = !isOpen;
  });
};

export default menuToggle;
