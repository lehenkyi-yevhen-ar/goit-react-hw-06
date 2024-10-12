import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
})
