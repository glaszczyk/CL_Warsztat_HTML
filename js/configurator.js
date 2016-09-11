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