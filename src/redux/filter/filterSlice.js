import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

const filterSlice = createSlice({
  // Ім'я слайсу
    name: "filter",
  // Початковий стан редюсера слайсу
    initialState: filterInitialState,
  // Об'єкт редюсерів
    reducers: {
        filterList(state, action) {
          return state = action.payload.toLowerCase()
        },
    },
});

// Генератори екшенів
export const { filterList } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;