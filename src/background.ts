// Example: Listen for when the extension is installed or updated.
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed or updated');
});

// Example: Handle context menu actions (if you add one)
chrome.contextMenus.create({
    id: 'highlight-text',
    title: 'Highlight Text',
    contexts: ['selection'], // Only show the menu when text is selected
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'highlight-text' && tab?.id) {
        // Send a message to the content script to highlight the selected text
        chrome.tabs.sendMessage(tab.id, { type: 'HIGHLIGHT_TEXT', text: info.selectionText });
    }
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'GET_STATUS') {
        sendResponse({ status: 'Extension running' });
    }
});

export default {}