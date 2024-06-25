chrome.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    let tabs = await chrome.tabs.query({
      url: "https://mail.google.com/*",
    });
    for (let tab of tabs) {
      chrome.tabs.reload(tab.id);
    }
  }
});
