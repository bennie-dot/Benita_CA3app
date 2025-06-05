import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 6.5244,
        longitude: 3.3792,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker coordinate={{ latitude: 6.5244, longitude: 3.3792 }} title="Lagos" />
    </MapView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: { flex: 1 },
});
