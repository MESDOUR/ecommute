'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MapPinIcon } from 'lucide-react';
import Image from 'next/image';

import { GOOGLE_MAPS_APIKEY } from '@/utils/constants';

import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
const containerStyle = {
	width: '100%',
	height: '100%',
};

const center = {
	lat: -3.745,
	lng: -38.523,
};
// Map styling for a cleaner, professional look
const mapOptions: google.maps.MapOptions = {
	disableDefaultUI: false,
	zoomControl: true,
	mapTypeControl: false,
	streetViewControl: true,
	fullscreenControl: true,
};
const MapView = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: GOOGLE_MAPS_APIKEY, // Provided placeholder key
	});

	const [map, setMap] = useState<google.maps.Map | null>(null);
	const [activeMarker, setActiveMarker] = useState<string | null>(null);
	const onLoad = useCallback((map: google.maps.Map) => {
		setMap(map);
	}, []);
	const onUnmount = useCallback(() => {
		setMap(null);
	}, []);
	// Effect to pan to new center when selected HQ changes
	if (!isLoaded) {
		return (
			<div className='w-full h-full flex items-center justify-center bg-slate-100'>
				<div className='animate-pulse flex flex-col items-center'>
					<div className='w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4'></div>
					<p className='text-slate-500 font-medium'>Loading Map...</p>
				</div>
			</div>
		);
	}
	return (
		<div className='w-full h-screen relative'>
			<GoogleMap
				mapContainerStyle={containerStyle}
				zoom={13}
				options={mapOptions}
				center={center}>
				{/* Old HQ Marker */}
			</GoogleMap>

			<div className='absolute bottom-6 left-6  bg-white/95 backdrop-blur p-4 rounded-xl border border-slate-200 z-10'>
				<h4 className='text-xs font-bold text-slate-800 uppercase tracking-wider mb-3'>
					Légende
				</h4>
				<div className='space-y-2'>
					<div className='flex items-center gap-2'>
						<MapPinIcon className='w-5 h-5 text-red-700' />
						<span className='text-sm text-slate-600 font-medium'>
							Siége actuel
						</span>
					</div>

					<div className='flex items-center gap-2'>
						<MapPinIcon className='w-5 h-5 text-green-700' />
						<span className='text-sm text-slate-600 font-medium'>
							Siége proposé
						</span>
					</div>

					<div className='flex items-center gap-2'>
						<MapPinIcon className='w-5 h-5 text-violet-700' />
						<span className='text-sm text-slate-600 font-medium'>
							Employés
						</span>
					</div>

					<div className='flex items-center gap-2'>
						<MapPinIcon className='w-5 h-5 text-orange-700' />
						<span className='text-sm text-slate-600 font-medium'>
							POIs
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MapView;
