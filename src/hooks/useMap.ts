import { useEffect, useState, useRef } from 'react';
import leaflet from 'leaflet';

export function useMap(mapRef: React.RefObject<HTMLDivElement | null>, city: { location: { latitude: number; longitude: number; zoom: number } }) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: [city.location.latitude, city.location.longitude],
        zoom: city.location.zoom,
        layers: [
          leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
          }),
        ],
      });

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}
