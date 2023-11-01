import { YMaps, Map, Placemark, RouteButton, RouteEditor, RulerControl, TrafficControl, TypeSelector, ZoomControl  } from "@pbe/react-yandex-maps";
import {ReactElement} from "react";

// @ts-ignore
const MapContainer: () => ReactElement = () => (
    <YMaps
        query={{
            ns: "use-load-option",
            load: 'package.full',
        }}
    >
        <Map
            defaultState={{
                center: [55.75, 37.57],
                zoom: 9,
                controls: ["zoomControl", "fullscreenControl"],
            }}
        >
            <Placemark
                defaultGeometry={[55.75, 37.57]}
                properties={{
                    balloonContentBody:
                        "This is balloon loaded by the Yandex.Maps API module system",
                }}
            />
            <RouteButton options={{ float: "right" }} />
            <RouteEditor />
            <RulerControl />
            <TrafficControl />
            <TypeSelector />
            <ZoomControl />
        </Map>
    </YMaps>
)

export default MapContainer
