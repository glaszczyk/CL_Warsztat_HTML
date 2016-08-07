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