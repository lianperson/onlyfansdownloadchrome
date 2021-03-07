const images = Array.from(document.querySelectorAll("img")).map((element) =>
  element.src.trim()
);
Array.from(document.querySelectorAll("button")).map((element) => {
  if (element.title === "Play Video") {
    element.click();
  }
});
const videos = Array.from(document.querySelectorAll("video")).map((element) =>
  element.src.trim()
);
Array.from(document.querySelectorAll("button")).map((element) => {
  if (element.title === "Pause") {
    element.click();
  }
});
chrome.runtime.sendMessage({
  action: "getSource",
  source: [...images, ...videos],
});
