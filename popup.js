// Đoạn mã này thêm một sự kiện click vào phần tử có id là "start"
document.getElementById("start").addEventListener("click", () => {
  // Khi phần tử "start" được click, nó sẽ tìm tab hiện tại đang hoạt động trong cửa sổ hiện tại
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // Sau đó, nó sẽ thực thi script "content.js" trên tab đó
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["content.js"],
    });
  });
});
