import React, {useEffect} from 'react';

const { kakao } = window;

const MapScreen = ({searchAddress}) => {

    useEffect(() => {

        const container = document.getElementById('kkmap');

        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };

        const map = new kakao.maps.Map(container, options);

        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(searchAddress, placesSearchCB);

        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {

                let bounds = new kakao.maps.LatLngBounds();

                for (let i=0; i<data.length; i++) {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }

                map.setBounds(bounds);
            }
        }

        function displayMarker(place) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x)
            });
        }

    }, [searchAddress]);

    return (
        <>
            <div id='kkmap' style={{width: '600px', height: '600px', border: 'solid 1px #ddd'}}></div>
        </>
    );
};

export default MapScreen;
