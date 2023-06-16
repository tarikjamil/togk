const calendarItems = document.querySelector(".kalendar-items");
const items = calendarItems.querySelectorAll(".kalendar-item");

const months = {};

// Group dates by month
items.forEach((item) => {
  const monthName = item.querySelector('[trigger="month"]').textContent;
  if (!months[monthName]) {
    months[monthName] = [];
  }
  months[monthName].push(item);
});

// Add h2 elements for each month
for (const monthName in months) {
  const monthItems = months[monthName];
  const monthHeader = document.createElement("h2");
  monthHeader.setAttribute("animation", "loading");
  monthHeader.setAttribute("class", "heading--48 is--kalendar");
  monthHeader.textContent = monthName;
  calendarItems.insertBefore(monthHeader, monthItems[0]);

  // keep a reference to the node before which you want to insert items
  let referenceNode = monthHeader.nextSibling;

  // insert each item before the reference node
  monthItems.forEach((item) => {
    calendarItems.insertBefore(item, referenceNode);
  });
}
