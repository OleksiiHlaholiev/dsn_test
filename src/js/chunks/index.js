$(function () {
    $('.news-header-cont').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active').slideToggle();
    });

    $(function () {
        let coursesSlider = $(".courses-slider");

        $(coursesSlider).owlCarousel({
            loop:true,
            margin:15,
            items:1,
            nav:false,
            autoplay:false,

            smartSpeed:1000,
            autoplayTimeout:7000,
            autoplayHoverPause:false,

            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:2
                },
                768:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        });

        // Go to the next item
        $('.courses-slider-cont .arrow-left-btn').click(function() {
            $(coursesSlider).trigger('prev.owl.carousel');
        });
        // Go to the previous item
        $('.courses-slider-cont .arrow-right-btn').click(function() {
            $(coursesSlider).trigger('next.owl.carousel');
        });

    });
});
