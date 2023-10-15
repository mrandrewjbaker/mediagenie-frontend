import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import appReducer from '../App.slice';
import searchReducer from '../../Views/Search/Search.slice';
import mediaBoxModalReducer from '../../Components/Reusable/MediaBoxModal/MediaBoxModal.slice';


export const AppStore = configureStore({
  reducer: {
    app: appReducer,
		search: searchReducer,
    mediaBoxModal: mediaBoxModalReducer
  }
});

export type tAppStoreDispatch = typeof AppStore.dispatch;
export type tAppStore = ReturnType<typeof AppStore.getState>;
export type tReducerAction<P> = {
  payload: P;
};

export const useAppStoreDispatch = () => useDispatch<tAppStoreDispatch>();
export const useAppStoreSelector = useSelector;