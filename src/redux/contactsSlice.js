import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsInitialState = {
    contactsGroup: [],
};

const contactsSlice = createSlice({
  // Ім'я слайсу
    name: "contacts",
  // Початковий стан редюсера слайсу
    initialState: contactsInitialState,
  // Об'єкт редюсерів
    reducers: {
        addContact(state, action) {
            state.contactsGroup.push(action.payload)
        },
        deleteContact(state, action) {
            state.contactsGroup = state.contactsGroup.filter(({ id }) => id !== action.payload)
        },
    },
});

const persistConfig = {
  key: 'contacts',
  storage,
}

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer,
)