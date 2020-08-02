$(document).ready(function() {
    let arrlang = {
        en: {
            'home': 'Home',
            'about': 'About',
            'blog': 'Blog',
            'branches': 'Branches',
            'contact': 'Contact',
            'speedwash': 'SPEEDWASH',
            'details-speedwash': 'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
            'title-icon-time': 'Wash at any time',
            'title-icon-detergent': 'No need to detergent',
            'title-icon-30-minutes': 'Finish your wash way faster',
            'title-icon-study': 'relex while washing',
            'icon-time': `Need to wash your laundry at odd hours? We've got your covered.`,
            'icon-detergent': 'Just bring your clothes and let us handle the rest.',
            'icon-30-minutes': '30 minutes is all you need for a full load of laundry with Speedwash.',
            'icon-study': 'Wait for your laundry in comfort in our waiting areas.'
        },
        th: {
            'home': 'หน้าแรก',
            'about': 'เกี่ยวกับเรา',
            'blog': 'บล็อก',
            'branches': 'สาขา',
            'contact': 'ติดต่อเรา',
            'speedwash': 'สปีดวอช',
            'details-speedwash': 'ที่สปีดวอช เรามั่นใจในความสะอาดด้วยเครื่องซักผ้าและเครื่องอบผ้าอุตสาหกรรมชั้นนำจากอเมริกาและอิตาลี ใช้งานง่าย ไม่ยุ่งยาก สะอาด สะดวกและรวดเร็ว แถมฟรี! น้ำยาซักผ้าและน้ำยาปรับผ้านุ่ม ฟีดอัตโนมัติในตัวเครื่อง ไปแต่ตัวกับผ้า สะอาดพร้อมใส่ใน 1 ชั่วโมง',
            'title-icon-time': 'เปิดบริการตลอด 24 ชั่วโมง',
            'title-icon-detergent': 'ฟรีน้ำยาซักผ้าและน้ำยาปรับผ้านุ่ม',
            'title-icon-30-minutes': 'ประหยัดเวลามากกว่า',
            'title-icon-study': 'รอรับได้เลย',
            'icon-time': `จะซักจะอบเวลาไหนได้ตามสะดวก ไร้ข้อจำกัดเรื่องเวลา`,
            'icon-detergent': 'มาแค่ตัวกับผ้า สะอาดพร้อมใส่ไม่ต้องเติมน้ำยาเอง',
            'icon-30-minutes': 'ด้วยระยะเวลา 30 นาทีต่อรอบการซักผ้า/การอบผ้า',
            'icon-study': 'เราจัดพื้นที่ให้ผู้ใช้บริการได้นั่งรอรับผ้าอย่างสะดวกสบาย'
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