import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted) return;

      const { coords } = await Location.getLastKnownPositionAsync();

      if (coords) {
        setLocation(coords);
      }
    } catch (error) {
      console.log("useLocation Exception", JSON.stringify(error));
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
