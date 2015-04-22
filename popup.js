$(function() {
  console.log("popup.js!");
  chrome.tabs.query(
    {lastFocusedWindow: true},
    createTreeFromTabs)
});

function createTreeFromTabs(tabs) {
  var c=document.getElementById("drawing-board");
  var context=c.getContext("2d");

  var y=10;
  $.each(tabs, function(index, tab) {
    context.textAlign="center";
    context.fillText(tab.title, 5, y, 128);
    y+=12;
    //$("<p>").text(tab.title).appendTo(results);
  })
}