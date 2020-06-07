import { ShopActionTypes } from "./shop.types";

const initialState = {
  processing: true,
  collections: null,
  errorMessage: "",
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_PROCESSING:
      return {
        ...state,
        processing: true,
        collections: null,
        errorMessage: "",
      };

    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        processing: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        processing: false,
        collections: null,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
