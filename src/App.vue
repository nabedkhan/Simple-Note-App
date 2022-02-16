<template>
  <Layout>
    <template #form>
      <NoteForm />
    </template>

    <template #list> <NoteList /></template>
  </Layout>
</template>

<script>
import Header from "./components/Header.vue";
import NoteForm from "./components/NoteForm.vue";
import Layout from "./components/Layout.vue";
import NoteList from "./components/NoteList.vue";

export default {
  components: { Header, NoteForm, Layout, NoteList },
};
</script>
