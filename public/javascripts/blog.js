$(document).ready(function () {

    const max1920 = window.matchMedia("(max-width: 1920px)");

    if(max1920.matches) {

        var sChar = 300;
        var moretext = "...See More";
        var lesstext = "...See Less";

        $(".more").each(function () {
            var content = $(this).html();

            if (content.length > sChar) {
            var c = content.substr(0, sChar);
            var h = content.substr(sChar + 1, content.length - sChar);

            var html =
                c +
                '<span class="moreellipses">' +
                '&nbsp;</span><span class="morecontent"><span>' +
                h +
                '</span>&nbsp;&nbsp;<a href="" class="Seemore facebookmorelink">' +
                moretext +
                "</a></span>";
            
            $(this).html(html);
            }
        });

        $(".facebookmorelink").click(function () {
            if ($(this).hasClass("less")) {
                $(this).removeClass("less");
                $(this).html(moretext);
            } else {
                $(this).addClass("less");
                $(this).html(lesstext);
            }

            $(this).prev().toggle();

            return false;
        });
    }

});