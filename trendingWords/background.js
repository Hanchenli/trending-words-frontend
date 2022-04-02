const color = '#F7DC6F';
const pcTrending = '5';

chrome.runtime.onInstalled.addListener(() => {
  console.log('Chrome extension successfully installed!');
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ pcTrending });
  console.log('Default color set to', color);
  console.log('Default percent trending set to', pcTrending);
  return;
});
