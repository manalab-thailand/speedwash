$(document).ready(function() {

    const max375 = window.matchMedia("(max-width: 375px)");
    const max414 = window.matchMedia("(max-width: 414px)");
    const max768 = window.matchMedia("(max-width: 768px)");
    const max1024 = window.matchMedia("(max-width: 1024px)");
    const max1366 = window.matchMedia("(max-width: 1366px)");
    const max1440 = window.matchMedia("(max-width: 1440px)");

    if (max375.matches) {
        var sChar = 130;
        var moretext = "...See More";
        var lesstext = "...See Less";

        $(".more").each(function() {
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

        $(".facebookmorelink").click(function() {
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
    } else if (max414.matches) {
        var sChar = 165;
        var moretext = "...See More";
        var lesstext = "...See Less";

        $(".more").each(function() {
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

        $(".facebookmorelink").click(function() {
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
    } else if (max768.matches) {
        var sChar = 195;
        var moretext = "...See More";
        var lesstext = "...See Less";

        $(".more").each(function() {
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

        $(".facebookmorelink").click(function() {
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
    } else if (max1024.matches) {
        var sChar = 250;
        var moretext = "...See More";
        var lesstext = "...See Less";

        $(".more").each(function() {
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

        $(".facebookmorelink").click(function() {
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
    } else if (max1366.matches) {
        var sChar = 260;
        var moretext = "...See More";
        var lesstext = "...See Less";

        $(".more").each(function() {
            var content = $(this).html();

            if (content.length > sChar) {
                var c = content.substr(0, sChar);
                var h = content.substr(sChar, content.length - sChar);

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

        $(".facebookmorelink").click(function() {
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
    } else if (max1440.matches) {
        var sChar = 260;
        var moretext = "...See More";
        var lesstext = "...See Less";

        $(".more").each(function() {
            var content = $(this).html();

            if (content.length > sChar) {
                var c = content.substr(0, sChar);
                var h = content.substr(sChar, content.length - sChar);

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

        $(".facebookmorelink").click(function() {
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