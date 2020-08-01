$(document).ready(function(){

    let sChar;
    if(window.matchMedia("(max-width: 1920px)").matches) {
        sChar = 300;
    }

    let moretext = "...See More";
    let lesstext = "...See Less";

    $(".blog-seemore").each(function () {
        let content = $(this).html();

        if (content.length > sChar) {
        let c = content.substr(0, sChar);
        let h = content.substr(sChar + 1, content.length - sChar);

        let html =
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

});