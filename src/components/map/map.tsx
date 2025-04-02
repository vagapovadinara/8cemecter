import { useRef, useEffect, useState } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/useMap';
import { OffersList } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

type MapProps = {
  city: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  offers: OffersList[];
  hoveredOfferId: string | null;
  lastHoveredOfferId: string | null;
  height: string;
  width: string;
};

function Map({ city, offers, hoveredOfferId, lastHoveredOfferId, height, width }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, { location: city });
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const [prevCity, setPrevCity] = useState(city);

  useEffect(() => {
    if (map) {
      if (city && city.latitude && city.longitude) {
        if (prevCity.latitude !== city.latitude || prevCity.longitude !== city.longitude) {
          map.setView([city.latitude, city.longitude], city.zoom); 
          setPrevCity(city); 
        }
      } else {
        console.error("Invalid city coordinates:", city);
      }

      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      offers.forEach((offer) => {
        if (offer.location && offer.location.latitude && offer.location.longitude) {
          const iconUrl =
            offer.id === hoveredOfferId || offer.id === lastHoveredOfferId
              ? URL_MARKER_CURRENT
              : URL_MARKER_DEFAULT;

          const icon = leaflet.icon({
            iconUrl: iconUrl,
            iconSize: [30, 40],
            iconAnchor: [15, 40],
          });

          leaflet
            .marker([offer.location.latitude, offer.location.longitude], { icon })
            .addTo(map);
        } else {
          console.error("Invalid offer coordinates for offer:", offer);
        }
      });

      if (isScrollEnabled) {
        map.scrollWheelZoom.enable();
      } else {
        map.scrollWheelZoom.disable();
      }
    }
  }, [map, offers, hoveredOfferId, lastHoveredOfferId, city, isScrollEnabled, prevCity]);

  return (
    <div
      className="cities__map map"
      ref={mapRef}
      style={{ height, width }}
      onMouseEnter={() => setIsScrollEnabled(false)} 
      onClick={() => setIsScrollEnabled(true)} 
    />
  );
}

export default Map;
