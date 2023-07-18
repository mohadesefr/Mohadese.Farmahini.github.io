// .................start highlight nav menu
let highlightNav = () => {
  let sections = document.querySelectorAll("section");
  let navLink = document.querySelectorAll(".navigation-list .navigation li a");
  const menu = document.getElementById('dark-theme');

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY > sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
        menu.classList.add('box-shadow');
      }
    });

    navLink.forEach((a) => {
      a.classList.remove("active");

      if (a.classList.contains(currentSection)) {
        a.classList.add("active");
      }
    });
    if (scrollY === 0){
      menu.classList.remove('box-shadow');

    }
  });
};

highlightNav();
// .................end highlight nav menu

// .................start loading Animation

// .................end loading Animation

// .................start dark theme
let darkBtn = document.getElementById("dark-btn");
let btnDarkText = document.getElementById("btn-dark-text");
let btnDarkIcon = document.getElementById("btn-dark-icon");
let bgDark = document.getElementById("dark-theme");
let textDark = document.querySelectorAll("li > a");
let darkTitleSkill = document.querySelectorAll(".title-skill");
let form = document.getElementById("form");
let footerBg = document.getElementById("footer");
let hoverIconSocial = document.querySelectorAll(".social");
let inputText = document.querySelectorAll(".input");
let hireMeContent = document.querySelectorAll(".hire-me-content > *")
let bgBurgerMenu = document.getElementsByClassName('navigation-list')[0];

darkBtn.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    btnDarkIcon.src = "assets/sun.png";
    btnDarkText.innerHTML = "Light";
    bgDark.classList.add("dark-bg");
    form.classList.add("form-bg-dark");
    footerBg.classList.add("form-bg-dark");

    textDark.forEach((a) => {
      a.classList.add("dark-content");
    });

    darkTitleSkill.forEach((title) => {
      title.classList.add("dark-color-title");
    });

    hoverIconSocial.forEach((icon) => {
      icon.classList.add("social-hover");
    });

    inputText.forEach((input) => {
      input.classList.add("focus-input");
    });

    hireMeContent.forEach ((text)=>{
      text.classList.add('dark-color-title')
    })

    bgBurgerMenu.classList.add('bg-dark-menu');
  } else {

    btnDarkIcon.src = "assets/moon.png";
    btnDarkText.innerHTML = "Dark";
    bgDark.classList.remove("dark-bg");
    form.classList.remove("form-bg-dark");
    footerBg.classList.remove("form-bg-dark");

    hoverIconSocial.forEach((icon) => {
      icon.classList.remove("social-hover");
    });

    textDark.forEach((a) => {
      a.classList.remove("dark-content");
    });

    inputText.forEach((input) => {
      input.classList.remove("focus-input");
    });
    bgBurgerMenu.classList.remove('bg-dark-menu');

  }
};
// .................end dark theme

// .................start portfolio js
const title = [
  {
    num: 1,
    sub: "grid",
    img: "assets/grid.jpg",
    href: "https://github.com/mohadesefr/grid-style",
  },
  {
    num: 2,
    sub: "js",
    img: "assets/menu-js.jpg",
    href: "https://github.com/mohadesefr/cafe-menu",
  },
  {
    num: 3,
    sub: "js",
    img: "assets/slider.jpg",
    href: "https://github.com/mohadesefr/burger-menu-with-js",
  },
  {
    num: 4,
    sub: "sass",
    img: "assets/sass.jpg",
    href: "https://github.com/mohadesefr/sass-project",
  },
  {
    num: 5,
    sub: "css",
    img: "assets/mianterm.jpg",
    href: "https://github.com/mohadesefr/mid-term-",
  },
  {
    num: 6,
    sub: "bootstrap",
    img: "assets/fullstack.jpg",
    href: "https://github.com/mohadesefr/bootstrap",
  },
];

// add pictures in code
const addPicture = (imgOfTitle = []) => {
  document.getElementById("my-project").innerHTML = imgOfTitle
    .map(
      (image) =>
        `<a target="_blank" class="img-project-container" href="${image.href}">
  <img class="img-project" src="${image.img}" alt="" />
</a>`
    )
    .join(" ");
};

const setActiveClass = (li) => {
  if (li) {
    document.querySelectorAll(".sub-title").forEach((title) => {
      title.classList.remove("active-subject");
    });
    li.classList.add("active-subject");
  }
};

// create the titles of projects in a list
const addSubjects = () => {
  const subject = title.reduce(
    (sub, item) => {
      if (item && item.sub && !sub.includes(item.sub)) {
        sub.push(item.sub);
      }
      return sub;
    },
    ["all"]
  );

  // add titles to html code
  let finalSubjects = subject.map(
    (s) =>
      `<li class="title-style sub-title ${
        s === "all" ? "active-subject" : ""
      }" subject-id="${s}"> ${s} </li>`
  );
  console.log(finalSubjects);

  if (finalSubjects.length > 0) {
    document.getElementById("portfolio-titles").innerHTML =
      finalSubjects.join(" ");
  }

  // active title in each subject
  document.querySelectorAll(".sub-title").forEach((item) => {
    const subjectName = item.getAttribute("subject-id");

    item.addEventListener("click", function () {
      item.classList.add("active-subject");
      setActiveClass(item);

      if (subjectName === "all") {
        addPicture(title);
        return;
      }
      const filterTitles = title.filter((item) => item.sub === subjectName);
      addPicture(filterTitles);
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  addSubjects();
  addPicture(title);
});

// .................end portfolio js

// .................start slider js
const clients = [
  {
    id: 1,
    img: "assets/testimonials-1.jpeg",
    name: "Sara Wilsson",
    position: "Designer",
    quote:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias necessitatibus explicabo.",
  },
  {
    id: 2,
    img: "assets/testimonials-3.jpeg",
    name: "Jena Karlis",
    position: "Store Owner",
    quote:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias necessitatibus explicabo.",
  },
  {
    id: 3,
    img: "assets/testimonials-5.jpeg",
    name: "John Larson",
    position: "Entrepreneur",
    quote:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias necessitatibus explicabo.",
  },
  {
    id: 4,
    img: "assets/testimonials.jpeg",
    name: "Saul Goodman",
    position: "Ceo & Founder",
    quote:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias necessitatibus explicabo.",
  },
];

const clientImg = document.getElementById("testimonial-img");
const clientName = document.getElementById("testimonial-name");
const clientJop = document.getElementById("testimonial-job");
const clientQuote = document.getElementById("testimonial-text");

let currentClient = 0;

const setSlideData = (clientIndex) => {
  const client = clients[clientIndex];
  clientImg.src = client.img;
  clientName.textContent = client.name;
  clientJop.textContent = client.position;
  clientQuote.textContent = client.quote;
};

document.addEventListener("DOMContentLoaded", function () {
  setSlideData(0);
});

// button click
document.getElementById("next-slide").addEventListener("click", function () {
  if (currentClient >= 0 && currentClient < clients.length - 1) {
    currentClient++;
    setSlideData(currentClient);
  } else if (currentClient >= clients.length - 1) {
    currentClient = 0;
    setSlideData(currentClient);
  }
});

document
  .getElementById("Previous-slide")
  .addEventListener("click", function () {
    if (currentClient > 0) {
      currentClient--;
      setSlideData(currentClient);
    } else {
      currentClient = clients.length - 1;
      setSlideData(currentClient);
    }
  });

// .................end slider js
