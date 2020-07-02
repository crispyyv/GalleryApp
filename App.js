import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

import HomeScreen from "./app/screens/HomeScreen";
import ImageScreen from "./app/screens/ImageScreen";
import store from "./app/store";

const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Gallery" component={HomeScreen} />
                    <Stack.Screen name="Image" component={ImageScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
