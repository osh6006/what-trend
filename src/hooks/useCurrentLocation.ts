// src/hooks/useCurrentPosition.js

import { useState, useEffect } from "react";

interface GeolocationOpts {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}
interface Location {
  latitude: number;
  longitude: number;
}
interface PositionError {
  PERMISSION_DENIED: number;
  POSITION_UNAVAILABLE: number;
  TIMEOUT: number;
  code: number;
  message: string;
}
interface Coords {
  accuracy: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number;
  longitude: number;
  speed: number | null;
}
interface Position {
  coords: Coords;
  timestamp: number;
}

const useCurrentLocation = (options: GeolocationOpts = {}) => {
  // location 정보 저장
  const [location, setLocation] = useState<Location>();
  // 에러 메세지 저장
  const [error, setError] = useState<string>();

  // Geolocation의 `getCurrentPosition` 메소드에 대한 성공 callback 핸들러
  const handleSuccess = (pos: Position) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  // Geolocation의 `getCurrentPosition` 메소드에 대한 실패 callback 핸들러
  const handleError = (error: PositionError) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    // 사용된 브라우저에서 지리적 위치(Geolocation)가 정의되지 않은 경우 오류로 처리합니다.
    if (!geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    // Geolocation API 호출
    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return { location, error };
};

export default useCurrentLocation;
