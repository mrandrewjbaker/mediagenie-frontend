import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tAppStore } from "../../../App/AppStore/AppStore";
import { tiMediaBoxModalState } from "./MediaBoxModal.types";


const initialMediaBoxModalState: tiMediaBoxModalState = {
	data: {
		title: '',
		poster_path: '',
	},
	opened: false,
}

export const MediaBoxModalSlice = createSlice({
  name: "mediaBoxModal",
  initialState: initialMediaBoxModalState,
  reducers: {
		toggleMediaBoxModal: (state, action) => {
			state.opened = !state.opened;
		},
		setMediaBoxModalData: (state, action) => {
			state.data = action.payload;
		},
		
  },
});

export const {
	toggleMediaBoxModal,
} = MediaBoxModalSlice.actions;
export const selectMediaBoxModalState = (state: tAppStore) => state.mediaBoxModal;
export default MediaBoxModalSlice.reducer;
