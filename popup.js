chrome.runtime.onMessage.addListener(function (request, sender) {
  if (request.action == "getSource") {
    const urls = request.source;
    for (let index = 0; index < urls.length; index++) {
      const element = urls[index];
      chrome.downloads.download({
        url: element + "",
        conflictAction: "overwrite",
      });
    }
  }
});

function onWindowLoad() {
  var message = document.querySelector("#message");
  chrome.tabs.executeScript(
    null,
    {
      file: "getPagesSource.js",
    },
    function () {
      if (chrome.runtime.lastError) {
        message.innerText =
          "There was an error injecting script : \n" +
          chrome.runtime.lastError.message;
      }
    }
  );
}

window.onload = onWindowLoad;
