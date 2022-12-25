
var navMenu = document.querySelectorAll("nav");
// make smooth scroll
navMenu.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    var Id = event.target.attributes.href.value;
    var sec = document.querySelector(Id);
    sec.scrollIntoView({
      behavior: "smooth",
    });
  });
});

var offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
}; // remove active class

var remove = (section) => {
  section.classList.remove("your-active-class");
  section.style =
    "background-color:gray";
}; // add active class
var add = (x, section) => {
  if (x) {
    section.classList.add("your-active-class");
    section.style = "background-color: blue;";
  }
}; 
var sec = document.querySelectorAll("section");
var Activation = () => {
  sec.forEach((section) => {
    var high = offset(section);
    inviewport = () => high < 160 && high >= -160;
    remove(section);
    add(inviewport(), section);
  });
};
window.addEventListener("scroll", Activation);
