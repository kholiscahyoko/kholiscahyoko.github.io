// $('#navbarNav .navbar-nav a').on('click', function () {
//     console.log("clicked");
//     $('#navbarNav .navbar-nav').find('.nav-link.active').removeClass('active');
//     $(this).addClass('active');
// });

$('img.certs').on('click', function () {
    $("#certsModal img").attr('src', $(this).attr('src'));
    $("#certsModal img").attr('alt', $(this).attr('alt'));
    $("#certsModal").modal('show');
});