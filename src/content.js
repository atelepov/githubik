// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "githubik_clicked_icon_action" ) {
        chrome.runtime.sendMessage({ "textIcon": "0%" });

        let listBranches = document.querySelectorAll("#branch-select-menu > details-menu > tab-container > .select-menu-list > div > .select-menu-item > span");
        let listSizeBranches = listBranches.length / 100

        listBranches.forEach(function(element, index) {
          chrome.runtime.sendMessage({ "textIcon": Math.round(index / listSizeBranches) + "%" });

          let text = element.innerText;
          console.log(text)
          if (text.endsWith('$')) {
            element.innerText = text.replace('$', '');
          } else {
            element.innerText = text + '$';
          }
        });

        chrome.runtime.sendMessage({ "textIcon": "100%" });
      }
    }
  );