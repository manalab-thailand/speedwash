$(document).ready(function() {


    let arrlang = {
        en: {
            'home': 'Home',
            'about': 'About',
            'blog': 'Blog',
            'branches': 'Branches',
            'contact': 'Contact',
            'speedwash': 'SPEEDWASH',
            'subtitlespeedwash': 'First Self-service Coin Laundromat with Free laundry detergent and softener',
            'details-speedwash': 'At	Speed	Wash,	we are	confident	in	keeping	your	clothes	clean	by	best commercial	laundry	machines	from	USA	and	ITALY.	Do	your	laundry	at	your	convenience	24	hours	a	day.	Easy	to	use,	fast	and	affordable	with	Free	laundry	detergent	and fabric	softener	are	what	we	provide	to	make	your	laundryroutine	easier!	Just	bring	your	clothes,	it will	be	ready	to	use	in	just	1	hour.',
            'title-icon-time': 'Wash at any time',
            'title-icon-detergent': 'No need to detergent',
            'title-icon-30-minutes': 'Finish your wash way faster',
            'title-icon-study': 'Relex while washing',
            'icon-time': `Need to wash your laundry at odd hours? We've got your covered.`,
            'icon-detergent': 'Just bring your clothes and let us handle the rest.',
            'icon-30-minutes': '30 minutes is all you need for a full load of laundry with Speedwash.',
            'icon-study': 'Wait for your laundry in comfort in our waiting areas.',
            'address': `35/35 Mu 13 Bang Phli Yai Sub-district Bang Phli District Samut Prakan 10540 ` ,
            'viewAll': 'View all >',
            'viewMap': 'View map >',
            'learnMore': 'Learn more...',
            'seeMore': '...See More',
            'we-Here': `We're Here`,
            'reachUs': 'Reach Us.',
            'ourOffice': 'Our Office',
            'ask': 'Share your experience or ask us questions',
            'submit': 'Submit',
            'provice': 'Provice',
            'viewPost': 'View Post',
            'textMap':`Our Branches`,
            'sukhumvit':'Sukhumvit 50',
            'lasalle':'Lasalle',
            'suvarnabhumi':'Suvarnabhumi 2',
            'bangchalong':'Bang Chalong'
        },
        th: {
            'home': 'หน้าแรก',
            'about': 'เกี่ยวกับเรา',
            'blog': 'บทความ',
            'branches': 'สาขา',
            'contact': 'ติดต่อเรา',
            'speedwash': 'Speed Wash สปีดวอช',
            'details-speedwash': 'ที่สปีดวอช เรามั่นใจในความสะอาดด้วยเครื่องซักผ้าและเครื่องอบผ้าอุตสาหกรรมชั้นนำจากอเมริกาและอิตาลี ใช้งานง่าย ไม่ยุ่งยาก สะอาด สะดวกและรวดเร็ว แถมฟรี! น้ำยาซักผ้าและน้ำยาปรับผ้านุ่ม ฟีดอัตโนมัติในตัวเครื่อง ไปแต่ตัวกับผ้า สะอาดพร้อมใส่ใน 1 ชั่วโมง',
            'title-icon-time': 'เปิดบริการตลอด 24 ชั่วโมง',
            'title-icon-detergent': 'ฟรีน้ำยาซักผ้าและน้ำยาปรับผ้านุ่ม',
            'title-icon-30-minutes': 'ประหยัดเวลามากกว่า',
            'title-icon-study': 'รอรับได้เลย',
            'icon-time': `จะซักจะอบเวลาไหนได้ตามสะดวก ไร้ข้อจำกัดเรื่องเวลา`,
            'icon-detergent': 'มาแค่ตัวกับผ้า สะอาดพร้อมใส่ไม่ต้องเติมน้ำยาเอง',
            'icon-30-minutes': 'ด้วยระยะเวลา 30 นาทีต่อรอบการซักผ้าและการอบผ้า',
            'icon-study': 'เราจัดพื้นที่ให้ผู้ใช้บริการได้นั่งรอรับผ้าอย่างสะดวกสบาย',
            'address': '35/35 หมู่ที่ 13 ตำบลบางพลีใหญ่ อำเภอบางพลี จังหวัดสมุทรปราการ 10540 ',
            'viewAll': 'ดูทั้งหมด >',
            'viewMap': 'ดูแผนที่ >',
            'learnMore': 'เรียนรู้เพิ่มเติม...',
            'seeMore': '...อ่านเพิ่มเติม',
            'we-Here': 'เราอยู่ตรงนี้',
            'reachUs': 'ติดต่อเรา',
            'ourOffice': 'สำนักงานใหญ่',
            'ask': 'แลกเปลี่ยนประสบการณ์หรือสอบถามปัญหา',
            'submit': 'ยืนยัน',
            'provice': 'จังหวัด',
            'viewPost': 'อ่านเพิ่มเติม',
            'textMap':'ที่ตั้งร้านซักผ้าของเราอยู่ที่นี่และเราจะมาเปิดใกล้ ๆ บ้านคุณในอีกไม่ช้า'
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