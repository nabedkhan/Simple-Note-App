import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      colors: ["#e2e8f0", "#f4f4f5", "#71717a", "#fef2f2", "#fffbeb"],
      selectedColor: "#e2e8f0",
    };
  },
  mutations: {
    selectColor(state, color) {
      state.selectedColor = color;
    },
  },
});

export default store;
