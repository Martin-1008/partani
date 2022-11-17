import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeId: "testing",
  typeValue: "value",
  typeSource: "heheu",
};

export const typeReducer = createSlice({
  name: "type",
  initialState,
  reducers: {
    setUserType: (state, action) => {
      state.typeId = action.payload.id;
      state.typeValue = action.payload.value;
      state.typeSource = action.payload.source;
    },
    // resetSeenNotificationData: (state) => {
    //   state.totalNotification = 0;
    //   state.notifications = initialState.notifications;
    // },
  },
});

export const { setUserType } = typeReducer.actions;

export default typeReducer.reducer;
