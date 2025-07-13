//your JS code here. If required.
// Set a cookie
function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

// Get a cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [k, v] = cookie.split("=");
    if (k === name) return v;
  }
  return null;
}

// Apply preferences from cookies
function applyPreferences() {
  const size = getCookie("fontsize");
  const color = getCookie("fontcolor");

  if (size) {
    document.documentElement.style.setProperty("--fontsize", `${size}px`);
    document.getElementById("fontsize").value = size;
  }

  if (color) {
    document.documentElement.style.setProperty("--fontcolor", color);
    document.getElementById("fontcolor").value = color;
  }
}

// Handle form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const size = document.getElementById("fontsize").value;
  const color = document.getElementById("fontcolor").value;

  setCookie("fontsize", size);
  setCookie("fontcolor", color);

  applyPreferences(); // Apply changes immediately
});

// Apply preferences on first load
applyPreferences();

