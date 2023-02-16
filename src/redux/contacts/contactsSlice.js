import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOperations";

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: contactsInitialState,
  // Об'єкт редюсерів
  extraReducers: {
    // builder
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }

    // reducers: {
    //     addContact(state, action) {
    //       state.items.push(action.payload)
    //     },
    //     deleteContact(state, action) {
    //       state.items = state.items.filter(({ id }) => id !== action.payload)
    //     },
    // },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;