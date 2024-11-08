// JavaScript for toggling the menu without hiding on link click
const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('#list ul');

// Toggle visibility of menu on icon click
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the event from bubbling up
  menuList.classList.toggle('show');
});

// Close the menu if clicking outside of it
document.addEventListener('click', (e) => {
  if (!menuList.contains(e.target) && !menuToggle.contains(e.target)) {
    menuList.classList.remove('show');
  }
});

// Navigation items array
const navItems = [
  { name: "Home", id: "main-section" },
  { name: "Categories", id: "categories" },
  { name: "Products", id: "products" },
  { name: "About", id: "about" },
  { name: "Customers", id: "customers" },
];

// Get the <ul> element
const navbar = document.getElementById("navbar");

// Loop through the array and build the navigation items
navItems.forEach((item) => {
  // Create <li> element
  const li = document.createElement("li");

  // Set the innerHTML with an <a> element
  li.innerHTML = `<a href="#${item.id}">${item.name}</a>`;

  // Append <li> to <ul>
  navbar.appendChild(li);

  // Select the <a> element inside <li>
  const link = li.querySelector("a");

  // Add event listener for click event on each link
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default behavior (scroll to anchor)

    // Scroll to the corresponding section smoothly
    const targetSection = document.getElementById(item.id);
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Remove active class from all items and add it to the clicked item
    document.querySelectorAll("#navbar li a").forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});


// Function to determine the currently visible section and update the active class
function setActiveSection() {
  let currentActive = null;
  navItems.forEach((item) => {
    const section = document.getElementById(item.id);
    if (section) {
      const rect = section.getBoundingClientRect();

      // Check if the section is in the viewport
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentActive = item.id;
        section.classList.add('active-section');
      } else{
        section.classList.remove('active-section');
      }
    }
  });

  // Update active class on navigation based on the current active section
  document.querySelectorAll("#navbar li a").forEach((link) => {
    if (link.getAttribute("href") === `#${currentActive}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Listen for the scroll event to update the active section
window.addEventListener("scroll", setActiveSection);
