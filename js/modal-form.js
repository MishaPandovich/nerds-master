var link = document.querySelector(".contacts__bnt");
var popup = document.querySelector(".modal-map");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
});