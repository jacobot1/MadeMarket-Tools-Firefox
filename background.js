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
      .replace(/(?<=\b[a-zA-Z])&(?=[a-zA-Z]\b)/g, '') // S&T → st
      .replace(/\s*&\s*/g, '-and-')                   // Smith & Jones → smith-and-jones
      .replace(/&/g, '-and-')                         // catch remaining lone ampersands
      .toLowerCase()
      .replace(/\./g, "")                             // no periods
      .replace(/[^a-z0-9]+/g, '-')                    // non-alphanum → dash
      .replace(/-+/g, "-")                            // no double dashes
      .replace(/^-+|-+$/g, '');                       // trim leading/trailing dashes

    const axialUrl = `https://network.axial.net/company/${slug}`;
    chrome.tabs.create({ url: axialUrl });
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const match = details.url.match(/^https:\/\/pitchbook\.com\/profiles\/investor\/([\d-]+)$/);
    if (match) {
      const id = match[1];
      const newUrl = `https://my.pitchbook.com/profile/${id}/investor/profile`;
      return { redirectUrl: newUrl };
    }
  },
  { urls: ["*://pitchbook.com/profiles/investor/*"] },
  ["blocking"]
);