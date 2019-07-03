// Слайдер на главной в Промо-блоке

(function() {
	const swiperMain = new Swiper('.promo-swiper', {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
})();


(function() {
	const swSet = new Swiper('.single-set__slider', {
		loop: false,
		loop: true,
		navigation: {
			nextEl: '.set-slider--next-arrow ',
			prevEl: '.set-slider--prev-arrow ',
		},
		slidesPerView: 4,
		// spaceBetween: 40,
		// slidesPerGroup: 1,
		loopFillGroupWithBlank: true,
		// Responsive breakpoints
		// breakpoints: {
		// 	// when window width is <= 320px
		// 	1700: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 20,
		// 	},
		// 	// when window width is <= 480px
		// 	1400: {
		// 		slidesPerView: 4,
		// 	},
		// 	// when window width is <= 640px
		// 	640: {
		// 		slidesPerView: 3,
		// 	}
		// }
	});
})();


(function() {
	const menu = document.querySelector(`.menu`);
	const burger = menu.querySelector(`.hambergerIcon`);
	const nav = document.querySelector(`.site-nav`);
	const body = document.querySelector(`body`);

	menu.addEventListener(`click`, () => {
		burger.classList.toggle(`open`);
		nav.classList.toggle(`site-nav--active`);
		body.classList.toggle(`body--overflow`);
	});
})();