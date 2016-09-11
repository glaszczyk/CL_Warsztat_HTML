// Menu
document.addEventListener('DOMContentLoaded', function () {

	var menuItem = document.querySelectorAll('.navigation__menu-item');

	for (var i = 0; i < menuItem.length; i++) {
		menuItem[i].addEventListener('mouseover', function(event) {
			this.firstElementChild.classList.toggle('navigation__submenu-box--hidden');
		});
		menuItem[i].addEventListener('mouseout', function(event) {
			this.firstElementChild.classList.add('navigation__submenu-box--hidden');
		});
	}

});

// Gallery
document.addEventListener('DOMContentLoaded', function () {

	var galleryItems = document.querySelectorAll('.gallery-image-container');
	console.log(galleryItems);
	for (var i = 0; i < galleryItems.length; i++) {	
		galleryItems[i].addEventListener('mouseover', function (event) {
			this.firstElementChild.classList
			.add('gallery-image-container__overlay--hidden');
			this.firstElementChild.classList
			.remove('gallery-image-container__overlay');
		});
		galleryItems[i].addEventListener('mouseout', function (event) {
			this.firstElementChild.classList
			.add('gallery-image-container__overlay');
			this.firstElementChild.classList
			.remove('gallery-image-container__overlay--hidden');
		});
	
	}

});

// Carousel
document.addEventListener('DOMContentLoaded', function () {

	var nextItem = document.querySelector('.carousel__slider--next'),
		prevItem = document.querySelector('.carousel__slider--previous'),
		slideItems = document.querySelectorAll('[class*="carousel__slide-item"]'),
		size = slideItems.length,
		i = 0,
		element = slideItems[i];


	console.log(nextItem);
	console.log(prevItem);
	console.log(slideItems);
	
	slide = function slide(direction) {
		element.classList.add('carousel__slide-item--hidden');
		element.classList.remove('carousel__slide-item');
		if (direction) {
			if (i < size-1) {
				i += 1;
			} else {
				i = 0;
			}
		} else {
			if (i > 0) {
				i -= 1;
			} else {
				i = size - 1;
			}
		}
		element =  slideItems[i]; 
		element.classList.add('carousel__slide-item');
		element.classList.remove('carousel__slide-item--hidden');		
	}

	// sprawdzamy czy naciśniętu slajd do przodu (true), czy do tyłu (false)
	nextItem.addEventListener('click', function (event) {
		slide(true);
	});
	prevItem.addEventListener('click', function (event) {
		slide(false);
	});


});

// Konfigurator
$(document).ready( function() {
	// testujemy
	console.log('Skrypt konfiguratora działa!');

	// tworzymy referencje do poszczególnych elementów formularza konfiguracyjnego
	var $form = $( '.custom-chair'),
		$prices = $('.prices');

	var getVal = function getVal ( element ) {
		var selected = element.find(':selected' ),
			item = {
				select: element.attr("name"),
				name: selected.text(),
				price: selected.data('price')
			};
		return item;
	};

	var total = function total () {
		var $total = $('.total-value'),
			$price = $prices.find('[class*=prices__price]'),
			sum = 0;
		
		for (var i = $price.length - 2; i >= 0; i--) {
			// zamieniamy poszczególne kwoty na numer
			var number = parseFloat($price[i].innerText);
			if (number) {
				sum += number;
			}
		}
		$total
			.text(sum + " zł");
	};
	
	// przechwytywanie zmiany list rozwijanych dla poszczególnych elementów fotela
	$form.on('change', '.custom-chair__list', function (event) {
		// caching elementów
		var $this = $(this),
			$val = getVal( $this ),
			attrib = '.'+$val.select,
			$span = $(attrib);
		
		// uzupełniamy nazwę ( .text() ) i cenę ( .next().text() ) dla poszczególnych elementów
		$span
			.text($val.name)
			.next().text($val.price + ' zł');
		// aktualizujemy sumę
		total();
	});

	// funkcja dla obsługi checkboxa transport
	$form.on('click', '.custom-chair__checkbox', function (event) {
		// cachujemy span dla transportu
		var $transport = $( '.chair-transport');
		// jeśli checkbox jest zaznaczony dodajemy cenę transportu, jeśli nie zerujemy transport
		if ( $(this).is( ':checked') ) {
			$transport
				.text('Transport')
				.next().text("150 zł");
		} else {
			$transport
				.text('')
				.next().text("");
		}
		// aktualizujemy sumę
		total();
	});

});