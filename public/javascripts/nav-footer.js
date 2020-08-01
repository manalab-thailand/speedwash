$(document).ready(function() {

    let loc = window.location.href;
    $('.navbar ul li a').each(function () {
        let status = loc.indexOf($(this).attr('href'));
        $(this).closest('li').removeClass('active font-bold');
        console.log(status);

        if ( -1 != status ) {
            console.log(status);
            $(this).closest('li').addClass('active font-bold');
        }
    });

    let arrlang = {
        en: {
            'home': 'Home',
            'about': 'About',
            'blog': 'Blog',
            'branches': 'Branches',
            'contact': 'Contact'
        },
        th: {
            'home': 'หน้าแรก',
            'about': 'เกี่ยวกับเรา',
            'blog': 'บล็อก',
            'branches': 'สาขา',
            'contact': 'ติดต่อเรา'
        }
    };


    $(`.translate`).click(function() {
        let lang = $(this).attr(`id`);
        $(`.lang`).each(function(index, element) {
            sessionStorage.setItem(`lang`, lang);
            $(this).text(arrlang[lang][$(this).attr(`key`)]);
        });
    });

    if (sessionStorage.lang) {
        langsession = sessionStorage.lang;
    } else {
        langsession = `en`;
    }
    $(`.lang`).each(function(index, element) {
        $(this).text(arrlang[langsession][$(this).attr(`key`)]);

        if (langsession == `en`) {
            $(`#TH-D`).addClass(`btn-language`)
            $(`#EN-D`).removeClass(`btn-language`)
            $(`#EN-D`).addClass(`font-bold`)

            $(`#TH-M`).addClass(`btn-language`)
            $(`#EN-M`).removeClass(`btn-language`)
            $(`#EN-M`).addClass(`font-bold`)

        } else {
            $(`#EN-M`).addClass(`btn-language`)
            $(`#TH-M`).addClass(`font-bold`)
            $(`#TH-M`).removeClass(`btn-language`)

            $(`#EN-D`).addClass(`btn-language`)
            $(`#TH-D`).addClass(`font-bold`)
            $(`#TH-D`).removeClass(`btn-language`)

        }
    });


    $(`#TH-M`).click(function() {
        $(`#EN-M`).addClass(`btn-language`)
        $(`#TH-M`).addClass(`font-bold`)
        $(`#TH-M`).removeClass(`btn-language`)
    });

    $(`#EN-M`).click(function() {
        $(`#TH-M`).addClass(`btn-language`)
        $(`#EN-M`).removeClass(`btn-language`)
        $(`#EN-M`).addClass(`font-bold`)
    })

    $(`#TH-D`).click(function() {
        $(`#EN-D`).addClass(`btn-language`)
        $(`#TH-D`).addClass(`font-bold`)
        $(`#TH-D`).removeClass(`btn-language`)
    });

    $(`#EN-D`).click(function() {
        $(`#TH-D`).addClass(`btn-language`)
        $(`#EN-D`).removeClass(`btn-language`)
        $(`#EN-D`).addClass(`font-bold`)
    })
})