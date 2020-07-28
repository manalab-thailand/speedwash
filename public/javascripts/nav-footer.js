$(document).ready(function() {
    var arrlang = {
        'en': {
            'home': 'Home',
            'about': 'About',
            'blog': 'Blog',
            'branches': 'Branches',
            'contact': 'Contact'
        },
        'th': {
            'home': 'หน้าแรก',
            'about': 'เกี่ยวกับเรา',
            'blog': 'บล็อก',
            'branches': 'สาขา',
            'contact': 'ติดต่อเรา'
        }
    };

    $(function() {
        $('.translate').click(function() {
            var lang = $(this).attr('id');


            $('.lang').each(function(index, element) {
                sessionStorage.setItem("lang", lang);
                $(this).text(arrlang[lang][$(this).attr('key')]);
            });

            if (sessionStorage.lang) {
                lang = sessionStorage.lang;
            } else {
                lang = 'en';
            }
            console.log(sessionStorage.lang);

        });
    });
    $("#TH-M").click(function() {
        $("#EN-M").addClass("btn-language")
        $("#TH-M").addClass("font-bold")
        $("#TH-M").removeClass("btn-language")
    });

    $("#EN-M").click(function() {
        $("#TH-M").addClass("btn-language")
        $("#EN-M").removeClass("btn-language")
        $("#EN-M").addClass("font-bold")
    })

    $("#TH-D").click(function() {
        $("#EN-D").addClass("btn-language")
        $("#TH-D").addClass("font-bold")
        $("#TH-D").removeClass("btn-language")
    });

    $("#EN-D").click(function() {
        $("#TH-D").addClass("btn-language")
        $("#EN-D").removeClass("btn-language")
        $("#EN-D").addClass("font-bold")
    })
})