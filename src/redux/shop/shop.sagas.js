import { takeLatest, call, put, all } from "redux-saga/effects";
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
    console.log("snapShot", snapShot);
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapShot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_PROCESSING,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
