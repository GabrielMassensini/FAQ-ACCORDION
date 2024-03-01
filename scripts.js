const accordionToggle = document.getElementById("toggle-accordion");
const accordionToggleImg = document.getElementById("toggle-accordion-img");
const accordionContent = document.getElementById("accordion-content");

function accordionOpen() {
  if (accordionToggleImg.src.endsWith("/images/icon-plus.svg")) {
    accordionToggleImg.src = "/images/icon-minus.svg";
  } else {
    accordionToggleImg.src = "/images/icon-plus.svg";
  }

  accordionContent.classList.toggle("visible");
}

accordionToggle.addEventListener("click", accordionOpen);
