// js/extra.js


document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("table").forEach(function(table) {
    table.classList.add("docutils");
  });
});

document.querySelectorAll(".ref").forEach(function(item, i) {
	$(item).attr('id', $(item).attr('id') + "." + parseInt(i + 1));
});

document.querySelectorAll(".exp").forEach(function(item, i) {
	item.closest("li").style.listStyleType = "none";
	$(item).attr('id', "exp." + parseInt(i + 1));
});