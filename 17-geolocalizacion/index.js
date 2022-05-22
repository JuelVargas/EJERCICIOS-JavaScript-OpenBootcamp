let markers, map;

function iniciarMapa() {
    const coord = {
        lat: -25.363,
        lng: 131.044,
    }; 

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: coord,
    });
    markers = new google.maps.Marker({
        position: coord,
        map: map,
    })

    

    markers.push(
        new google.maps.Marker({
            position: { lat: 51.04591593753087, lng: -114.059455223656},
        })
    );
    markers.push(
        new google.maps.Marker({
            position: { lat: 21.182571024661584, lng: -86.80842804128577},
        })
    );
    markers.push(
        new google.maps.Marker({
            position: {lat: -36.90605020044498, lng:174.77697556824322
            },
        })
    );
}