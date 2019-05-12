$('document').ready(function (){
	var imageDiv = getItems();
	var $container = $('#digital-grid');
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
	return '<div class="grid-item">' + '<img src="src/assets/digital/' + image + '"/></div>\n';
}

function getItems() {
	var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
	var imageDiv = "";
	for (var i = 0; i < images.length; i++){
		imageDiv += getItem(images[i]);
	}
	return imageDiv;
}
