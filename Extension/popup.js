// popup.js
import './popup.css';

document.addEventListener('DOMContentLoaded', function() {
  const toggleDarkModeCheckbox = document.getElementById('toggleDarkMode');

  chrome.storage.local.get("darkModeEnabled", function(data) {
    toggleDarkModeCheckbox.checked = data.darkModeEnabled;
  });

  toggleDarkModeCheckbox.addEventListener('change', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "toggleDarkMode" });
    });
  });
});
