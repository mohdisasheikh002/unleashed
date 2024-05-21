let imgAnim = gsap.timeline({ repeat: -1 });

if (window.screen.width < 900) {
  imgAnim.to(".i1", {
    opacity: "1",
    ease: Expo.easeInOut,
    duration: 2.5,
  });

  imgAnim.to(".i1", {
    width: "0%",
    ease: Expo.easeInOut,
    delay: 1,
    duration: 2,
    onComplete: () => {
      let num = document.querySelector(".num-box .fs5");
      num.innerHTML = "02";
    },
  });

  imgAnim.to(
    ".i2",
    {
      opacity: "1",
      ease: Expo.easeInOut,
      duration: 2.5,
    },
    "-=1.1"
  );

  imgAnim.to(".i2", {
    width: "0%",
    ease: Expo.easeInOut,
    delay: 1,
    duration: 2,
    onComplete: () => {
      let num = document.querySelector(".num-box .fs5");
      num.innerHTML = "03";
    },
  });

  imgAnim.to(
    ".i3",
    {
      opacity: "1",
      ease: Expo.easeInOut,
      duration: 2.5,
    },
    "-=1.1"
  );

  imgAnim.to(".i3", {
    width: "0%",
    ease: Expo.easeInOut,
    delay: 1,
    duration: 2,
    onComplete: () => {
      let num = document.querySelector(".num-box .fs5");
      num.innerHTML = "01";
    },
  });

  let textAnim = gsap.timeline({ repeat: -1 });

  textAnim.to(".t1", {
    top: "0%",
    ease: Expo.easeInOut,
    duration: 2.5,
  });

  textAnim.to(".t1", {
    top: "100%",
    ease: Expo.easeInOut,
    delay: 1,
    duration: 2,
  });

  textAnim.to(
    ".t2",
    {
      top: "0%",
      ease: Expo.easeInOut,
      duration: 2.5,
    },
    "-=1.1"
  );

  textAnim.to(".t2", {
    top: "100%",
    ease: Expo.easeInOut,
    delay: 1,
    duration: 2,
  });

  textAnim.to(
    ".t3",
    {
      top: "0%",
      ease: Expo.easeInOut,
      duration: 2.5,
    },
    "-=1.1"
  );

  textAnim.to(".t3", {
    top: "100%",
    ease: Expo.easeInOut,
    delay: 1,
    duration: 2,
  });

  gsap.to(".st", {
    repeat: -1,
    x: "-100%",
    ease: "linear",
    duration: 6,
  });
} else {
  imgAnim.to(".i1", {
    opacity: "1",
    ease: Expo.easeInOut,
    duration: 2.5,
  });

  imgAnim.to(".i1", {
    height: "0%",
    ease: Expo.easeInOut,
    delay: 1,
    duration: 2,
    onComplete: () => {
      let num = document.querySelector(".num-box .fs5");
      num.innerHTML = "02";
    },
  });

  imgAnim.to(
    ".i2",
    {
      opacity: "1",
      ease: Expo.easeInOut,
      duration: 2.5,
    },
    "-=1.1"
  );

  imgAnim.to(".i2", {
    height: "0%",
    ease: Expo.easeInOut,
    delay: 1,
    duration: 2,
    onComplete: () => {
      let num = document.querySelector(".num-box .fs5");
      num.innerHTML = "03";
    },
  });

  imgAnim.to(
    ".i3",
    {
      opacity: "1",
      ease: Expo.easeInOut,
      duration: 2.5,
    },
    "-=1.1"
  );

  imgAnim.to(".i3", {
    height: "0%",
    ease: Expo.easeInOut,
    delay: 1,
    duration: 2,
    onComplete: () => {
      let num = document.querySelector(".num-box .fs5");
      num.innerHTML = "01";
    },
  });

  let textAnim = gsap.timeline({ repeat: -1 });

  textAnim.to(".t1", {
    top: "0%",
    ease: Expo.easeInOut,
    duration: 2.5,
  });

  textAnim.to(".t1", {
    top: "100%",
    ease: Expo.easeInOut,
    delay: 1,
    duration: 2,
  });

  textAnim.to(
    ".t2",
    {
      top: "0%",
      ease: Expo.easeInOut,
      duration: 2.5,
    },
    "-=1.1"
  );

  textAnim.to(".t2", {
    top: "100%",
    ease: Expo.easeInOut,
    delay: 1,
    duration: 2,
  });

  textAnim.to(
    ".t3",
    {
      top: "0%",
      ease: Expo.easeInOut,
      duration: 2.5,
    },
    "-=1.1"
  );

  textAnim.to(".t3", {
    top: "100%",
    ease: Expo.easeInOut,
    delay: 1,
    duration: 2,
  });

  gsap.to(".st", {
    repeat: -1,
    x: "-100%",
    ease: "linear",
    duration: 6,
  });
}

const text = document.querySelector(".text");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
  )
  .join("");
