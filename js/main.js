
const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    item: 3,
});

// Go to the previous item
$('.slider_btn--prev').click(function() {
    
    owl.trigger('prev.owl.carousel');
})

$('.slider_btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})