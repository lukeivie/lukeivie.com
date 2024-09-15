const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const onDarkModeChange = (event: MediaQueryListEvent | MediaQueryList) => {
  const faviconTag = document.getElementById("faviconTag");
  const isDarkMode = event.matches;
  const path = isDarkMode ? "dark" : "light";
  faviconTag?.setAttribute("href", `./favicon/${path}.svg`);
};

prefersDarkScheme.addEventListener("change", onDarkModeChange);

onDarkModeChange(prefersDarkScheme);
