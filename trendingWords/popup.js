// function setTrending() {
//     let percentTrending = $("#select").find("option:selected").val();
//     chrome.storage.sync.percentTrending = percentTrending;
//     console.log(percentTrending);
// }

let pcTrending = chrome.storage.sync.get("pcTrending");
console.log("currentPercent:", pcTrending);

const select = document.getElementById("select");

// function setPcTrending(event) {
//     pcTrending = event.target.value;
//     chrome.storage.sync.set({pcTrending});
//     console.log(pcTrending);
// }

select.addEventListener('change', (event) => {
    pcTrending = event.target.value;
    chrome.storage.sync.set({pcTrending});
    console.log(pcTrending);
});
