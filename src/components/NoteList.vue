<template>
  <div class="flex gap-1 justify-center mt-6">
    <div class="h-6 text-center bg-indigo-500 px-2 text-white">All</div>

    <div
      v-for="color in colors"
      :key="color"
      class="w-6 h-6 text-center"
      :style="{ backgroundColor: color }"
    >
      0
    </div>
  </div>

  <div class="flex gap-4 mt-5">
    <div class="bg-slate-500 p-7 rounded-lg w-1/2 relative">
      <h3 class="text-xl font-medium">Hello world</h3>
      <p class="text-sm leading-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi
        culpa dolorem tempora.
      </p>

      <span
        class="absolute top-2 right-4 text-red-500 text-xl cursor-pointer hidden cross"
        >&times;</span
      >
    </div>

    <div class="bg-slate-500 p-7 rounded-lg w-1/2">
      <h3 class="text-xl font-medium">Hello world</h3>
      <p class="text-sm leading-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi commodi
        culpa dolorem tempora. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Nisi commodi culpa dolorem tempora.
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["colors", "selectedColor"]),
  },
};
</script>
