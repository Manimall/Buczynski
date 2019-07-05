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
	const body = document.querySelector(`body`);

	menu.addEventListener(`click`, () => {
		burger.classList.toggle(`open`);
		nav.classList.toggle(`site-nav--active`);
		body.classList.toggle(`body--overflow`);
	});
})();

(function() {
	// const formOrderOpenBtn = document.querySelector(`.cart__to-order`);
	const body = document.querySelector(`body`);
	const orderPopup = document.querySelector(`.modal--buy`);
	// const orderForm = orderPopup.querySelector(`.modal__form`);
	const formOrderCloseBtn = orderPopup.querySelector(`.modal__popup-close`);

	// const userName = orderForm.querySelector('#your-name');
	// const userPhone = orderForm.querySelector('#your-phone');
	//
	// const userAddress = orderForm.querySelector(`#address`);
	// //добавить проверку на заполненность селекта с выбором способа оплаты
	//
	// let isStorageSupport = true;
	// let storage = '';
	//
	// try {
	// 	storage = localStorage.getItem('userName');
	// } catch (err) {
	// 	isStorageSupport = false;
	// }
	//
	// formOrderOpenBtn.addEventListener('click', function (evt) {
	// 	evt.preventDefault();
	// 	orderPopup.classList.add('modal--open');
	//
	// 	if (storage) {
	// 		userName.value = storage;
	// 		userPhone.focus();
	// 	} else {
	// 		userName.focus();
	// 	}
	// });
	//
	// orderForm.addEventListener('submit', function (evt) {
	// 	if (!userName.value || !userPhone.value || !userAddress) {
	// 		evt.preventDefault();
	// 		orderPopup.classList.remove("modal--error");
	// 		orderPopup.offsetWidth = orderPopup.offsetWidth;
	// 		orderPopup.classList.add('modal--error');
	// 	} else {
	// 		if (isStorageSupport) {
	// 			localStorage.setItem(`userName`, userName.value);
	// 		}
	// 	}
	// });
	//
	const closePopup = (evt) => {
		evt.preventDefault();
		$('.modal--buy').modal('hide');
	};

	formOrderCloseBtn.addEventListener('click', closePopup);
	document.addEventListener('keydown', function(evt) {
		return (evt.which === 27) && closePopup(evt);
	});
})();