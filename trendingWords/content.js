const tags = ['div', 'p', 'a', 'b', 'span', 'i', 'ul', 'li']; // Tags
const elems = document.querySelectorAll(tags);
const text_arr = [];
elems.forEach(function (elem) {
  const text = $(elem).text().trim();
  if (text) {
    text_arr.push(text);
  }
});

console.log('text array===>>>>>>', text_arr);

/*

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {

    //
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


*/

// Mark and highlight words
function highlighter(results) {
  results.forEach(function (result) {
    $('body').mark(result, {
      element: 'span',
      className: 'highlight',
      separateWordSearch: false,
    });
  });
  chrome.storage.sync.get('color', ({ color }) => {
    $('.highlight').css({ 'background-color': color });
  });
}

// Erase highlights
function eraser() {
  $('body').unmark({ className: 'highlight' });
}

// tippy('.highlight', {
//   content: 'My tooltip!',
//   placement: "right",
//   theme:"light",
//   trigger:"click"
// });

// Everytime the server passes the keywords
// Run the functions below
const results = ['war'];
eraser();
highlighter(results);

// bootstrap.Tooltip.getOrCreateInstance($(".highlighter")[0]);

// $("body").tooltip({
//   placement:"right",
//   selector:".highlight"
// });

// Add Tooltip for highlighted words
