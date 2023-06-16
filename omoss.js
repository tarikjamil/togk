document.addEventListener("DOMContentLoaded", function () {
  const teamMemberNumbers = document.querySelectorAll(".is--teammember-number");

  teamMemberNumbers.forEach((element) => {
    const number = parseInt(element.textContent, 10);
    element.textContent = number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
  });
});
