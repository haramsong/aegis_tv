<!-- 하단 글쓰기(+) 버튼 -->
<template>
  <q-page-sticky position="bottom-right" :offset="[40, -80]">
    <!-- 클릭 시, 글쓰기 페이지로 이동 -->
    <q-btn
      fab
      icon="add"
      color="red-14"
      :to="{
        path: `/write/${props.type}`,
        query: { id: parseInt(props.idCnt) + 1 },
      }"
      @click="updateAppConfig({ searchKeyword: '' })"
    >
      <q-tooltip>글쓰기</q-tooltip>
    </q-btn>
  </q-page-sticky>
</template>

<script setup>
// /view/TabList.vue 에서 넘겨받은 값
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
