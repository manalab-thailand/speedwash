$(document).ready(function() {

    let sChar;
    let sCharBlog;

    const constant = constantKey();
    $.getJSON(constant.FACEBOOKAPI, function (facebookAPI) {

    if (window.matchMedia(`(max-width: 375px)`).matches) {
        sChar = 130;
        sCharBlog = 150;
    } else if (window.matchMedia(`(max-width: 414px)`).matches) {
        sChar = 165;
        sCharBlog = 180;
    } else if (window.matchMedia(`(max-width: 768px)`).matches) {
        sChar = 195;
        sCharBlog = 200;
    } else if (window.matchMedia(`(max-width: 1024px)`).matches) {
        sChar = 250;
        sCharBlog = 250;
    } else if (window.matchMedia(`(max-width: 1366px)`).matches) {
        sChar = 260;
        sCharBlog = 280;
    } else if (window.matchMedia(`(max-width: 1440px)`).matches) {
        sChar = 260;
        sCharBlog = 300;
    } else if (window.matchMedia(`(max-width: 1920px)`).matches) {
        sChar = 420;
        sCharBlog = 390;
    }

        let moretext = `...See More`;
        let lesstext = `...See Less`;

        $(".Post1-seemore").each(function() {
            let content = $(this).html();

            if (content.length > sChar) {
                let c = content.substr(0, sChar);
                let h = content.substr(sChar + 1, content.length - sChar);

                let html =
                    c +
                    `<span class="moreellipses">` +
                    `&nbsp;</span><span class="morecontent"><span>` +
                    h +
                    `</span>&nbsp;&nbsp;<a href="" class="Seemore facebookmorelink">` +
                    `<a href="https://www.facebook.com/${facebookAPI.data[0].id}" class="Seemore" target="_blank">` +
                    moretext +
                    `</a></a></span>`;

                $(this).html(html);
            }
        });

        $(".Post2-seemore").each(function() {
            let content = $(this).html();

            if (content.length > sChar) {
                let c = content.substr(0, sChar);
                let h = content.substr(sChar + 1, content.length - sChar);

                let html =
                    c +
                    `<span class="moreellipses">` +
                    `&nbsp;</span><span class="morecontent"><span>` +
                    h +
                    `</span>&nbsp;&nbsp;<a href="" class="Seemore facebookmorelink">` +
                    `<a href="https://www.facebook.com/${facebookAPI.data[1].id}" class="Seemore" target="_blank">` +
                    moretext +
                    `</a></a></span>`;

                $(this).html(html);
            }
        });

        $(".blog-seemore").each(function() {
            let content = $(this).html();

            if (content.length > sCharBlog) {
                let c = content.substr(0, sCharBlog);
                let h = content.substr(sCharBlog + 1, content.length - sCharBlog);

                let html =
                    c +
                    `<span class="moreellipses">` +
                    `&nbsp;</span><span class="morecontent"><span>` +
                    h +
                    `</span>&nbsp;&nbsp;<a href="" class="Seemore facebookmorelink">` +
                    moretext +
                    `</a></span>`;

                $(this).html(html);
            }
        });

        $(`.facebookmorelink`).click(function() {
            if ($(this).hasClass(`less`)) {
                $(this).removeClass(`less`);
                $(this).html(moretext);
            } else {
                $(this).addClass(`less`);
                $(this).html(lesstext);
            }

            $(this).prev().toggle();

            return false;
        });
    });
});