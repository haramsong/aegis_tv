<template>
  <q-page-sticky position="bottom-right" :offset="[40, -80]">
    <q-btn fab icon="add" color="red-14" :to="`/write/${props.type}`">
      <q-tooltip>글쓰기</q-tooltip>
    </q-btn>
  </q-page-sticky>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});
</script>
