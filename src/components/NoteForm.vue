<template>
  <form>
    <input
      type="text"
      placeholder="Write title..."
      class="rounded w-full border-indigo-500 border-2 focus:border-2 focus:outline-none focus:ring-0 mb-2"
    />

    <textarea
      rows="5"
      class="rounded w-full border-indigo-500 border-2 focus:border-2 focus:outline-none focus:ring-0 mb-2"
      placeholder="Write note description..."
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
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },

  methods: {
    ...mapMutations(["selectColor"]),
  },

  computed: {
    ...mapState(["colors", "selectedColor"]),
  },
};
</script>
