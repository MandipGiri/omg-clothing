import { ShopActionTypes } from "./shop.types";

export const UpdateCollection = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
