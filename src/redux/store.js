import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

// ============
import newContactsReducer from "../redux/contacts/contactsReducer";
// ============

export const store = configureStore({
    reducer: {
        // contacts: contactsReducer,
        contacts: newContactsReducer,
        filter: filterReducer,
    },
});