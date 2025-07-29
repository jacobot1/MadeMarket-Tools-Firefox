(function () {
  const path = window.location.pathname;

  if (path === '/users/contacts_by_firm') {
    injectFirmJump();
    injectAxialSearch();
  } else if (path === '/users/firm_contacts') {
    injectContactJump();
  }
  formatPhonePaste();

  function autoResizeInput(input) {
    // Create a single hidden span to measure text width
    const span = document.createElement('span');
    span.style.position = 'absolute';
    span.style.visibility = 'hidden';
    span.style.height = 'auto';
    span.style.width = 'auto';
    span.style.whiteSpace = 'pre';
    
    // Copy all relevant styles from the input for accurate measurement
    const style = window.getComputedStyle(input);
    span.style.font = style.font;
    span.style.fontSize = style.fontSize;
    span.style.fontFamily = style.fontFamily;
    span.style.fontWeight = style.fontWeight;
    span.style.letterSpacing = style.letterSpacing;
    span.style.padding = style.padding;
    span.style.border = style.border;
    span.style.boxSizing = style.boxSizing;
    
    document.body.appendChild(span);

    function resize() {
        // Use current input value or placeholder for width measurement
        span.textContent = input.value || input.placeholder || '';
        // Add extra padding for comfort (adjust as needed)
        const newWidth = span.offsetWidth + 20;
        input.style.width = newWidth + 'px';
      }

      input.addEventListener('input', resize);
      input.addEventListener('change', resize);

      // Initial resize
      resize();

      // Cleanup span if input is removed from DOM
      const observer = new MutationObserver(() => {
        if (!document.body.contains(input)) {
          if (span.parentNode) span.parentNode.removeChild(span);
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
  }

  function injectFirmJump() {
    // Remove existing if present
    const existing = document.getElementById('mademarket-firm-jump');
    if (existing) existing.remove();

    // Create new container with the same ID
    const container = document.createElement('div');
    container.id = 'mademarket-firm-jump';
    container.className = 'mademarket-extension-box mademarket-firm-jump';
    Object.assign(container.style, {
      position: 'fixed',
      bottom: '19px',
      right: '19px',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      padding: '8px',
      zIndex: 100000,
      boxShadow: '0 0 5px rgba(0,0,0,0.2)',
      borderRadius: '4px',
    });

    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Jump to page...';
    input.style.marginRight = '5px';
    input.style.width = '150px';

    const button = document.createElement('button');
    button.textContent = 'Go';
    button.onclick = () => {
      const page = input.value.trim();
      if (page) {
        const firmsURL = new URL(window.location.href);
        // firmsURL.searchParams.set('by_firm', 'true');
        // firmsURL.searchParams.set('criteria_only', 0);
        // firmsURL.searchParams.set('direction', 'ASC');
        // firmsURL.searchParams.set('field[10][condition]', 'AND');
        // firmsURL.searchParams.set('field[10][id]', 246337);
        // firmsURL.searchParams.set('field[10][operator]', 'not');
        // firmsURL.searchParams.set('field[10][value][]', 11382);
        firmsURL.searchParams.set('page', page); // update variables without breaking URL
        // firmsURL.searchParams.set('per', 25);
        //firmsURL.searchParams.set('saved_search_id', 5658);
        // firmsURL.searchParams.set('search_action', 'firms');
        // firmsURL.searchParams.set('sort', 'firm_details.name');
        // firmsURL.searchParams.set('users_view_id', 36775);
        // firmsURL.searchParams.set('version', 'v2');
        window.location.href = firmsURL.toString();
        // window.location.href = `https://mademarket.co/users/contacts_by_firm?page=${page}`;
      }
    };

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') button.click();
    });

    container.appendChild(input);
    container.appendChild(button);
    document.body.appendChild(container);
  }

  function injectContactJump() {
    // Remove existing if present
    const existing = document.getElementById('mademarket-contact-jump');
    if (existing) existing.remove();

    // Create new container with the same ID
    const container = document.createElement('div');
    container.id = 'mademarket-contact-jump';
    container.className = 'mademarket-extension-box mademarket-contact-jump';
    Object.assign(container.style, {
      position: 'fixed',
      bottom: '19px',
      right: '19px',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      padding: '8px',
      zIndex: 100000,
      boxShadow: '0 0 5px rgba(0,0,0,0.2)',
      borderRadius: '4px',
    });

    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Jump to page...';
    input.style.marginRight = '5px';
    input.style.width = '150px';

    const button = document.createElement('button');
    button.textContent = 'Go';
    button.onclick = () => {
      const page = input.value.trim();
      if (page) {
        const contactsURL = new URL(window.location.href);
        // contactsURL.searchParams.set('by_firm', 'true');
        // contactsURL.searchParams.set('criteria_only', 0);
        // contactsURL.searchParams.set('direction', 'ASC');
        // contactsURL.searchParams.set('field[10][condition]', 'AND');
        // contactsURL.searchParams.set('field[10][id]', 246337);
        // contactsURL.searchParams.set('field[10][operator]', 'not');
        // contactsURL.searchParams.set('field[10][value][]', 11382);
        contactsURL.searchParams.set('page', page); // update variables without breaking URL
        // contactsURL.searchParams.set('per', 25);
        //contactsURL.searchParams.set('saved_search_id', 5658);
        // contactsURL.searchParams.set('search_action', 'firms');
        // contactsURL.searchParams.set('sort', 'firm_details.name');
        // contactsURL.searchParams.set('users_view_id', 36775);
        // contactsURL.searchParams.set('version', 'v2');
        window.location.href = contactsURL.toString();
        // window.location.href = `https://mademarket.co/users/firm_contacts?page=${page}`;
      }
    };

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') button.click();
    });

    container.appendChild(input);
    container.appendChild(button);
    document.body.appendChild(container);
  }

  function injectAxialSearch() {
    // Remove existing if present
    const existing = document.getElementById('mademarket-axial-search');
    if (existing) existing.remove();

    // Create new container with the same ID
    const container = document.createElement('div');
    container.id = 'mademarket-axial-search';
    container.className = 'mademarket-extension-box mademarket-axial-search';

    // === Style: position and size — edit these to move or resize the Axial Search UI ===
    Object.assign(container.style, {
      position: 'fixed',      // position: fixed to float over page
      top: '20px',            // distance from top of the viewport
      right: '144px',          // distance from right edge of viewport
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      padding: '8px',
      zIndex: 100000,         // very high to appear on top of page content
      boxShadow: '0 0 5px rgba(0,0,0,0.2)',
      borderRadius: '4px'
    });

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search Axial...';
    input.style.marginRight = '5px';
    autoResizeInput(input); //input box width — edit this to resize input

    const button = document.createElement('button');
    button.textContent = 'Go';
    button.onclick = () => {
      const name = input.value.trim().toLowerCase();
      if (name) {
        const slug = name
          .replace(/([a-zA-Z])\s*&\s*([a-zA-Z])/g, (_, a, b) => `${a}${b}`) // S&T → st
          .replace(/\s*&\s*/g, '-and-')                                     // Smith & Jones → smith-and-jones
          .replace(/&/g, '-and-')                                           // catch remaining lone ampersands
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')                                      // non-alphanum → dash
          .replace(/^-+|-+$/g, '');                                         // trim leading/trailing dashes

        const axialURL = `https://network.axial.net/company/${slug}`;
        window.open(axialURL, '_blank');  // <-- Open in a new tab instead of current tab
      }
    };

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') button.click();
    });

    container.appendChild(input);
    container.appendChild(button);
    document.body.appendChild(container);
  }

  function formatPhonePaste() {
    document.addEventListener('paste', (event) => {
      const paste = (event.clipboardData || window.clipboardData).getData('text');

      // Skip if contains any letters
      if (/[a-zA-Z]/.test(paste)) return;

      // Clean to digits only
      const digits = paste.replace(/\D/g, '');

      // Handle NANP: allow optional +1
      if (digits.length === 11 && digits.startsWith('1')) {
        formatAndInsert(digits.slice(1), event);
      } else if (digits.length === 10) {
        formatAndInsert(digits, event);
      }
    });

    function formatAndInsert(digits, event) {
      const formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
      event.preventDefault();

      const target = document.activeElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;

      // Replace selected text or insert at caret
      const text = target.value;
      target.value = text.slice(0, start) + formatted + text.slice(end);
      target.setSelectionRange(start + formatted.length, start + formatted.length);
    }
  }

})();
