// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "toggleDarkMode") {
      chrome.storage.local.get("darkModeEnabled", function(data) {
        const darkModeEnabled = !data.darkModeEnabled;
        chrome.storage.local.set({ darkModeEnabled });
        applyDarkMode(darkModeEnabled);
      });
    }
  });
  
  function applyDarkMode(darkModeEnabled) {
    const style = document.getElementById("dark-mode-style");
    if (!style) {
      const styleElement = document.createElement("style");
      styleElement.id = "dark-mode-style";
      document.head.appendChild(styleElement);
      style = styleElement;
    }
  
    style.textContent = darkModeEnabled
      ? `body { background-color: #333; color: #fff; } /* Add your dark mode styles here */`
      : "";
  }
  