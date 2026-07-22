const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
// Storing the img source and alt in a single object
const images = [
  { src: "pic1.jpg", alt: "A close up of a human eye" },
  { src: "pic2.jpg", alt: "A cloud???" },
  { src: "pic3.jpg", alt: "A flower" },
  { src: "pic4.jpg", alt: "Pharaon" },
  { src: "pic5.jpg", alt: "A butterfly" },
];
/* Declaring the alternative text for each image file */

/* Looping through images */
for (img of images) {
  const thumbnail = document.createElement("img");
  thumbnail.setAttribute("src", "./images/" + img["src"]);
  thumbnail.setAttribute("alt", "Thumbnail, " + img["alt"]);
  thumbnail.className = img["src"]?.split(".")[0]; // setting class to its source without the extension
  thumbBar.appendChild(thumbnail);

  thumbnail.addEventListener("click", function (e) {
    let class_name = e.target.className;
    let src = `./images/${class_name}.jpg`;
    let alt = e.target.alt.split(",")[1].trim();
    displayedImage.setAttribute("src", src);
    displayedImage.setAttribute("alt", alt);
  });
}

// const newImage = document.createElement("img");
// newImage.setAttribute("src", xxx);
// newImage.setAttribute("alt", xxx);
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function () {
  // const btn = e.target;
  if (btn.className === "dark") {
    overlay.classList.add("on");
    btn.textContent = "Lighten";
    btn.className = "light";
  } else {
    overlay.classList.remove("on");
    btn.textContent = "Darken";
    btn.className = "dark";
  }
});
