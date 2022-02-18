<template>
  <div class="p-7 rounded-lg relative" :style="{ backgroundColor: note.color }">
    <h3 class="text-xl font-medium">{{ note.title }}</h3>
    <p class="text-sm leading-6">
      {{ note.description }}
    </p>

    <span
      class="absolute top-2 right-4 text-red-500 text-xl cursor-pointer"
      @click="$store.commit('deleteNote', note.id)"
    >
      &times;</span
    >
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
};
</script>
