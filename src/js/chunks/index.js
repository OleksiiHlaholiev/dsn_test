$(function () {
    $('.news-header-cont').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active').slideToggle();
    });
});
