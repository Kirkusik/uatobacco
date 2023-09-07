import { isWebp } from "./modules";

// Проверка браузера на поддерку .webp изображений ====================================================================================================================================================
isWebp();
// ====================================================================================================================================================
document.addEventListener("DOMContentLoaded", () => {
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

	const menuBtn = document.querySelector(".menu-toggle");

	menuBtn.addEventListener("click", () => {
		const menu = document.querySelector(".menu");
		menu.classList.toggle("menu--active");
	});
});
