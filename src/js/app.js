import { isWebp } from "./modules";
import AOS from "aos";
// Проверка браузера на поддерку .webp изображений ====================================================================================================================================================
isWebp();
// ====================================================================================================================================================
document.addEventListener("DOMContentLoaded", () => {
	AOS.init({
		delay: 300,
		duration: 1000,
	});

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

	menuBtn.addEventListener("click", function menuClickHandler() {
		const menuWrapper = document.querySelector(".menu-wrapper");
		const menu = document.querySelector(".page__menu");

		menuWrapper.classList.toggle("menu-wrapper--active");
		document.body.classList.toggle("page__body--w-overflow");
		menuBtn
			.querySelector(".menu-toggle__icon")
			.classList.toggle("menu-toggle__icon--active");

		menu.addEventListener("click", function menuLinkHandler(e) {
			if (e.target.closest(".page__menu a")) {
				console.log(e.target);

				document.body.classList.toggle("page__body--w-overflow");
				menuWrapper.classList.toggle("menu-wrapper--active");
				menuBtn
					.querySelector(".menu-toggle__icon")
					.classList.toggle("menu-toggle__icon--active");

				menu.removeEventListener("click", menuLinkHandler);
			}
		});

		// menuBtn.removeEventListener("click", menuClickHandler);
	});
});
