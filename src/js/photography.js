$('document').ready(function (){
	var imageDiv = getItems();
	// document.getElementById('photography-grid').innerHTML = imageDiv;
	var $container = $('#photography-grid');
	var $items = $(imageDiv);
	$container.append($items);
	// var $grid = $('#grid').imagesLoaded( function() {
		$container.masonry({
		  itemSelector: '.grid-item',
		  // columnWidth: 400,
		  percentPosition: true
		});

	    $items.imagesLoaded().progress(function(imgLoad, image) {
	      	$container.masonry('layout', $items);
	    });
	// });
});


var $images = ['1.jpg', '2.jpg', '3.jpg','4.jpg','5.jpg','6.jpg', '7.jpg', '8.jpg', '9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg', '15.jpg'];
// Images Array
function getItem(image) {
	return '<div class="grid-item">' + '<img src="src/assets/photography/' + image + '"/></div>\n';
}

function getItems() {
	var images = ['1.jpg', '2.jpg', '3.jpg','4.jpg','5.jpg','6.jpg', '7.jpg', '8.jpg', '9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg', '15.jpg'];
	var imageDiv = "";
	for (var i = 0; i < images.length; i++){
		imageDiv += getItem(images[i]);
	}
	return imageDiv;
}
