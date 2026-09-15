(() => {
  const ownerKey = 'voa-owner-editor-enabled';
  const ownerToken = '0999b593db015fa18d8dabe3f9901291';
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.get('owner') === ownerToken) {
      localStorage.setItem(ownerKey, 'true');
      url.searchParams.delete('owner');
      history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
    }
    if (url.searchParams.get('viewer') === '1') {
      localStorage.removeItem(ownerKey);
      url.searchParams.delete('viewer');
      history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
    }
  } catch (error) {}
  const ownerEditingEnabled = (() => {
    try { return localStorage.getItem(ownerKey) === 'true'; } catch (error) { return false; }
  })();
  if (!ownerEditingEnabled && !window.__VOA_PAGE_EXPORTED_STATE__) return;
  document.documentElement.classList.add('voa-owner-editor');

  if (document.querySelector('.page-editor-bar')) return;

  const routeKey = (location.pathname.replace(/index\.html$/i, '').replace(/\/+$/, '') || '/').toLowerCase();
  const storageKey = `voa-service-page-state:${routeKey}`;
  const historyKey = `voa-service-page-history:${routeKey}`;
  const collapsedKey = 'voa-service-editor-collapsed';
  const exportedState = window.__VOA_PAGE_EXPORTED_STATE__ || null;
  const pageName = document.querySelector('h1')?.textContent.trim() || 'Services page';
  const rootStyle = document.documentElement.style;
  const fontFamilies = {
    system: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    arial: 'Arial, Helvetica, sans-serif',
    georgia: 'Georgia, "Times New Roman", serif'
  };
  const designDefaults = {
    fontFamily: 'system',
    h1Size: 66,
    h2Size: 50,
    bodySize: 16,
    navyColour: '#0b2340',
    accentColour: '#ef5a24',
    linkColour: '#2f73a8',
    sectionColour: '#edf5fa',
    dropdownBackground: '#ffffff',
    dropdownBorder: '#0b2340',
    dropdownText: '#0b2340',
    dropdownWidth: 940,
    dropdownRadius: 14,
    paragraphAlignment: 'justify',
    sectionSpacing: 94,
    contentWidth: 1180
  };
  let designSettings = { ...designDefaults };
  let contentEditing = false;
  let imageEditing = false;
  let selectedImage = null;
  let savedRange = null;
  let toastTimer = null;

  const interfaceMarkup = `
    <header class="page-editor-bar" data-page-editor-ui>
      <div class="page-editor-bar__inner">
        <div class="page-editor-title">Edit page <span>· ${escapeHtml(pageName)}</span></div>
        <button class="page-editor-control page-design-button" aria-expanded="false" aria-controls="pageDesignPanel">✦ <span class="label-wide">Design</span></button>
        <button class="page-editor-control page-content-button" aria-pressed="false">✎ <span class="label-wide">Content</span></button>
        <button class="page-editor-control page-images-button" aria-pressed="false">▧ <span class="label-wide">Images</span></button>
        <button class="page-editor-control page-restore-previous">↶ <span class="label-wide">Restore previous</span></button>
        <button class="page-editor-control save-all">✓ <span class="label-wide">Save all</span></button>
        <button class="page-editor-control download-html" title="Download this edited page as a self-contained HTML file">HTML</button>
        <button class="page-editor-control page-print" title="Print or save this page as PDF">PDF</button>
        <button class="page-editor-control page-editor-collapse" aria-expanded="true" aria-label="Collapse page editor">⌃</button>
      </div>
    </header>
    <aside id="pageDesignPanel" class="page-editor-panel" aria-hidden="true" data-page-editor-ui>
      <div class="page-editor-panel__head">
        <div><h2>Design this page</h2><p>Changes appear immediately and save only to this page.</p></div>
        <button class="page-editor-close" aria-label="Close design editor">×</button>
      </div>
      <div class="page-editor-group">
        <h3>Typography</h3>
        <div class="page-editor-field"><label for="pageFontFamily">Font family</label><select id="pageFontFamily"><option value="system">System sans-serif</option><option value="arial">Arial</option><option value="georgia">Georgia</option></select></div>
        <div class="page-editor-field"><label for="pageH1Size">H1 size</label><div class="page-editor-range"><input id="pageH1Size" type="range" min="38" max="76" value="66"><output>66px</output></div></div>
        <div class="page-editor-field"><label for="pageH2Size">H2 size</label><div class="page-editor-range"><input id="pageH2Size" type="range" min="28" max="58" value="50"><output>50px</output></div></div>
        <div class="page-editor-field"><label for="pageBodySize">Paragraph size</label><div class="page-editor-range"><input id="pageBodySize" type="range" min="15" max="22" value="16"><output>16px</output></div></div>
      </div>
      <div class="page-editor-group">
        <h3>Colours</h3>
        <div class="page-editor-colours">
          <label class="page-editor-colour"><input id="pageNavyColour" type="color" value="#0b2340"><span>Primary navy</span></label>
          <label class="page-editor-colour"><input id="pageAccentColour" type="color" value="#ef5a24"><span>Accent</span></label>
          <label class="page-editor-colour"><input id="pageLinkColour" type="color" value="#2f73a8"><span>Link blue</span></label>
          <label class="page-editor-colour"><input id="pageSectionColour" type="color" value="#edf5fa"><span>Light section</span></label>
        </div>
      </div>
      <div class="page-editor-group">
        <h3>Layout</h3>
        <div class="page-editor-field"><label for="pageParagraphAlignment">Paragraph alignment</label><select id="pageParagraphAlignment"><option value="justify">Justified</option><option value="left">Left</option><option value="center">Centred</option><option value="right">Right</option></select></div>
        <div class="page-editor-field"><label for="pageSectionSpacing">Section spacing</label><div class="page-editor-range"><input id="pageSectionSpacing" type="range" min="54" max="130" value="94"><output>94px</output></div></div>
        <div class="page-editor-field"><label for="pageContentWidth">Content width</label><div class="page-editor-range"><input id="pageContentWidth" type="range" min="980" max="1360" step="20" value="1180"><output>1180px</output></div></div>
      </div>
      <div class="page-editor-group">
        <h3>Services dropdown</h3>
        <div class="page-editor-colours">
          <label class="page-editor-colour"><input id="pageDropdownBackground" type="color" value="#ffffff"><span>Background</span></label>
          <label class="page-editor-colour"><input id="pageDropdownBorder" type="color" value="#0b2340"><span>Border</span></label>
          <label class="page-editor-colour"><input id="pageDropdownText" type="color" value="#0b2340"><span>Text</span></label>
        </div>
        <div class="page-editor-field"><label for="pageDropdownWidth">Dropdown width</label><div class="page-editor-range"><input id="pageDropdownWidth" type="range" min="700" max="1100" step="20" value="940"><output>940px</output></div></div>
        <div class="page-editor-field"><label for="pageDropdownRadius">Corner radius</label><div class="page-editor-range"><input id="pageDropdownRadius" type="range" min="0" max="28" value="14"><output>14px</output></div></div>
      </div>
      <div class="page-editor-panel-actions"><button class="page-editor-reset">Reset design</button><button class="page-editor-save">Save design</button></div>
    </aside>
    <div class="page-content-toolbar" role="toolbar" aria-label="Text formatting controls" aria-hidden="true" data-page-editor-ui>
      <button class="page-format-button" data-command="bold" title="Bold"><strong>B</strong></button>
      <button class="page-format-button" data-command="italic" title="Italic"><em>I</em></button>
      <button class="page-format-button" data-command="underline" title="Underline"><u>U</u></button>
      <label class="page-format-colour" title="Selected text colour"><input class="page-selected-colour" type="color" value="#ef5a24" aria-label="Selected text colour"></label>
      <select class="page-toolbar-select page-selected-size" aria-label="Selected text size"><option value="">Text size</option><option value="14">14 px</option><option value="16">16 px</option><option value="18">18 px</option><option value="20">20 px</option><option value="24">24 px</option><option value="32">32 px</option><option value="40">40 px</option><option value="48">48 px</option><option value="56">56 px</option></select>
      <span class="page-toolbar-divider"></span>
      <button class="page-format-button" data-align="left" title="Align left">≡</button>
      <button class="page-format-button" data-align="center" title="Centre">≡</button>
      <button class="page-format-button" data-align="right" title="Align right">≡</button>
      <button class="page-format-button" data-align="justify" title="Justify">☰</button>
      <button class="page-format-button" data-command="removeFormat" title="Clear selected formatting">Tx</button>
      <button class="page-format-button page-link-button" title="Add or edit hyperlink">Link</button>
      <button class="page-format-button page-unlink-button" title="Remove hyperlink">Unlink</button>
      <span class="page-toolbar-divider"></span>
      <button class="page-content-action primary page-content-save">Save text</button>
      <button class="page-content-action page-content-reset">Reset text</button>
      <button class="page-content-action page-content-done">Done</button>
      <p class="page-toolbar-status">Click a text block, then select words or letters to format them.</p>
    </div>
    <div class="page-image-toolbar" role="toolbar" aria-label="Image replacement controls" aria-hidden="true" data-page-editor-ui>
      <p class="page-toolbar-status page-image-status">Select any outlined image, including the page or footer logo.</p>
      <button class="page-image-action primary page-image-replace" disabled>Replace selected</button>
      <select class="page-toolbar-select page-image-fit" aria-label="Selected image fit" disabled><option value="cover">Fill area</option><option value="contain">Show whole image</option><option value="fill">Stretch</option></select>
      <select class="page-toolbar-select page-image-position" aria-label="Selected image position" disabled><option value="center center">Centre</option><option value="center left">Left</option><option value="center right">Right</option><option value="top center">Top</option><option value="bottom center">Bottom</option></select>
      <button class="page-image-action page-image-restore" disabled>Restore selected</button>
      <button class="page-image-action page-image-restore-all">Restore all</button>
      <button class="page-image-action page-image-done">Done</button>
    </div>
    <input class="page-file-input" type="file" accept="image/png,image/jpeg,image/webp" aria-label="Upload replacement image" data-page-editor-ui>
    <div class="page-editor-toast" role="status" aria-live="polite" data-page-editor-ui></div>`;

  document.body.insertAdjacentHTML('afterbegin', interfaceMarkup);
  document.body.classList.add('has-page-editor');

  const textSelector = [
    '.proposal-strip span',
    '.site-header .site-nav > a',
    '.site-header .nav-dropdown > a',
    '.site-header .service-dropdown a',
    '.site-header .header-cta',
    'main h1', 'main h2', 'main h3', 'main p', 'main li',
    'main .scope-tags span', 'main .task-number', 'main .system-list span',
    'main .directory-card .category', 'main .directory-card .arrow',
    'main .faq-question > span:first-child', 'main .faq-answer',
    'main .button', 'main .button-outline',
    '.site-footer p', '.site-footer strong', '.site-footer a:not(.footer-brand)'
  ].join(',');
  const baseEditableElements = [...document.querySelectorAll(textSelector)].filter((element, index, list) =>
    !element.closest('[data-page-editor-ui], [data-page-no-edit]') && !list.some((candidate, candidateIndex) => candidateIndex < index && candidate.contains(element))
  );
  const dropdownEditableElements = [...document.querySelectorAll([
    '.site-header .service-dropdown .dropdown-label',
    '.site-header .dropdown-summary .dropdown-kicker',
    '.site-header .dropdown-summary h3',
    '.site-header .dropdown-summary p',
    '.site-header .dropdown-summary-link'
  ].join(','))].filter(element => !baseEditableElements.includes(element));
  const editableElements = [...baseEditableElements, ...dropdownEditableElements];
  editableElements.forEach((element, index) => element.dataset.pageEditId = `text-${index + 1}`);
  const editableImages = [...document.querySelectorAll('img')].filter(image => !image.closest('[data-page-editor-ui]'));
  editableImages.forEach((image, index) => image.dataset.pageImageId = `image-${index + 1}`);

  const defaultContent = editableElements.map(element => ({
    id: element.dataset.pageEditId,
    html: element.innerHTML,
    href: element.matches('a') ? element.getAttribute('href') : undefined
  }));
  const defaultImages = editableImages.map(image => ({
    id: image.dataset.pageImageId,
    src: image.getAttribute('src'),
    fit: image.style.objectFit || '',
    position: image.style.objectPosition || ''
  }));

  const designButton = document.querySelector('.page-design-button');
  const designPanel = document.querySelector('.page-editor-panel');
  const contentButton = document.querySelector('.page-content-button');
  const imageButton = document.querySelector('.page-images-button');
  const contentToolbar = document.querySelector('.page-content-toolbar');
  const imageToolbar = document.querySelector('.page-image-toolbar');
  const imageStatus = document.querySelector('.page-image-status');
  const imageReplace = document.querySelector('.page-image-replace');
  const imageRestore = document.querySelector('.page-image-restore');
  const imageFit = document.querySelector('.page-image-fit');
  const imagePosition = document.querySelector('.page-image-position');
  const fileInput = document.querySelector('.page-file-input');
  const toast = document.querySelector('.page-editor-toast');

  const controlMap = {
    fontFamily: document.getElementById('pageFontFamily'),
    h1Size: document.getElementById('pageH1Size'),
    h2Size: document.getElementById('pageH2Size'),
    bodySize: document.getElementById('pageBodySize'),
    navyColour: document.getElementById('pageNavyColour'),
    accentColour: document.getElementById('pageAccentColour'),
    linkColour: document.getElementById('pageLinkColour'),
    sectionColour: document.getElementById('pageSectionColour'),
    dropdownBackground: document.getElementById('pageDropdownBackground'),
    dropdownBorder: document.getElementById('pageDropdownBorder'),
    dropdownText: document.getElementById('pageDropdownText'),
    dropdownWidth: document.getElementById('pageDropdownWidth'),
    dropdownRadius: document.getElementById('pageDropdownRadius'),
    paragraphAlignment: document.getElementById('pageParagraphAlignment'),
    sectionSpacing: document.getElementById('pageSectionSpacing'),
    contentWidth: document.getElementById('pageContentWidth')
  };

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
  }

  function adjustHex(hex, amount) {
    const value = hex.replace('#', '');
    const parts = [0, 2, 4].map(index => Math.max(0, Math.min(255, parseInt(value.slice(index, index + 2), 16) + amount)));
    return '#' + parts.map(part => part.toString(16).padStart(2, '0')).join('');
  }

  function showToast(message, isError = false) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.style.background = isError ? '#9b2c2c' : '#166443';
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function setCollapsed(collapsed) {
    document.body.classList.toggle('page-editor-collapsed', collapsed);
    const button = document.querySelector('.page-editor-collapse');
    button.setAttribute('aria-expanded', String(!collapsed));
    button.setAttribute('aria-label', collapsed ? 'Open page editor' : 'Collapse page editor');
    button.textContent = collapsed ? 'Edit page' : '⌃';
    try { localStorage.setItem(collapsedKey, String(collapsed)); } catch (error) {}
  }

  function applyDesign(settings) {
    rootStyle.setProperty('--editor-font-family', fontFamilies[settings.fontFamily] || fontFamilies.system);
    rootStyle.setProperty('--editor-h1-size', `${settings.h1Size}px`);
    rootStyle.setProperty('--editor-h2-size', `${settings.h2Size}px`);
    rootStyle.setProperty('--editor-body-size', `${settings.bodySize}px`);
    rootStyle.setProperty('--navy', settings.navyColour);
    rootStyle.setProperty('--navy-2', adjustHex(settings.navyColour, 14));
    rootStyle.setProperty('--orange', settings.accentColour);
    rootStyle.setProperty('--orange-dark', adjustHex(settings.accentColour, -24));
    rootStyle.setProperty('--blue', settings.linkColour);
    rootStyle.setProperty('--ice', settings.sectionColour);
    rootStyle.setProperty('--editor-paragraph-align', settings.paragraphAlignment);
    rootStyle.setProperty('--editor-section-spacing', `${settings.sectionSpacing}px`);
    rootStyle.setProperty('--max', `${settings.contentWidth}px`);
    rootStyle.setProperty('--dropdown-bg', settings.dropdownBackground);
    rootStyle.setProperty('--dropdown-border', settings.dropdownBorder);
    rootStyle.setProperty('--dropdown-text', settings.dropdownText);
    rootStyle.setProperty('--dropdown-width', `${settings.dropdownWidth}px`);
    rootStyle.setProperty('--dropdown-radius', `${settings.dropdownRadius}px`);
    Object.entries(controlMap).forEach(([key, control]) => {
      if (!control || settings[key] === undefined) return;
      control.value = settings[key];
      const output = control.parentElement?.querySelector('output');
      if (output) output.textContent = `${settings[key]}px`;
    });
  }

  function applyContent(content) {
    if (!Array.isArray(content)) return;
    content.forEach(item => {
      const target = document.querySelector(`[data-page-edit-id="${CSS.escape(item.id)}"]`);
      if (target && typeof item.html === 'string') target.innerHTML = item.html;
      if (target?.matches('a') && Object.prototype.hasOwnProperty.call(item, 'href')) {
        if (item.href === null) target.removeAttribute('href');
        else if (typeof item.href === 'string') target.setAttribute('href', item.href);
      }
    });
  }

  function applyImages(images) {
    if (!Array.isArray(images)) return;
    images.forEach(item => {
      const target = document.querySelector(`[data-page-image-id="${CSS.escape(item.id)}"]`);
      if (!target || !item.src) return;
      target.setAttribute('src', item.src);
      target.style.objectFit = item.fit || '';
      target.style.objectPosition = item.position || '';
    });
  }

  function readState() {
    return {
      design: { ...designSettings },
      content: editableElements.map(element => ({
        id: element.dataset.pageEditId,
        html: element.innerHTML,
        href: element.matches('a') ? element.getAttribute('href') : undefined
      })),
      images: editableImages.map(image => ({
        id: image.dataset.pageImageId,
        src: image.getAttribute('src'),
        fit: image.style.objectFit || '',
        position: image.style.objectPosition || ''
      })),
      updatedAt: new Date().toISOString()
    };
  }

  function storeState(addHistory = true) {
    const state = readState();
    try {
      const previous = localStorage.getItem(storageKey);
      if (addHistory && previous && previous !== JSON.stringify(state)) {
        const history = JSON.parse(localStorage.getItem(historyKey) || '[]');
        if (!history.length || JSON.stringify(history[0]) !== previous) history.unshift(JSON.parse(previous));
        localStorage.setItem(historyKey, JSON.stringify(history.slice(0, 5)));
      }
      localStorage.setItem(storageKey, JSON.stringify(state));
      showToast('All changes on this page have been saved.');
      return state;
    } catch (error) {
      showToast('The images are too large for browser storage. Download the HTML to keep this version.', true);
      return state;
    }
  }

  function loadInitialState() {
    let state = null;
    try { state = JSON.parse(localStorage.getItem(storageKey) || 'null'); } catch (error) {}
    state ||= exportedState;
    if (!state) {
      applyDesign(designSettings);
      return;
    }
    designSettings = { ...designDefaults, ...(state.design || {}) };
    applyDesign(designSettings);
    applyContent(state.content);
    applyImages(state.images);
    applyRequiredContentMigrations();
  }

  function applyRequiredContentMigrations() {
    const managedNavigationLink = document.querySelector('.site-nav > a[href="/managed-virtual-support/"]');
    if (managedNavigationLink) managedNavigationLink.textContent = 'Manage Virtual Support';
    const managedFooterLink = document.querySelector('.site-footer a[href="/managed-virtual-support/"]');
    if (managedFooterLink && /managed support|managed virtual support/i.test(managedFooterLink.textContent)) managedFooterLink.textContent = 'Manage virtual support';
  }

  function setDesignPanel(open) {
    designPanel.classList.toggle('open', open);
    designPanel.setAttribute('aria-hidden', String(!open));
    designButton.setAttribute('aria-expanded', String(open));
  }

  function setContentMode(open) {
    contentEditing = open;
    document.body.classList.toggle('page-content-editing', open);
    contentToolbar.classList.toggle('active', open);
    contentToolbar.setAttribute('aria-hidden', String(!open));
    contentButton.setAttribute('aria-pressed', String(open));
    editableElements.forEach(element => {
      if (open) {
        element.setAttribute('contenteditable', 'true');
        element.setAttribute('spellcheck', 'true');
      } else {
        element.removeAttribute('contenteditable');
        element.removeAttribute('spellcheck');
      }
    });
    if (open) {
      setImageMode(false);
      setDesignPanel(false);
    }
  }

  function setImageMode(open) {
    imageEditing = open;
    document.body.classList.toggle('page-image-editing', open);
    imageToolbar.classList.toggle('active', open);
    imageToolbar.setAttribute('aria-hidden', String(!open));
    imageButton.setAttribute('aria-pressed', String(open));
    if (open) {
      setContentMode(false);
      setDesignPanel(false);
    } else selectImage(null);
  }

  function selectImage(image) {
    selectedImage?.classList.remove('page-image-selected');
    selectedImage = image;
    selectedImage?.classList.add('page-image-selected');
    const active = Boolean(selectedImage);
    imageReplace.disabled = !active;
    imageRestore.disabled = !active;
    imageFit.disabled = !active;
    imagePosition.disabled = !active;
    if (active) {
      const computed = getComputedStyle(selectedImage);
      imageFit.value = ['cover', 'contain', 'fill'].includes(selectedImage.style.objectFit) ? selectedImage.style.objectFit : (['cover', 'contain', 'fill'].includes(computed.objectFit) ? computed.objectFit : 'cover');
      imagePosition.value = [...imagePosition.options].some(option => option.value === selectedImage.style.objectPosition) ? selectedImage.style.objectPosition : 'center center';
      imageStatus.textContent = `Selected: ${selectedImage.alt || selectedImage.dataset.pageImageId}.`;
    } else imageStatus.textContent = 'Select any outlined image, including the page or footer logo.';
  }

  function restoreSavedRange() {
    if (!savedRange) return false;
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(savedRange);
    return true;
  }

  function activeEditable() {
    if (savedRange) {
      const node = savedRange.commonAncestorContainer.nodeType === Node.ELEMENT_NODE ? savedRange.commonAncestorContainer : savedRange.commonAncestorContainer.parentElement;
      return node?.closest('[data-page-edit-id][contenteditable="true"]') || null;
    }
    return document.activeElement?.closest?.('[data-page-edit-id][contenteditable="true"]') || null;
  }

  function applyCommand(command, value = null) {
    if (!restoreSavedRange()) {
      showToast('Select text on the page first.', true);
      return;
    }
    document.execCommand(command, false, value);
    activeEditable()?.focus();
  }

  function setSelectedFontSize(size) {
    if (!size || !restoreSavedRange()) return;
    document.execCommand('fontSize', false, '7');
    const editable = activeEditable();
    editable?.querySelectorAll('font[size="7"]').forEach(font => {
      const span = document.createElement('span');
      span.style.fontSize = `${size}px`;
      while (font.firstChild) span.appendChild(font.firstChild);
      font.replaceWith(span);
    });
  }

  function normaliseLink(value) {
    const trimmed = String(value || '').trim();
    if (!trimmed) return null;
    if (/^(https?:\/\/|mailto:|tel:|\/|#)/i.test(trimmed)) return trimmed;
    if (/^[\w.-]+\.[a-z]{2,}(?:[/?#].*)?$/i.test(trimmed)) return `https://${trimmed}`;
    return null;
  }

  function selectedLink() {
    const editable = activeEditable();
    if (editable?.matches('a')) return editable;
    const selection = window.getSelection();
    if (selection.rangeCount) {
      const liveRange = selection.getRangeAt(0);
      const liveNode = liveRange.commonAncestorContainer.nodeType === Node.ELEMENT_NODE
        ? liveRange.commonAncestorContainer
        : liveRange.commonAncestorContainer.parentElement;
      const liveLink = liveNode?.closest('a');
      if (liveLink?.closest('[data-page-edit-id][contenteditable="true"]')) return liveLink;
    }
    if (!savedRange) return null;
    const node = savedRange.commonAncestorContainer.nodeType === Node.ELEMENT_NODE
      ? savedRange.commonAncestorContainer
      : savedRange.commonAncestorContainer.parentElement;
    return node?.closest('a') || null;
  }

  function editHyperlink() {
    const existing = selectedLink();
    if (!existing && !restoreSavedRange()) {
      showToast('Select words to link, or click an existing link first.', true);
      return;
    }
    const entered = window.prompt('Enter the link URL, page path, email or phone number:', existing?.getAttribute('href') || 'https://');
    if (entered === null) return;
    const href = normaliseLink(entered);
    if (!href) {
      showToast('Use an https:// URL, /page path, #section, mailto: or tel: link.', true);
      return;
    }
    if (existing) existing.setAttribute('href', href);
    else document.execCommand('createLink', false, href);
    activeEditable()?.focus();
    showToast('Hyperlink updated. Save all to keep the change.');
  }

  function removeHyperlink() {
    const existing = selectedLink();
    const editable = activeEditable();
    if (existing === editable) existing.removeAttribute('href');
    else if (existing) existing.replaceWith(...existing.childNodes);
    else if (restoreSavedRange()) document.execCommand('unlink', false, null);
    else {
      showToast('Click or select a hyperlink first.', true);
      return;
    }
    editable?.focus();
    showToast('Hyperlink removed. Save all to keep the change.');
  }

  async function resizeImage(file) {
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    const image = await new Promise((resolve, reject) => {
      const item = new Image();
      item.onload = () => resolve(item);
      item.onerror = reject;
      item.src = dataUrl;
    });
    const maxWidth = 1800;
    const maxHeight = 1200;
    const ratio = Math.min(1, maxWidth / image.naturalWidth, maxHeight / image.naturalHeight);
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.naturalWidth * ratio));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * ratio));
    canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/webp', .88);
  }

  function dataUrlFromBlob(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  async function downloadHtml() {
    const state = storeState(false);
    showToast('Preparing the editable HTML file…');
    const clone = document.documentElement.cloneNode(true);
    clone.querySelectorAll('[data-page-editor-ui]').forEach(element => element.remove());
    clone.querySelector('body')?.classList.remove('has-page-editor', 'page-editor-collapsed', 'page-content-editing', 'page-image-editing');
    clone.querySelectorAll('[contenteditable], [spellcheck], [data-page-edit-id], [data-page-image-id]').forEach(element => {
      element.removeAttribute('contenteditable');
      element.removeAttribute('spellcheck');
      element.removeAttribute('data-page-edit-id');
      element.removeAttribute('data-page-image-id');
    });
    clone.querySelectorAll('.page-image-selected').forEach(element => element.classList.remove('page-image-selected'));

    for (const link of [...clone.querySelectorAll('link[rel="stylesheet"][href]')]) {
      try {
        const href = new URL(link.getAttribute('href'), location.href).href;
        const css = await fetch(href).then(response => response.text());
        const style = clone.ownerDocument.createElement('style');
        style.textContent = css;
        link.replaceWith(style);
      } catch (error) {
        link.setAttribute('href', new URL(link.getAttribute('href'), location.href).href);
      }
    }

    for (const image of [...clone.querySelectorAll('img[src]')]) {
      const source = image.getAttribute('src');
      if (source.startsWith('data:')) continue;
      try {
        const response = await fetch(new URL(source, location.href).href);
        image.setAttribute('src', await dataUrlFromBlob(await response.blob()));
      } catch (error) {
        image.setAttribute('src', new URL(source, location.href).href);
      }
    }

    clone.querySelectorAll('a[href^="/"]').forEach(link => link.setAttribute('href', new URL(link.getAttribute('href'), location.origin).href));
    clone.querySelectorAll('script[data-voa-export-state]').forEach(script => script.remove());
    const stateScript = clone.ownerDocument.createElement('script');
    stateScript.dataset.voaExportState = 'true';
    stateScript.textContent = `window.__VOA_PAGE_EXPORTED_STATE__ = ${JSON.stringify(state).replaceAll('<', '\\u003c')};`;
    clone.querySelector('head').appendChild(stateScript);

    for (const script of [...clone.querySelectorAll('script[src]')]) {
      try {
        const source = new URL(script.getAttribute('src'), location.href).href;
        script.textContent = await fetch(source).then(response => response.text());
        script.removeAttribute('src');
        script.removeAttribute('defer');
      } catch (error) {
        script.setAttribute('src', new URL(script.getAttribute('src'), location.href).href);
      }
    }

    const blob = new Blob([`<!DOCTYPE html>\n${clone.outerHTML}`], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    const slug = routeKey.split('/').filter(Boolean).pop() || 'services';
    anchor.href = url;
    anchor.download = `voa-${slug}-edited.html`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast('Editable HTML downloaded.');
  }

  Object.entries(controlMap).forEach(([key, control]) => {
    control.addEventListener('input', () => {
      designSettings[key] = ['h1Size', 'h2Size', 'bodySize', 'sectionSpacing', 'contentWidth', 'dropdownWidth', 'dropdownRadius'].includes(key) ? Number(control.value) : control.value;
      applyDesign(designSettings);
    });
  });

  designButton.addEventListener('click', () => {
    setContentMode(false);
    setImageMode(false);
    setDesignPanel(!designPanel.classList.contains('open'));
  });
  document.querySelector('.page-editor-close').addEventListener('click', () => setDesignPanel(false));
  document.querySelector('.page-editor-save').addEventListener('click', () => storeState());
  document.querySelector('.page-editor-reset').addEventListener('click', () => {
    designSettings = { ...designDefaults };
    applyDesign(designSettings);
    showToast('The original page design has been restored.');
  });
  contentButton.addEventListener('click', () => setContentMode(!contentEditing));
  imageButton.addEventListener('click', () => setImageMode(!imageEditing));
  document.querySelector('.save-all').addEventListener('click', () => storeState());
  document.querySelector('.page-print').addEventListener('click', () => window.print());
  document.querySelector('.download-html').addEventListener('click', downloadHtml);
  document.querySelector('.page-editor-collapse').addEventListener('click', () => setCollapsed(!document.body.classList.contains('page-editor-collapsed')));

  document.querySelector('.page-restore-previous').addEventListener('click', () => {
    try {
      const history = JSON.parse(localStorage.getItem(historyKey) || '[]');
      const previous = history.shift();
      if (!previous) {
        showToast('No earlier saved version is available for this page.', true);
        return;
      }
      localStorage.setItem(historyKey, JSON.stringify(history));
      localStorage.setItem(storageKey, JSON.stringify(previous));
      designSettings = { ...designDefaults, ...(previous.design || {}) };
      applyDesign(designSettings);
      applyContent(previous.content);
      applyImages(previous.images);
      showToast('The previous saved version has been restored.');
    } catch (error) {
      showToast('The previous version could not be restored.', true);
    }
  });

  document.addEventListener('selectionchange', () => {
    if (!contentEditing) return;
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const node = range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE ? range.commonAncestorContainer : range.commonAncestorContainer.parentElement;
    if (node?.closest('[data-page-edit-id][contenteditable="true"]')) savedRange = range.cloneRange();
  });

  document.querySelectorAll('.page-format-button').forEach(button => {
    button.addEventListener('mousedown', event => event.preventDefault());
    button.addEventListener('click', () => {
      if (button.dataset.command) applyCommand(button.dataset.command);
      if (button.dataset.align) {
        const target = activeEditable();
        if (target) target.style.textAlign = button.dataset.align;
        else showToast('Click a text block first.', true);
      }
    });
  });
  document.querySelector('.page-selected-colour').addEventListener('input', event => applyCommand('foreColor', event.target.value));
  document.querySelector('.page-selected-size').addEventListener('change', event => {
    setSelectedFontSize(event.target.value);
    event.target.value = '';
  });
  document.querySelector('.page-link-button').addEventListener('click', editHyperlink);
  document.querySelector('.page-unlink-button').addEventListener('click', removeHyperlink);
  document.querySelector('.page-content-save').addEventListener('click', () => storeState());
  document.querySelector('.page-content-reset').addEventListener('click', () => {
    applyContent(defaultContent);
    showToast('The original text for this page has been restored.');
  });
  document.querySelector('.page-content-done').addEventListener('click', () => setContentMode(false));

  document.addEventListener('click', event => {
    if (contentEditing && event.target.closest('[data-page-edit-id]')) {
      const link = event.target.closest('a');
      if (link) event.preventDefault();
    }
    if (!imageEditing) return;
    const image = event.target.closest('img[data-page-image-id]');
    if (!image) return;
    event.preventDefault();
    event.stopPropagation();
    selectImage(image);
  }, true);

  imageReplace.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', async () => {
    const file = fileInput.files?.[0];
    if (!file || !selectedImage) return;
    if (!/^image\/(png|jpeg|webp)$/.test(file.type)) {
      showToast('Choose a PNG, JPG or WebP image.', true);
      fileInput.value = '';
      return;
    }
    try {
      selectedImage.src = await resizeImage(file);
      showToast('Image replaced. Select Save all to keep it in this browser.');
    } catch (error) {
      showToast('That image could not be processed.', true);
    }
    fileInput.value = '';
  });
  imageFit.addEventListener('change', () => { if (selectedImage) selectedImage.style.objectFit = imageFit.value; });
  imagePosition.addEventListener('change', () => { if (selectedImage) selectedImage.style.objectPosition = imagePosition.value; });
  imageRestore.addEventListener('click', () => {
    if (!selectedImage) return;
    const original = defaultImages.find(item => item.id === selectedImage.dataset.pageImageId);
    if (original) applyImages([original]);
    selectImage(selectedImage);
    showToast('The selected image has been restored.');
  });
  document.querySelector('.page-image-restore-all').addEventListener('click', () => {
    applyImages(defaultImages);
    selectImage(null);
    showToast('All original images on this page have been restored.');
  });
  document.querySelector('.page-image-done').addEventListener('click', () => setImageMode(false));

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    setDesignPanel(false);
    if (contentEditing) setContentMode(false);
    if (imageEditing) setImageMode(false);
  });

  loadInitialState();
  applyRequiredContentMigrations();
  try { setCollapsed(localStorage.getItem(collapsedKey) === 'true'); } catch (error) { setCollapsed(false); }
})();
