# MadeMarket Tools

This Firefox browser extension was designed to add helpful features to the investment banking platform MadeMarket. It has the following capabilities:

- Search the Axial private deal-sourcing platform in-site or with the right-click context menu when a search term is highlighted. May require Axial login.

- Jump to any page of Firms or Contacts when not in a saved or advanced 
  search (MadeMarket must have extra javascript that runs in addition to 
  the API endpoint request when such a search is activated)

- Auto-format phone numbers pasted from clipboard. It can't access your 
  clipboard, it simply detects when you paste something from it on the 
  MadeMarket site and if it is a phone number, formats it to (xxx) 
  xxx-xxxx.

- Auto-redirect free Pitchbook links to the premium site. It can't access any information on Pitchbook, it simply changes the URL pattern of clicked free links to match the premium site structure. Requires Pitchbook login.