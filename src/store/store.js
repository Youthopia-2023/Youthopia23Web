import { configureStore, createSlice } from "@reduxjs/toolkit";

const userData = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    participant_identity: "",
    token: "",
    phonenumber: "",
    registered_events: "",
    year: "",
    college: "",
    _id: "",
  },
  reducers: {
    setToken(state, action) {
      window.localStorage.setItem("token", JSON.stringify(action.payload));
      state.token = action.payload;
    },
    setFirstName(state, action) {
      window.localStorage.setItem("firstName", JSON.stringify(action.payload));
      state.firstName = action.payload;
    },
    setLastName(state, action) {
      window.localStorage.setItem("lastName", JSON.stringify(action.payload));
      state.lastName = action.payload;
    },
    setPhonenumber(state, action) {
      window.localStorage.setItem(
        "phonenumber",
        JSON.stringify(action.payload)
      );
      state.phonenumber = action.payload;
    },
    setCollege(state, action) {
      window.localStorage.setItem("college", JSON.stringify(action.payload));
      state.college = action.payload;
    },
    setEmail(state, action) {
      window.localStorage.setItem("email", JSON.stringify(action.payload));
      state.email = action.payload;
    },
    setYear(state, action) {
      window.localStorage.setItem("year", JSON.stringify(action.payload));
      state.year = action.payload;
    },
    clear(state, payload) {
      state.token = "";
    },
  },
});

export const user = userData.actions;
const store = configureStore({
  reducer: userData.reducer,
});
export default store;
