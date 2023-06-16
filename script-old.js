document.addEventListener("DOMContentLoaded", function () {
  const accordionTriggers = document.querySelectorAll(".accordion-trigger");

  if (accordionTriggers.length > 0) {
    accordionTriggers.forEach((accordionTrigger) => {
      const accordion = accordionTrigger.closest(".accordion");
      const accordionResponse = accordion.querySelector(".accordion-response");
      const arrowElement = accordion.querySelector(".arrow");

      // Set initial opacity and height for accordion responses
      accordionResponse.style.opacity = "0";
      accordionResponse.style.height = "0";
      arrowElement.style.transform = "rotate(0deg)";

      accordionTrigger.addEventListener("click", function () {
        if (accordionResponse.style.opacity === "0") {
          accordionResponse.style.opacity = "1";
          accordionResponse.style.height = "auto"; // Adjust the height as per your requirement
          accordionResponse.style.overflow = "visible";
          arrowElement.style.transform = "rotate(180deg)";
        } else {
          accordionResponse.style.opacity = "0";
          accordionResponse.style.height = "0";
          accordionResponse.style.overflow = "hidden";
          arrowElement.style.transform = "rotate(0deg)";
        }
      });
    });
  }
});
