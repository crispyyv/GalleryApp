import React from "react";
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Image,
    TouchableHighlight,
} from "react-native";
import { globalStyles } from "../styles/global";

export const ImageGallery = ({ imagesList, navigation }) => {
    const imagesItems = imagesList.map((img) => {
        console.log(img);
        return (
            <View
                key={img.id}
                onPress={() => {
                    navigation.navigate("Image", { img });
                }}
                style={globalStyles.galeryCards}
            >
                <Text style={globalStyles.text}>
                    Author: {img.user.first_name}{" "}
                    {img.user.last_name ? img.user.last_name : ""}
                </Text>
                <TouchableHighlight
                    key={img.id}
                    onPress={() => {
                        navigation.navigate("Image", { imageInfo: img });
                    }}
                >
                    <Image
                        key={img.id}
                        source={{ uri: img.urls.regular }}
                        style={globalStyles.image}
                    />
                </TouchableHighlight>
            </View>
        );
    });
    return <ScrollView>{imagesItems}</ScrollView>;
};
