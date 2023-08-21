<template>
  <div class="q-pa-md">
    <q-card
      v-for="item in listData.slice().reverse()"
      :key="item.id"
      class="q-ma-lg q-pa-md my-card"
    >
      <span v-if="checkRecentFlag(item.id)">
        <q-icon
          size="59px"
          class="absolute z-top text-red-14 bg-none text-h6"
          name="fiber_new"
        />
      </span>
      <q-video :src="`https://www.youtube.com/embed/${item.root}`" />
      <nuxt-link
        style="text-decoration: none; color: inherit"
        :to="{
          path: `/details/${props.type}`,
          query: { id: item.id },
        }"
        @click="updateCnt(item.id)"
      >
        <q-card-section>
          <div class="text-h6">{{ item.title }}</div>
          <div class="text-subtitle2 text-bold">{{ item.createdBy }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <span class="text-subtitle2 text-bold">{{ item.createdAt }}</span>
          <span class="text-subtitle2 float-right">{{ item.cnt }}</span>
        </q-card-section>
      </nuxt-link>
    </q-card>
    <div class="q-pb-xl"></div>
  </div>
</template>

<script setup>
const app = useAppConfig();

const listData = ref(props.data);
const searchKey = ref('');

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

// Vuex의 store 기능과 비슷, 다른 컴포넌트에서 state 변경 시 watch안 함수 돎.
watch(app, () => {
  searchKey.value = app.searchKeyword;
  if (app.searchKeyword != '') {
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

watch(props, () => {
  listData.value = props.data;
});

const checkRecentFlag = id => {
  const splittedDate = props.data[parseInt(id) - 1].createdAt.split('-');
  const date = splittedDate.join('/');

  const today = new Date();
  const dateObject = new Date(date);
  const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7,
  );

  return lastWeek < dateObject && dateObject <= today;
};

const updateCnt = async id => {
  updateAppConfig({ loading: true });

  try {
    const cnt = parseInt(props.data[parseInt(id) - 1].cnt);
    const body = JSON.stringify({
      cnt: cnt + 1,
    });
    const response = await fetch(`http://localhost:5000/${props.type}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body,
    }).then(r => r.json());
    console.log(response);
  } catch (e) {
    console.log(e);
  }
  updateAppConfig({ loading: false });
};
</script>

<style lang="sass" scoped>
.my-card
  width: 50%
  max-width: 320px
  min-width: 320px
  display: inline-block
</style>
