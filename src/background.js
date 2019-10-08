// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "githubik_clicked_icon_action"});
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      chrome.browserAction.setBadgeText({text: request.textIcon})
  }
);