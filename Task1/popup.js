document.addEventListener('DOMContentLoaded', function() {
    var fetchTitleButton = document.getElementById('fetchbutton');
    var titleDisplay = document.getElementById('display');
  
    fetchTitleButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentTab = tabs[0];
        var tabTitle = currentTab.title;
        titleDisplay.textContent = tabTitle;
      });
    });
  });
  