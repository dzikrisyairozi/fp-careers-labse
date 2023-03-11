const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  // onClientEntry: () => {
  //   const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  //   dropdownToggles.forEach((toggle) => {
  //     toggle.setAttribute("data-bs-auto-close", "true");
  //   });
  // },
})

module.exports = withNextra()
