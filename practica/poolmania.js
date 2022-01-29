<script>
		if(window.location.href.includes('/pago_ok') || window.location.href.includes('/pago_OK_transfer')){
			// Probamos con la lista de productos en pantalla
			var googleListPurchase = document.querySelectorAll('.lista-productos');
			var googleItemsPurchase = [];
			var dataLayer = window.dataLayer || []; //esto está añadido 
			
			googleListPurchase.forEach(function(el){
				var GoogleProductsPurchase = {
					"name": el.querySelector('.nombre-producto').innerText,
					"quantity": Number(el.querySelector('.cantidad-producto').innerText.replace('×','')),
					"price": Number(el.querySelector('.precio-producto').innerText.replace('€','')) // Ya está sin ',' y con '.' en decimal  -//- .replace('.','').replace(',','.'))
				};

				googleItemsPurchase.push(GoogleProductsPurchase);
			});
            //tamién puede ir aqui
            window.dataLayer = window.dataLayer || [];
			dataLayer('event', 'purchase', {
				"transaction_id": document.querySelector('.compra-codigo').innerText,
				"affiliation": "Homolog",
				"value": Number(document.querySelector('.compra-total').innerText.replace('€','')), // Ya está sin ',' y con '.' en decimal  -//- .replace('.','').replace(',','.')),
				"currency": "EUR",
				"items": googleItemsPurchase
			});
		}
	</script>