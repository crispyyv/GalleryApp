export const loadImages = () => {
    return (dispatch, getState) => {
        dispatch({ type: "LOAD_IMAGES_START" });
        fetch(
            "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0"
        )
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                dispatch({ type: "LOAD_IMAGES_SUCCES", payload: result });
            })
            .catch((err) => {
                dispatch({ type: "LOAD_IMAGES_FAILURE", payload: err });
            });
    };
};
