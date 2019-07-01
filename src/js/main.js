// Слайдер на главной в Промо-блоке


const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

(function() {
	const burger = document.querySelector(`.hambergerIcon`);
	const nav = document.querySelector(`.site-nav`);
	const body = document.querySelector(`body`);

	burger.addEventListener(`click`, () => {
		burger.classList.toggle(`open`);
		nav.classList.toggle(`site-nav--active`);
		body.classList.toggle(`body--overflow`);
	});
})();