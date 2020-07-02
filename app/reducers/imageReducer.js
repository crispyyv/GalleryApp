let initialState = {
    images: [],
    isLoading: false,
    error: null,
};

const imageList = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_IMAGES_START":
            return { ...state, ...{ isLoading: true } };

        case "LOAD_IMAGES_SUCCES":
            return {
                ...state,
                ...{ images: action.payload, isLoading: false },
            };

        case "LOAD_IMAGES_FAILURE":
            return {
                ...state,
                ...{ error: action.payload[0], isLoading: false },
            };
        default:
            return state;
    }
};
export default imageList;
