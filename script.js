function translateMonthToSwedish(dateString) {
  let english_months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let swedish_months = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December"
  ];
  for (let i = 0; i < english_months.length; i++) {
    dateString = dateString.replace(
      new RegExp(english_months[i], "gi"),
      swedish_months[i]
    );
  }
  return dateString;
}

// Recursive function to process text nodes
function processNode(node) {
  if (node.nodeName === "#text") {
    node.textContent = translateMonthToSwedish(node.textContent);
  } else {
    for (let child of node.childNodes) {
      processNode(child);
    }
  }
}

// Start the process with the body element
processNode(document.body);
// split start
let text;
let texthero;

// Split the text up
function runSplit() {
  text = new SplitType("[animation='split-stagger']", {
    types: "lines, words",
    lineClass: "split-line",
    wordClass: "is--scroll-intoview-scrub"
  });
  texthero = new SplitType("[animation='split-stagger-hero']", {
    types: "lines, words",
    lineClass: "split-line",
    wordClass: "is--scroll-hero-scrub"
  });
}

runSplit();

// split type ends

gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 1
  });
  tl.from(".is--scroll-hero-scrub", {
    y: "100%",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1
  });
  tl.from("[animation='loading']", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1,
    delay: -1
  });
}
pageLoad();

$("[animation='split-stagger']").each(function (index) {
  let target = $(this).find(".is--scroll-intoview-scrub");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom -=100"
    }
  });

  tl.from(
    target,
    {
      y: "100%",
      opacity: 0,
      ease: "Quint.easeOut",
      duration: 1,
      stagger: {
        each: 0.1,
        from: "start"
      }
    },
    0
  );
});

$("[animation='scroll-stagger']").each(function (index) {
  let target = $(this).find("[animation='stagger-element']");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: `top bottom-=${100}`
    }
  });

  tl.from(
    target,
    {
      y: "20rem",
      opacity: 0,
      ease: "Quint.easeOut",
      duration: 1,
      stagger: {
        each: 0.1,
        from: "start"
      }
    },
    0
  );
});

$(".line").each(function (index) {
  let target = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "bottom bottom -=100"
    }
  });

  tl.fromTo(
    target,
    { width: "0%", opacity: 0 },
    { width: "100%", opacity: 1, ease: "Quint.easeOut", duration: 1 }
  );
});

// accordion --------------------- //
$(".accordion-trigger").on("click", function () {
  // Close other accordions when opening new one
  if (!$(this).hasClass("open")) {
    $(".accordion-trigger.open").click();
  }
  // Save the sibling of the toggle we clicked on
  let sibling = $(this).siblings(".accordion-response");
  let animationDuration = 500;

  if ($(this).hasClass("open")) {
    // Close the content div if already open
    sibling.animate({ height: "0px" }, animationDuration);
  } else {
    // Open the content div if already closed
    sibling.css("height", "auto");
    let autoHeight = sibling.height();
    sibling.css("height", "0px");
    sibling.animate({ height: autoHeight }, animationDuration, () => {
      sibling.css("height", "auto");

      // Scroll the page to the accordion, leaving 200 pixels from the top
      $("html, body").animate(
        {
          scrollTop: $(this).offset().top - 200
        },
        animationDuration
      );
    });
  }
  // Open and close the toggle div
  $(this).toggleClass("open");
});

//  close button popup --------- //

document.addEventListener("DOMContentLoaded", function () {
  const closeButtons = document.querySelectorAll(".popup-close");

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", function () {
      let currentElement = closeButton;

      while (currentElement) {
        if (currentElement.classList.contains("event-popup")) {
          currentElement.style.opacity = "0";

          // After the transition is complete, set display to 'none'
          setTimeout(() => {
            currentElement.style.display = "none";
          }, 400); // Adjust the timeout duration to match the transition duration in your CSS

          break;
        }

        currentElement = currentElement.parentElement;
      }
    });
  });
});

// Banstatus popup
document.addEventListener("DOMContentLoaded", function () {
  const popupTriggers = document.querySelectorAll("[trigger=banstatus-popup]");

  popupTriggers.forEach((popupTrigger) => {
    popupTrigger.addEventListener("click", function () {
      const eventPopup = document.querySelector(".is--banstatus-popup");

      if (eventPopup) {
        eventPopup.style.display = "flex";

        // After the display is set to 'flex', set opacity to '1'
        setTimeout(() => {
          eventPopup.style.opacity = "1";
        }, 10); // A short delay is used to ensure the opacity transition takes effect
      }
    });
  });
});

// Regler popup
document.addEventListener("DOMContentLoaded", function () {
  const popupTriggers = document.querySelectorAll("[trigger=regler-popup]");

  popupTriggers.forEach((popupTrigger) => {
    popupTrigger.addEventListener("click", function () {
      const eventPopup = document.querySelector(".is--regler-popup");

      if (eventPopup) {
        eventPopup.style.display = "flex";

        // After the display is set to 'flex', set opacity to '1'
        setTimeout(() => {
          eventPopup.style.opacity = "1";
        }, 10); // A short delay is used to ensure the opacity transition takes effect
      }
    });
  });
});

// Regler popup
document.addEventListener("DOMContentLoaded", function () {
  const popupTriggers = document.querySelectorAll("[trigger=event-popup]");

  popupTriggers.forEach((popupTrigger) => {
    popupTrigger.addEventListener("click", function () {
      const eventPopup = document.querySelector(".is--event-popup");

      if (eventPopup) {
        eventPopup.style.display = "flex";

        // After the display is set to 'flex', set opacity to '1'
        setTimeout(() => {
          eventPopup.style.opacity = "1";
        }, 10); // A short delay is used to ensure the opacity transition takes effect
      }
    });
  });
});

// gdpr popup
document.addEventListener("DOMContentLoaded", function () {
  const popupTriggers = document.querySelectorAll("[trigger=gdpr-popup]");

  popupTriggers.forEach((popupTrigger) => {
    popupTrigger.addEventListener("click", function () {
      const eventPopup = document.querySelector(".is--gdpr");

      if (eventPopup) {
        eventPopup.style.display = "flex";

        // After the display is set to 'flex', set opacity to '1'
        setTimeout(() => {
          eventPopup.style.opacity = "1";
        }, 10); // A short delay is used to ensure the opacity transition takes effect
      }
    });
  });
});

// tavling popup
document.addEventListener("DOMContentLoaded", function () {
  const popupTriggers = document.querySelectorAll("[trigger=tavling-popup]");

  popupTriggers.forEach((popupTrigger) => {
    popupTrigger.addEventListener("click", function () {
      const eventPopup = document.querySelector(".is--tavling");

      if (eventPopup) {
        eventPopup.style.display = "flex";

        // After the display is set to 'flex', set opacity to '1'
        setTimeout(() => {
          eventPopup.style.opacity = "1";
        }, 10); // A short delay is used to ensure the opacity transition takes effect
      }
    });
  });
});

// tavling popup
document.addEventListener("DOMContentLoaded", function () {
  const popupTriggers = document.querySelectorAll("[trigger=slope-popup]");

  popupTriggers.forEach((popupTrigger) => {
    popupTrigger.addEventListener("click", function () {
      const eventPopup = document.querySelector(".is--slope");

      if (eventPopup) {
        eventPopup.style.display = "flex";

        // After the display is set to 'flex', set opacity to '1'
        setTimeout(() => {
          eventPopup.style.opacity = "1";
        }, 10); // A short delay is used to ensure the opacity transition takes effect
      }
    });
  });
});

// tavling popup
document.addEventListener("DOMContentLoaded", function () {
  const popupTriggers = document.querySelectorAll("[trigger=boka-popup]");

  popupTriggers.forEach((popupTrigger) => {
    popupTrigger.addEventListener("click", function () {
      const eventPopup = document.querySelector(".is--boka");

      if (eventPopup) {
        eventPopup.style.display = "flex";

        // After the display is set to 'flex', set opacity to '1'
        setTimeout(() => {
          eventPopup.style.opacity = "1";
        }, 10); // A short delay is used to ensure the opacity transition takes effect
      }
    });
  });
});

// navbar color

$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
      $(".navbar").addClass("is--scrolled");
    } else if (scrollTop < 100) {
      $(".navbar").removeClass("is--scrolled");
    }
  });
});

$(document).ready(function () {
  $(".navlink").hover(
    function () {
      $(this).siblings(".navlink").css("opacity", 0.3);
    },
    function () {
      $(".navlink").css("opacity", 1);
    }
  );
});

$(".menu-close-icon").on("click", function () {
  $(".navbar-menu-link").click();
});

$(".navlink").on("click", function () {
  $(".navbar-menu-link").click();
});

$(".navbar-btns-wrapper .btn--14").on("click", function () {
  $(".navbar-menu-link").click();
});

$(".popup-bg").on("click", function () {
  $(".popup-close").click();
});
