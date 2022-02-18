import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      notes: JSON.parse(localStorage.getItem("notes")) || [],
      selectedColor: "",
      colors: ["#e2e8f0", "#f4f4f5", "#71717a", "#fef2f2", "#fffbeb"],
    };
  },
  mutations: {
    addNewNote(state, note) {
      state.notes.push(note);
    },
    deleteNote(state, noteId) {
      state.notes = state.notes.filter((note) => note.id !== noteId);
    },
    selectColor(state, color) {
      state.selectedColor = color;
    },
  },

  getters: {
    totalNotes(state) {
      return state.notes.length;
    },
    filteredNotes(state) {
      if (!state.selectedColor) {
        return state.notes;
      } else {
        return state.notes.filter((note) => note.color === state.selectedColor);
      }
    },
    getColorNotesLength(state) {
      return (color) => {
        return state.notes.filter((note) => note.color === color).length;
      };
    },
  },
});

export default store;
