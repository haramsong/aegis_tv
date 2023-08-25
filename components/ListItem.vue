<!-- 본문 리스트 구성 요소 -->
<template>
  <div class="q-pa-md">
    <q-card
      v-for="item in listData.slice().reverse()"
      :key="item.id"
      class="my-card q-ma-lg"
    >
      <!-- 신규 컨텐츠 flag -->
      <div v-if="checkRecentFlag(item.id)" class="q-mb-md">
        <q-icon
          size="42px"
          class="absolute z-top text-red-14 bg-none text-h6"
          name="fiber_new"
        />
      </div>
      <div class="q-pa-lg">
        <!-- 영상 -->
        <q-video :src="`https://www.youtube.com/embed/${item.root}`" />
        <!-- 카드 영역 클릭 시, 상세 페이지 이동 -->
        <nuxt-link
          style="text-decoration: none; color: inherit"
          :to="{
            path: `/details/${props.type}`,
            query: { id: item.id },
          }"
          @click="updateCnt(item.id)"
        >
          <!-- 제목, 작성자 -->
          <q-card-section>
            <div class="text-h6">{{ item.title }}</div>
            <div class="text-subtitle2 text-bold">{{ item.createdBy }}</div>
          </q-card-section>
          <!-- 작성일, 조회수 -->
          <q-card-section class="q-pt-none">
            <span class="text-subtitle2 text-bold">{{ item.createdAt }}</span>
            <span class="text-subtitle2 float-right">{{ item.cnt }}</span>
          </q-card-section>
        </nuxt-link>
      </div>
    </q-card>
    <div class="q-pb-xl"></div>
  </div>
</template>

<script setup>
const app = useAppConfig();

// 본문 리스트
const listData = ref(props.data);
// 검색어
const searchKey = ref('');

// TabList.vue 에서 넘겨준 props
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

// Header.vue 에서 발생시킨 updateAppConfig 이벤트 listen
// * Vuex의 store 기능과 비슷, 다른 컴포넌트에서 state 변경 시 watch안 함수 돎.
watch(app, () => {
  searchKey.value = app.searchKeyword;
  if (app.searchKeyword != '') {
    // 검색어 포함된 list
    const searchedList = [];
    listData.value.forEach(function (v, i) {
      if (v.title.includes(searchKey.value)) {
        searchedList.push(v);
      }
    });
    listData.value = searchedList;
  } else {
    listData.value = props.data;
  }
});

// SideNav.vue 에서 발생시킨 updateAppConfig 이벤트 listen
watch(props, () => {
  listData.value = props.data;
});

// 신규 컨텐츠 flag 부여 이벤트
const checkRecentFlag = id => {
  // 작성일
  const splittedDate = props.data[parseInt(id) - 1].createdAt.split('-');
  const date = splittedDate.join('/');

  const today = new Date();
  const dateObject = new Date(date);
  const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7,
  );

  // 작성일이 일주일 안에 있으면 true
  return lastWeek < dateObject && dateObject <= today;
};

// 조회수 update 이벤트
const updateCnt = async id => {
  // Spinner.vue 에서 watch trigger
  updateAppConfig({ loading: true });

  try {
    const cnt = parseInt(props.data[parseInt(id) - 1].cnt);
    const body = JSON.stringify({
      cnt: cnt + 1,
    });
    const response = await fetch(
      `https://warm-valuable-gasosaurus.glitch.me/${props.type}/${id}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body,
      },
    ).then(r => r.json());
    console.log(response);
  } catch (e) {
    console.log(e);
  }

  // 검색어 초기화, Header.vue 에서 watch trigger
  updateAppConfig({ searchKeyword: '' });
  // Spinner.vue 에서 watch trigger
  updateAppConfig({ loading: false });
};
</script>

<style lang="sass" scoped>
.my-card
  width: 50%
  max-width: 320px
  min-width: 320px
  display: inline-block

.card
  padding-top: 10px
</style>
