// .................start loading Animation
// window.addEventListener('load', () => {
//   const loader = document.getElementById('container');
// })
// .................end loading Animation




// .................start portfolio js

const title = [
  {
    num: 1,
    sub: "grid",
    img: "assets/grid.jpg",
  },
  {
    num: 2,
    sub: "js",
    img: "assets/menu-js.jpg",
  },
  {
    num: 3,
    sub: "js",
    img: "assets/slider.jpg",
  },
  {
    num: 4,
    sub: "sass",
    img: "assets/sass.jpg",
  },
  {
    num: 5,
    sub: "css",
    img: "assets/mianterm.jpg",
  },
];

// add pictures in code
const addPicture = (imgOfTitle = []) => {
  document.getElementById("my-project").innerHTML = imgOfTitle
    .map(
      (image) =>
        `<div>
  <img class="img-project" src="${image.img}" alt="" />
</div>`
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

document.addEventListener("DOMContentLoaded", function () {
  const firstClient = clients[0];
  clientImg.src = firstClient.img;
  clientName.textContent = firstClient.name;
  clientJop.textContent = firstClient.position;
  clientQuote.textContent = firstClient.quote;
});

// .................end slider js
