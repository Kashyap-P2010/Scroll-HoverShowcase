gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hidden"); 
  setTimeout(() => {
    preloader.remove(); 
  }, 500); 
});

window.addEventListener("scroll", () => {
  const progress =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});

gsap.to(".cover-card", {
  scrollTrigger: {
    trigger: "#transform-header",
    start: "top top",
    scrub: true,
    pin: true,
  },
  scale: 0.5,
  borderRadius: "10px",
});

gsap.utils.toArray(".reveal-image").forEach((img) => {
  gsap.to(img, {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: img,
      start: "top 80%",
      end: "top 50%",
      scrub: true,
    },
  });
});

gsap.to(".carousel-item", {
  xPercent: -100,
  scrollTrigger: {
    trigger: "#carousel-section",
    start: "top 80%",
    scrub: true,
  },
});

gsap.to(".stack-card", {
  y: 100,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#stacking-cards",
    start: "top 80%",
    scrub: true,
  },
});
