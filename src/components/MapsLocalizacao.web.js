

import { View, StyleSheet } from "react-native";

export default function MapsLocalizacao({ region }){

    const src = 
    `https://www.openstreetmap.org/export/embed.html` + 
    `?bbox=${region.longitude - 0.01}%2C${region.latitude - 0.1}%2C${region.longitude + 0.01}%2C${region.latitude + 0.01}`+
    `&layer=mapnik`+
    `&marker=${region.latitude}%2C${region.longitude}`;

    console.log(src)

    return (
        <View style={styles.container}>
            <iframe 
                src={src} 
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: 12
                }}
                title='Maps de localização'
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 12,
        borderRadius: 12,
        overflow: 'hidden'
    }
})