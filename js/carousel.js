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