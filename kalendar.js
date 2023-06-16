const calendarItems = document.querySelector(".kalendar-items");
const items = Array.from(calendarItems.querySelectorAll(".kalendar-item"));

const months = {};

// Detach items and group them by month
items.forEach((item) => {
  const monthName = item.querySelector('[trigger="month"]').textContent;
  if (!months[monthName]) {
    months[monthName] = [];
  }
  // Detach the item from the DOM
  item.parentNode.removeChild(item);
  // Push the item into the month array
  months[monthName].push(item);
});

// Add h2 elements for each month and insert the items in the correct order
for (const monthName in months) {
  const monthItems = months[monthName];
  
  // Create and insert the month header
  const monthHeader = document.createElement("h2");
  monthHeader.setAttribute("animation", "loading");
  monthHeader.setAttribute("class", "heading--48 is--kalendar");
  monthHeader.textContent = monthName;
  calendarItems.appendChild(monthHeader);
  
  // Insert the items for the current month after the header
  monthItems.forEach((item) => {
    calendarItems.appendChild(item);
  });
}
