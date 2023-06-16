// get all tab elements
let tabs = document.querySelectorAll(".banstatus-tab");

// initialize a variable to store the start position of the swipe
let swipeStart = null;

// add touch event listeners to all tabs
tabs.forEach((tab) => {
  tab.addEventListener("touchstart", function (event) {
    swipeStart = event.touches[0].clientX;
  });

  tab.addEventListener("touchmove", function (event) {
    if (!swipeStart) {
      return;
    }

    let currentPosition = event.touches[0].clientX;
    let diff = swipeStart - currentPosition;

    if (Math.abs(diff) > 50) {
      // swipe distance threshold
      if (diff > 0) {
        // swiped left
        // you would need to implement your logic here to move to the next tab
      } else {
        // swiped right
        // you would need to implement your logic here to move to the previous tab
      }

      // reset swipe start
      swipeStart = null;
    }
  });
});
