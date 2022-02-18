<template>
  <form @submit.prevent="handleSubmit">
    <input
      required
      type="text"
      placeholder="Write title..."
      class="rounded w-full border-indigo-500 border-2 focus:border-2 focus:outline-none focus:ring-0 mb-2"
      v-model="title"
    />

    <textarea
      required
      rows="5"
      class="rounded w-full border-indigo-500 border-2 focus:border-2 focus:outline-none focus:ring-0 mb-2"
      placeholder="Write note description..."
      v-model="description"
    ></textarea>

    <div class="flex mb-6">
      <div
        v-for="color in colors"
        :key="color"
        class="w-6 h-6 mr-2 rounded cursor-pointer border-indigo-500"
        :style="{ backgroundColor: color }"
        :class="{ 'border-2': selectedColor === color }"
        @click="selectColor(color)"
      ></div>
    </div>

    <button class="bg-indigo-500 px-5 py-3 rounded text-white">
      Create New Note
    </button>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      title: "",
      description: "",
      selectedColor: "#e2e8f0",
    };
  },

  methods: {
    selectColor(color) {
      this.selectedColor = color;
    },

    handleSubmit() {
      const newNotes = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        color: this.selectedColor,
      };

      this.$store.commit("addNewNote", newNotes);
      this.title = "";
      this.description = "";
      this.selectedColor = "#e2e8f0";
    },
  },

  computed: {
    ...mapState(["colors"]),
  },
};
</script>
