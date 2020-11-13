// Back to top button
const toTop = document.querySelector(".toTop");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 300) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove ("active");
	}
})
