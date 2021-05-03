import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationInfoBox from './LocationInfoBox'
import LocationMarker from './LocationMarker'
//'AIzaSyBZHsNCO8fcTt_uJQ-_TFo1_DQ8iAhWC3E'


const Map = ({ eventData, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)

    // console.log(`${process.env.REACT_APP_SECURE_KEY}`)
    // console.log(`${process.env.NODE_ENV}`)
    const markers = eventData.map(ev =>{
        if(ev.categories[0].id ===8) {
            return <LocationMarker 
                lat={ev.geometries[0].coordinates[1]} 
                lng={ev.geometries[0].coordinates[0]} 
                onClick= {() => setLocationInfo({id: ev.id, title: ev.title})} 
            />
        }
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact 
                // bootstrapURLKeys={{ key: process.env.REACT_APP_SECURE_KEY}}
                bootstrapURLKeys={{ key: 'AIzaSyBZHsNCO8fcTt_uJQ-_TFo1_DQ8iAhWC3E'}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
            
        </div>
    )
}
Map.defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 6
  };

export default Map
