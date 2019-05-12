$('document').ready(function (){
	var imageDiv = getItems();
	var $container = $('#photography-grid');
	var $items = $(imageDiv);
	$container.append($items);
	$container.masonry({
	  itemSelector: '.grid-item',
	  percentPosition: true
	});

    $items.imagesLoaded().progress(function(imgLoad, image) {
      	$container.masonry('layout', $items);
    });
});

function getItem(image) {
	return '<div class="grid-item">' + '<img src="src/assets/photography/' + image + '"/></div>\n';
}

function getItems() {
	var images = ['1.jpg', '2.jpg', '3.jpg','4.jpg','5.jpg','6.jpg', '7.jpg', '8.jpg', '9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg'];
	var imageDiv = "";
	for (var i = 0; i < images.length; i++){
		imageDiv += getItem(images[i]);
	}
	return imageDiv;
}
