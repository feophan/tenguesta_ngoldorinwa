// js/extra.js

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("table").forEach(function(table) {
    table.classList.add("docutils");
  });
});



document.querySelector('.section').querySelectorAll(':scope > p').forEach(function(item, i) {
	$(item).attr('id', mkdocs_page_name.match(/^[0-9]+/)[0] + "." + parseInt(i + 1));
	$(item).attr('class', 'ref');
});

var z = 1;
document.querySelector('.section').querySelectorAll(':scope > ol').forEach(function(item, i) {
	item.querySelectorAll(':scope > li').forEach(function(itemLi, j) {
		itemLi.style.listStyleType = "none";
		$(itemLi).attr('id', z);
		z = z + 1;
	});
});