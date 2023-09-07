const hero = document.querySelector(".hero");

window.addEventListener("scroll", (event) => {
	const height = 100;
	const header = document.querySelector(".page-header");

	if (window.scrollY >= height) {
		header.classList.add("page-header--fixed");
	} else {
		header.classList.remove("page-header--fixed");
	}

	let offset = window.pageYOffset;
	hero.style.backgroundPositionY = offset * 0.7 + "px";
});
