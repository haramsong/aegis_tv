<template>
  <q-page-sticky position="bottom-right" :offset="[40, -80]">
    <q-btn
      fab
      icon="add"
      color="red-14"
      :to="{
        path: `/write/${props.type}`,
        query: { id: parseInt(props.idCnt) + 1 },
      }"
    >
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
  idCnt: {
    type: Number,
    required: true,
  },
});
</script>
