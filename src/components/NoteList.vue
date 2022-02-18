<template>
  <div class="flex gap-1 justify-center mt-6">
    <div
      class="h-6 text-center bg-indigo-500 px-2 text-white cursor-pointer"
      @click="selectColor('')"
    >
      All ({{ totalNotes }})
    </div>

    <div
      v-for="color in colors"
      :key="color"
      class="w-6 h-6 text-center cursor-pointer"
      :style="{ backgroundColor: color }"
      @click="selectColor(color)"
    >
      {{ getColorNotesLength(color) }}
    </div>
  </div>

  <div class="mt-5 grid grid-cols-2 gap-2">
    <Note v-for="note in filteredNotes" :key="note.id" :note="note" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import Note from "./Note.vue";

export default {
  components: { Note },
  methods: {
    ...mapMutations(["selectColor"]),
  },

  computed: {
    ...mapState(["colors"]),
    ...mapGetters(["totalNotes", "filteredNotes", "getColorNotesLength"]),
  },

  created() {
    this.$store.watch(
      (state) => state.notes,
      (notes) => localStorage.setItem("notes", JSON.stringify(notes)),
      { deep: true }
    );
  },
};
</script>
