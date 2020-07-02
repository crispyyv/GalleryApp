import React, { useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    ActivityIndicator,
} from "react-native";
import * as imageActions from "../actions/imageActions";
import { connect } from "react-redux";

import { ImageGallery } from "../components/ImageGallery";

const HomeScreen = ({ isLoading, images, loadImages, navigation }) => {
    useEffect(() => {
        loadImages();
    }, []);
    return (
        <View>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <ImageGallery imagesList={images} navigation={navigation} />
            )}
        </View>
    );
};

function mapStateToProps(state) {
    return {
        images: state.images,
        isLoading: state.isLoading,
        error: state.error,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadImages: () => dispatch(imageActions.loadImages()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
