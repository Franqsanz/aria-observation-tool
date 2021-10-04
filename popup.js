const ALabel = document.getElementById('aria-label');

ALabel.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: ariaLabel,
  });
})

function ariaLabel() {
  const a = document.querySelectorAll('a');
  const btn = document.querySelectorAll('button');

  for (let i = 0; i < a.length; i++) {
    if (a[i].ariaLabel === null) {
      a[i].style.outline = '2px dashed #ffd900';
    }
    // console.log(a[i]);
  }

  for (let i = 0; i < btn.length; i++) {
    if (btn[i].ariaLabel === null) {
      btn[i].style.outline = '2px dashed #ffd900';
    }
  }
}

const AExpanded = document.getElementById('aria-expanded');

AExpanded.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: ariaExpanded,
  });
})

function ariaExpanded() {
  const a = document.querySelectorAll('a');
  const btn = document.querySelectorAll('button');

  for (let i = 0; i < a.length; i++) {
    if (a[i].ariaExpanded === null) {
      a[i].style.outline = '2px dashed #f10';
    }
  }

  for (let i = 0; i < btn.length; i++) {
    if (btn[i].ariaExpanded === null) {
      btn[i].style.outline = '2px dashed #f10';
    }
  }
}