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

// Слайдер в карточке товара на странице Товара и Сета
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
				slidesPerView: 'auto',
				watchSlidesVisibility: true,
			},
			500: {
				spaceBetween: 20,
				slidesPerView: 'auto',
				watchSlidesVisibility: true,
			}
		}
	});
})();


(function() {
	const menu = document.querySelector(`.menu`);
	const burger = menu.querySelector(`.hambergerIcon`);
	const nav = document.querySelector(`.site-nav`);
	const siteWrapper = document.querySelector(`.site-wrapper`);

	menu.addEventListener(`click`, () => {
		burger.classList.toggle(`open`);
		nav.classList.toggle(`site-nav--active`);
		siteWrapper.classList.toggle(`body--overflow`);
	});

	//	тест
//put this when popup opens, to stop body scrolling
	bodyScrollLock.disableBodyScroll(nav);

//put this when close popup and show scrollbar in body
	bodyScrollLock.enableBodyScroll(nav);
})();

(function() {
	const orderPopup = document.querySelector(`.modal--buy`);
	if (orderPopup) {
		const formOrderCloseBtn = orderPopup.querySelector(`.modal__popup-close`);

		const closePopup = (evt) => {
			evt.preventDefault();
			$('.modal--buy').modal('hide');
		};

		formOrderCloseBtn.addEventListener('click', closePopup);
		document.addEventListener('keydown', function(evt) {
			return (evt.which === 27) && closePopup(evt);
		});
	}
})();