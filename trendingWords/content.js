const instance = axios.create({
  baseURL: 'http://162.243.174.63:8000/api/',
  timeout: 1000,
});

/**
 * Retrieve the response from the trending endpoint
 * @param {} wordList
 */
async function trendingWords(wordList) {
  console.log(wordList);
  instance
    .post('trending/', wordList)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
}

/**
 * Extracts all text from HTML page
 * @returns List of extracted text
 */
function extractPageText() {
  const tags = ['div', 'p', 'a', 'b', 'span', 'i', 'ul', 'li']; // Tags
  const elems = document.querySelectorAll(tags);
  const text_arr = [];
  elems.forEach(function (elem) {
    const text = $(elem).text().trim();
    if (text) {
      text_arr.push(text);
    }
  });
  return text_arr;
}

/**
 * Mark and highlight words
 */
function highlighter(results) {
  results.forEach(function (result) {
    $('body').mark(result, {
      accuracy: 'exactly',
      element: 'span',
      className: 'highlight',
      separateWordSearch: false,
    });
  });
  chrome.storage.sync.get('color', ({ color }) => {
    $('.highlight').css({ 'background-color': color });
  });
}

/**
 * Erase highlights
 */
function eraser() {
  $('body').unmark({ className: 'highlight' });
}

// Main program text
const wordList = extractPageText();
trendingWords(wordList);
// Everytime the server passes the keywords
// Run the functions below
const results = ['war'];
eraser();
highlighter(results);
