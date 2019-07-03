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
		navigation: {
			nextEl: '.set-slider--next-arrow ',
			prevEl: '.set-slider--prev-arrow ',
		},
		slidesPerView: 4,
		spaceBetween: 40,
		loopFillGroupWithBlank: false,
		breakpoints: {
			// when window width is <= 1500px
			1500: {
				slidesPerView: 'auto',
				watchSlidesVisibility: true,
				freeMode: true,
			},
			768: {
				spaceBetween: 30,
			},
			500: {
				spaceBetween: 20,
			}
		}
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