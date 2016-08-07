document.addEventListener('DOMContentLoaded', function () {

	var nextItem = document.querySelector('.carousel__slider--next'),
		prevItem = document.querySelector('.carousel__slider--previous'),
		slideItems = document.querySelectorAll('[class*="carousel__slide-item"]'),
		size = slideItems.length,
		elementFirst = slideItems[0],
		elementLast = slideItems[size-1],
		element = elementFirst;

	console.log(nextItem);
	console.log(prevItem);
	console.log(slideItems);

	nextItem.addEventListener('click', function (event) {
		element.classList.add('carousel__slide-item--hidden');
		element.classList.remove('carousel__slide-item');
		element =  element.nextElementSibling;
		if (element === null) {
			element = elementFirst;
		}
		element.classList.add('carousel__slide-item');
		element.classList.remove('carousel__slide-item--hidden');
	});
	prevItem.addEventListener('click', function (event) {
		element.classList.add('carousel__slide-item--hidden');
		element.classList.remove('carousel__slide-item');
		element =  element.previousElementSibling;
		if (element === null) {
			element = elementLast;
		}
		element.classList.add('carousel__slide-item');
		element.classList.remove('carousel__slide-item--hidden');
	});


});