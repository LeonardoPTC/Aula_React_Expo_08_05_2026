import { StyleSheet } from "react-native"
import MapView, { Marker } from "react-native-maps";

export default function MapsLocation({region}){ 
    return (
        <MapView style={styles.mapa} region={region}>
            <Marker coordinate={{
                latitude: region.latitude,
                longitude: region.longitude
                }} 
                title="Você está aqui"
                description={`Lat: ${region.latitude} - Log: ${region.longitude}`}
                />
        </MapView>
    )
}

const styles = StyleSheet.create({
    mapa: {
        flex: 1,
        marginTop: 12,
        borderRadius: 12,
    }
})