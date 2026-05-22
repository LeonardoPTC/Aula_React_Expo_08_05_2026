import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CepScreen from '../screens/CepScreen';
import HistoricoScreen from '../screens/HistoricoScreen';
import GeoScreen from '../screens/GeoScreen';

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Cep" component={CepScreen}/>
                <Stack.Screen name="Historico" component={HistoricoScreen}/>
                <Stack.Screen name="Geo" component={GeoScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}