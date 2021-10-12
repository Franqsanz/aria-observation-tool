const ALabel = document.getElementById('aria-label');
const AExpanded = document.getElementById('aria-expanded');
const AHaspopup = document.getElementById('aria-haspopup');
const AHidden = document.getElementById('aria-hidden');


ALabel.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: ariaLabel,
  });
})

function ariaLabel() {
  const span = document.querySelectorAll('span');
  const btn = document.querySelectorAll('button');
  const svg = document.querySelectorAll('svg');

  // Span
  for (let i = 0; i < span.length; i++) {
    if (span[i].ariaLabel === null) {
      span[i].style.outline = '2px dashed #ffd900';
    }
    // console.log(span[i]);
  }

  // Button
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].ariaLabel === null) {
      btn[i].style.outline = '2px dashed #ffd900';
    }
  }

  // SVG
  for (let i = 0; i < svg.length; i++) {
    if (svg[i].ariaLabel === null) {
      svg[i].style.outline = '2px dashed #ffd900';
    }
  }
}


AExpanded.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: ariaExpanded,
  });
})

function ariaExpanded() {
  const span = document.querySelectorAll('span');
  const btn = document.querySelectorAll('button');

  for (let i = 0; i < span.length; i++) {
    if (span[i].ariaExpanded === null) {
      span[i].style.outline = '2px dashed #f10000';
    }
  }

  for (let i = 0; i < btn.length; i++) {
    if (btn[i].ariaExpanded === null) {
      btn[i].style.outline = '2px dashed #f10000';
    }
  }
}


AHaspopup.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: ariaHaspopup,
  });
})

function ariaHaspopup() {
  const span = document.querySelectorAll('span');
  const svg = document.querySelectorAll('svg');

  for (let i = 0; i < span.length; i++) {
    if (span[i].ariaHasPopup === null) {
      span[i].style.outline = '2px dashed violet';
    }
  }

  for (let i = 0; i < svg.length; i++) {
    if (svg[i].ariaHasPopup === null) {
      svg[i].style.outline = '2px dashed violet';
    }
  }
}


AHidden.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: ariaExpanded,
  });
})

function ariaExpanded() {
  const btn = document.querySelectorAll('button');
  // const svg = document.querySelectorAll('svg');

  for (let i = 0; i < btn.length; i++) {
    if (btn[i].ariaExpanded === null) {
      btn[i].style.outline = '2px dashed orange';
    }
  }

  // for (let i = 0; i < svg.length; i++) {
  //   if (svg[i].ariaExpanded === null) {
  //     svg[i].style.outline = '2px dashed orange';
  //   }
  // }
}