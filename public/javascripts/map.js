map = {
    
    initMap: function(){

    const constant = constantKey();

    const googlesheetData = `https://sheets.googleapis.com/v4/spreadsheets/15qVChEyQ7Gu4rNgZK39gZ_RX4grMWM2EW3F-yk83C_M/values/Outlets!A2:S20?key=${constant.GOOGLEKEY}`;
    
    $.getJSON(googlesheetData, function (googleMap) {

        const markers = new Array();
        let scalezoom = 12;
        if (window.matchMedia("(max-width: 768px)").matches) {
            scalezoom = 10;
        }
        let mapOptions = {
            center: {
                lat: 13.645418,
                lng: 100.679751,
            },
            zoom: scalezoom,
        };
        let maps = new google.maps.Map(document.getElementById("map"), mapOptions);
        let marker, info;
        let i = 0;

        googleMap.values.forEach(function (post , i){
            if(post[6]){
                $('#markers').append(
                    `<tr class="marker-link" data-markerid="${i++}">
                        <td scope="row" class="font-table">${post[0]}</td>
                        <td>
                        ${post[1]}
                        </td>
                        <td>
                        ${post[2]}
                        </td>
                    </tr>`
                );
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(post[6], post[7]),
                    map: maps,
                    title: `${post[0]}`
                });
                info = new google.maps.InfoWindow();
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        info.setContent(`<div class="h5"><b>${post[0]}<b></div>
                                                <div class="h6">${post[4]}</div>
                                                <div class="h6"><a class="link" href="${post[5]}" target="_blank" rel="noopener noreferrer">view on Google Maps</a></div>
                                                <div class="h6"><b>ติดต่อ <a class="link" href="tel:${post[2]}" target="_blank" rel="noopener noreferrer">${post[2]}</a></b></div>`);
                        info.open(maps, marker);
                    }
                })(marker, i));
            }
            markers.push(marker);
        })
        $('.marker-link').on('click', function(e) {
            google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
        });
    });

    $.getJSON(googlesheetData, function(googleMap) {

        const markers = new Array();
        let scalezoom = 10.5;
        
        let mapOptions = {
            center: {
                lat: 13.645418,
                lng: 100.679751,
            },
            zoom: scalezoom,
        };
        let maps = new google.maps.Map(document.getElementById("map-contact"), mapOptions);
        let marker, info;
        let i = 0;

        googleMap.values.forEach(function(post, i) {
            if (post[6]) {
                
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(post[6], post[7]),
                    map: maps,
                    title: `${post[0]}`
                });

                info = new google.maps.InfoWindow();
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        info.setContent(`<div class="h5"><b>${post[0]}<b></div>
                                                <div class="h6">${post[4]}</div>
                                                <div class="h6"><a class="link" href="${post[5]}" target="_blank" rel="noopener noreferrer">view on Google Maps</a></div>
                                                <div class="h6"><b>ติดต่อ <a class="link" href="tel:${post[2]}" target="_blank" rel="noopener noreferrer">${post[2]}</a></b></div>`);
                        info.open(maps, marker);
                    }
                })(marker, i));
            }
            markers.push(marker);
        })
        $('.marker-link').on('click', function(e) {
            google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
        });
    });

    }
}