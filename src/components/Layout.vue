<template>
  <Header />

  <div class="m-5 max-w-xl mx-auto">
    <slot name="form" />
    <slot name="list" />
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  components: { Header },
};
</script>
