$(document).ready(function () {
    var x = window.matchMedia("(max-width: 414px)");
    var y = window.matchMedia("(max-width: 768px)");
    var z = window.matchMedia("(max-width: 1024px)");

    if (x.matches) {
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
    }else if(y.matches){
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
    }else if(z.matches){
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
