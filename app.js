const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const portfolioContainer = document.querySelector(".portfolios");

const portfolios = [
  {
    title: "Ai Powered : Collabrative Code editer",
    img: "img/ai_ss.png",
    github: "https://github.com/paramrai/ai_powered_coding_collab",
    demo: "https://ai-powered-coding-collab.vercel.app/",
    description:
      "A collaborative code editor with AI-powered features including chat prompts for code assistance, AI code edits, and real-time group chat using Socket.io. Users can sign up, create projects, invite collaborators, and code together in real-time. Future updates will include video chat functionality.",
  },
  {
    title: "Uber clone",
    img: "img/uber_ss.png",
    github: "https://github.com/paramrai/uberClone",
    demo: "https://uber-like.vercel.app/",
    description:
      "A full-stack Uber like app built with React and MongoDB featuring user authentication for riders and captains, real-time ride booking, geolocation-based navigation, OTP verification system, and ride tracking functionality.",
  },
  {
    title: "100+ Vanilla Js Projects",
    img: "img/vanilla_js.png",
    github: "https://github.com/paramrai/vanillaJs",
    demo: "https://master-vanilla-js.vercel.app/",
    description:
      "A collection of 100+ vanilla JavaScript projects showcasing various web development concepts including DOM manipulation, APIs, animations, games and interactive user interfaces built without any frameworks. More projects are being added continuously.",
  },
];

portfolios.forEach((portfolio, i) => {
  let element = document.createElement("div");
  element.className = "portfolio-item";
  element.innerHTML = `
  <div class="image">
    <img src="${portfolio.img}" alt="" />
      <span class="number"># ${i + 1}</span>
      <span class="title">${portfolio.title}</span>
  </div>
  <div class="hover-items" title="${portfolio.description}">
    <h3>Project Source</h3>
    <div class="icons">
      <a href="${
        portfolio.github
      }" target="_blank" class="icon" title="See code"
        ><i class="fab fa-github"></i
      ></a>
      <a href="${
        portfolio.demo
      }" target="_blank" class="icon" title="See live demo"
        ><i class="fa fa-link"></i
      ></a>
    </div>
  </div>
  `;
  portfolioContainer.appendChild(element);
});

function PageTransition() {
  // button click active class
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");

      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.classList.add("active-btn");
    });
  }

  // section active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    if (id) {
      // hide other section
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  // toggle theme
  const themeBtn = document.querySelector(".theme-btn");

  themeBtn.addEventListener("click", (e) => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

function handleWorkClick() {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    if (section.id === "portfolio") {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });

  secBtn.forEach((btn) => {
    const id = btn.getAttribute("data-id");
    if (id === "portfolio") {
      btn.classList.add("active-btn");
    } else {
      btn.classList.remove("active-btn");
    }
  });
}

PageTransition();
