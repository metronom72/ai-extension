chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed or updated");
});

chrome.contextMenus.create({
  id: "highlight-text",
  title: "Объясни простыми словами",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "highlight-text" && tab?.id) {
    chrome.tabs.sendMessage(tab.id, {
      type: "HIGHLIGHT_TEXT",
      text: info.selectionText,
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_STATUS") {
    sendResponse({ status: "Extension running" });
  }
});

export default {};
