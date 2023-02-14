import { configureStore } from "@reduxjs/toolkit";
// import {
//     persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from "redux-persist";
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
    // middleware(getDefaultMiddleware) {
    //     return getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     });
    // },
});

// export const persistor = persistStore(store);