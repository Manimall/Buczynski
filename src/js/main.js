// Слайдер на главной в Промо-блоке


const swiperMain = new Swiper('.promo-swiper', {
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const swiperSet = new Swiper('.single-set__slider', {
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.set-slider--next-arrow ',
		prevEl: '.set-slider--prev-arrow ',
	},
});

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