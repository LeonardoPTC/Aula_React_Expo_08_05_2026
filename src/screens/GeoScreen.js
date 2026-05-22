import { useState } from "react";

import * as Location from 'expo-location';
import { Text, Button, View, StyleSheet } from "react-native";
import MapsLocalizacao from "../components/MapsLocalizacao.web";

//npx expo install expo-location

export default function GeoScreen() {

    const [location, setLocation] = useState(null);

    async function obterLocalizacao() {

        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            alert('Permissao negada');
            return;
        }

        const response = await Location.getCurrentPositionAsync({});
        setLocation(response);
        console.log(response);

    }

    const region = location ? {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    } : null;

    return (
        <View>
            <Text>Geolocalização</Text>
            <Button
                title="Obter Localização"
                onPress={obterLocalizacao}
            />

            {location && (
                <Text style={style.coordenadas}>
                    lat: {location.coords.latitude.toFixed(6)}
                    {"\n"}
                    lon: {location.coords.longitude.toFixed(6)}
                </Text>
            )}

            {region && (
                <MapsLocalizacao region={region}/>
            )}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    coordenadas: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 10,
        color: '#333'
    }
})