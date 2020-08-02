$(document).ready(function() {

    let loc = window.location.href;
    $('.navbar ul li a').each(function() {
        let status = loc.indexOf($(this).attr('href'));
        $(this).closest('li').removeClass('active font-bold');
        console.log(status);

        if (-1 != status) {
            console.log(status);
            $(this).closest('li').addClass('active font-bold');
        }
    });
})