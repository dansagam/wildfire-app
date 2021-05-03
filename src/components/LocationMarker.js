import React from 'react'
import {Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({lat, lng, key, onClick}) => {
    // const iconMarker;
    // if (evt.categories[0].id===8)
    return (
        <div id={key} className="location-marker" onClick={onClick}>
            {/* {evt.categories[0].id === 8 ? <Icon icon={locationIcon} className="location-icon" /> 
            : evt.categories[0].id === 15 ? <Icon icon={locationIcon} className="location-icon" /> 
            : evt.categories[0].id === 12 ? <Icon icon={locationIcon} className="location-icon" /> : null 
            } */}
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker
