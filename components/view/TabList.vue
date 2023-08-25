<!-- 본문 영역 -->
<template>
  <q-scroll-area
    visible
    class="scroll-area q-mb-xl"
    :thumb-style="thumbStyle"
    :bar-style="barStyle"
  >
    <!-- 제목 -->
    <div class="text-h4 text-weight-bolder text-grey-9 q-mb-md">
      {{ title }}
    </div>

    <!-- 구분선 -->
    <div class="bg-red-14 line"></div>

    <!-- 영상 리스트 -->
    <ListItem :type="type" :data="data" />
    <!-- 하단 글쓰기(+) 버튼 -->
    <CommonFloatingButton :id-cnt="data.length" :type="type" />
  </q-scroll-area>
  <!-- 사이드 바 -->
  <CommonSideNav
    @get-data="handleData"
    @get-title="handleTitle"
    @get-type="handleType"
  />
</template>

<script setup>
const app = useAppConfig();

// 제목
const title = ref(app.tabTitle);
// 분류
const type = ref(app.typeName);
// 본문 리스트 data
const data = ref([]);

// 처음 페이지 도달 시, 제목에 맞는 리스트 api 호출
onMounted(async () => {
  const items = await fetch(
    `https://night-treasure-boron.glitch.me:5000/${type.value}`,
    {
      method: 'GET',
    },
  )
    .then(r => r.json())
    .catch(e => e.data);
  data.value = items;
});

// SideNav.vue 에서 발생된 updateAppConfig 이벤트 listen
watch(app, async () => {
  title.value = app.tabTitle;
  type.value = app.typeName;
});

// SideNav.vue에 emit한 이벤트와 연결
// * parameter랑 const 변수명 겹치면 이상하게 안됨.
function handleData(d) {
  data.value = d;
}
function handleTitle(t) {
  title.value = t;
}
function handleType(t) {
  type.value = t;
}

// 스크롤 바 스타일
const thumbStyle = {
  right: '4px',
  borderRadius: '5px',
  backgroundColor: '#d50000',
  width: '5px',
  opacity: 0.75,
};
const barStyle = {
  right: '2px',
  borderRadius: '9px',
  backgroundColor: '#d50000',
  width: '9px',
  opacity: 0.2,
};
</script>

<style scoped>
.scroll-area {
  margin-top: -20px;
  padding-left: 110px;
  width: 100%;
  height: 700px;
}
.line {
  height: 5px;
  width: 90%;
}
</style>
