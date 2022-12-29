
//add active state to section 
var offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
}; 

var add = (x, section) => {
  if (x) {
    section.classList.add("your-active-class");
    section.style.background="red";
  }
}; 
var remove = (section) => {
  section.classList.remove("your-active-class");
  section.style.background="gray";
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

// make smooth scroll

var navMenu = document.querySelectorAll("nav");
const element =document.createElement("li");

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
