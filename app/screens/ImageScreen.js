import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

import { globalStyles } from "../styles/global";

let ScreenHeight = Dimensions.get("window").height;
const ImageScreen = ({ route }) => {
    const { imageInfo } = route.params;
    console.log(imageInfo);
    if (!imageInfo) return <Text>loading...</Text>;
    return (
        <View style={{ flex: 1 }}>
            <Image
                style={globalStyles.fullimage}
                source={{ uri: imageInfo.urls.full }}
            />
        </View>
    );
};

export default ImageScreen;

const styles = StyleSheet.create({
    image: {
        height: ScreenHeight - 64,
    },
});
