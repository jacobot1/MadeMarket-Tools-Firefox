chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "axialSearch",
    title: "Search Axial for \"%s\"",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "axialSearch" && info.selectionText) {
    const name = info.selectionText.trim().toLowerCase();
    const slug = name
      .replace(/([a-zA-Z])\s*&\s*([a-zA-Z])/g, (_, a, b) => `${a}${b}`) // S&T → st
      .replace(/\s*&\s*/g, '-and-')                                     // Smith & Jones → smith-and-jones
      .replace(/&/g, '-and-')                                           // catch remaining lone ampersands
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')                                      // non-alphanum → dash
      .replace(/^-+|-+$/g, '');                                         // trim leading/trailing dashes

    const axialUrl = `https://network.axial.net/company/${slug}`;
    chrome.tabs.create({ url: axialUrl });
  }
});
