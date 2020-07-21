$(document).ready(function () {

    const max375 = window.matchMedia("(max-width: 375px)");
    const max414 = window.matchMedia("(max-width: 414px)");
    const max768 = window.matchMedia("(max-width: 768px)");
    const max1024 = window.matchMedia("(max-width: 1024px)");

    if (max375.matches) {
        var maxheight = 71;
        var showText = "...See More";
        var hideText = "...See Less";
        $(".textContainer_Truncate").each(function () {
        var text = $(this);
        if (text.height() > maxheight) {
            text.css({ overflow: "hidden", height: maxheight + "px" });
            var link = $(
            '<c href="#" style="font-size:12px; font-weight:bold">' + showText + "</c>"
            );
            var linkDiv = $('<div class="text-right pr-3 pb-1"></div>');
            linkDiv.append(link);
            $(this).after(linkDiv);
            link.click(function (event) {
            event.preventDefault();
            if (text.height() > maxheight) {
                $(this).html(showText);
                text.css("height", maxheight + "px");
            } else {
                $(this).html(hideText);
                text.css("height", "auto");
            }
            });
        }
        });
    }else if (max414.matches) {
        var maxheight = 71;
        var showText = "...See More";
        var hideText = "...See Less";
        $(".textContainer_Truncate").each(function () {
        var text = $(this);
        if (text.height() > maxheight) {
            text.css({ overflow: "hidden", height: maxheight + "px" });
            var link = $(
            '<c href="#" style="font-size:12px; font-weight:bold">' + showText + "</c>"
            );
            var linkDiv = $('<div class="text-right pr-4 pb-1"></div>');
            linkDiv.append(link);
            $(this).after(linkDiv);
            link.click(function (event) {
            event.preventDefault();
            if (text.height() > maxheight) {
                $(this).html(showText);
                text.css("height", maxheight + "px");
            } else {
                $(this).html(hideText);
                text.css("height", "auto");
            }
            });
        }
        });
    }else if(max768.matches){
        var maxheight = 120;
        var showText = "...See More";
        var hideText = "...See Less";
        $(".textContainer_Truncate").each(function () {
        var text = $(this);
        if (text.height() > maxheight) {
            text.css({ overflow: "hidden", height: maxheight + "px" });
            var link = $(
            '<c href="#" style="font-size:22px; font-weight:bold;">' + showText + "</c>"
            );
            var linkDiv = $('<div class="text-right" style="padding: 0 45px 10px 0;"></div>');
            linkDiv.append(link);
            $(this).after(linkDiv);
            link.click(function (event) {
            event.preventDefault();
            if (text.height() > maxheight) {
                $(this).html(showText);
                text.css("height", maxheight + "px");
            } else {
                $(this).html(hideText);
                text.css("height", "auto");
            }
            });
        }
        });
    }else if(max1024.matches){
        var maxheight = 160;
        var showText = "...See More";
        var hideText = "...See Less";
        $(".textContainer_Truncate").each(function () {
        var text = $(this);
        if (text.height() > maxheight) {
            text.css({ overflow: "hidden", height: maxheight + "px" });
            var link = $(
            '<c href="#" style="font-size:25px; font-weight:bold">' + showText + "</c>"
            );
            var linkDiv = $('<div class="text-right" style="padding: 10px 65px 10px 0;"></div>');
            linkDiv.append(link);
            $(this).after(linkDiv);
            link.click(function (event) {
            event.preventDefault();
            if (text.height() > maxheight) {
                $(this).html(showText);
                text.css("height", maxheight + "px");
            } else {
                $(this).html(hideText);
                text.css("height", "auto");
            }
            });
        }
        });
    }
});
