import { takeEvery, call, put } from "redux-saga/effects";
import { ShopActionTypes } from "./shop.types";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.action";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.util";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapShot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_PROCESSING,
    fetchCollectionsAsync
  );
}
