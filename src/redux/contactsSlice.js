import { createSlice } from "@reduxjs/toolkit";

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
    reducers: {
        addContact(state, action) {
          state.items.push(action.payload)
        },
        deleteContact(state, action) {
          state.items = state.items.filter(({ id }) => id !== action.payload)
        },
    },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;