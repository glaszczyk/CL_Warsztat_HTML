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