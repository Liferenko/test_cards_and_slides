/*global $*/
$('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(":first");
	}
	next
		.children(":first-child")
		.clone()
		.appendTo($(this));

	for (var i = 0; i < 2; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(":first");
		}

		next
			.children(":first-child")
			.clone()
			.appendTo($(this));
	}
});



// $(document).ready(function(){
//   $('.lazy').slick({
//     lazyLoad: 'ondemand',
//     slidesToShow: 3,
//     slidesToScroll: 1
//   });
// });