// siteConfig.js
module.exports = {
    // Other site configuration options...
    
    // Set data-bs-auto-close attribute to true for all dropdown toggle elements
    onClientEntry: () => {
      const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
      dropdownToggles.forEach((toggle) => {
        toggle.setAttribute("data-bs-auto-close", "true");
      });
    },
  };
  