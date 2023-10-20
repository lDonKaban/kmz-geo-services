initMap();

async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;
    const schemaLayer = new YMapDefaultSchemeLayer({theme: 'dark'});
    const featureLayer = new YMapDefaultFeaturesLayer();
    const containerMarker = document.createElement('section');
    containerMarker.innerHTML = '<h1>Этот заголовок можно перетаскивать</h1>'
    const marker = new YMapMarker(
        {
            coordinates: [37.588144, 55.733842],
            draggable: true
        },
        containerMarker
    );

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [37.588144, 55.733842],
                zoom: 10
            }
        }
    );

    map.addChild(schemaLayer);
    map.addChild(featureLayer);
    map.addChild(marker);
}
