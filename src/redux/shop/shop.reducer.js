import { Collections } from "../../utilites/constants/CollectionItemsConstant";

const initialState = {
  collections: Collections,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
