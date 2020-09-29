// Code to add a caption to a piece of artwork
// capture all items with a class of artwork
const pic = document.querySelectorAll(".artwork");
// each time an item with class of rtwork is clicked change class to headinOn
pic.forEach((pic) => {
	pic.addEventListener("mouseover", () => {
		pic.classList.toggle("headingOn");
	});
});
// Code for toggle hamburger menu
$(function () {
	$(".toggleNav").on("click", function () {
		$(".flex-nav ul").toggleClass("open");
	});
});
