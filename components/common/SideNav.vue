<!-- 사이드 바 영역 -->
<template>
  <q-page-container class="GPL__page-container">
    <q-page-sticky position="left">
      <div class="fit q-py-lg q-px-md column">
        <q-btn
          v-for="(item, index) in app.data"
          :key="item.type"
          round
          flat
          color="grey-9"
          stack
          no-caps
          size="24px"
          class="GPL__side-btn q-my-xs"
          @click.prevent="getListItem(index)"
        >
          <!-- 버튼 아이콘 -->
          <q-icon size="34px" :name="item.icon" />
          <!-- 버튼 제목 -->
          <div class="GPL__side-btn__label">{{ item.title }}</div>
        </q-btn>
      </div>
    </q-page-sticky>
  </q-page-container>
</template>

<script setup>
const app = useAppConfig();

// emit 이벤트 정의, 상위 컴포넌트로 변수 전달
const emit = defineEmits(['getData', 'getTitle', 'getType']);

// 사이드 바 버튼 클릭 이벤트
const getListItem = async index => {
  // Spinner.vue 에서 watch trigger
  updateAppConfig({ loading: true });

  // 사이드 바 탭 이동 시, 검색어 초기화
  updateAppConfig({ searchKeyword: '' });

  const title = app.data[index].title;
  const type = app.data[index].type;

  // TabList.vue 에서 watch trigger
  updateAppConfig({ tabTitle: title });
  updateAppConfig({ typeName: type });

  // TabList.vue 에서 getTitle, getType 속성 전달
  emit('getTitle', title);
  emit('getType', type);

  // type에 따른 각각의 api 호출(GET)
  const apiUrl = `http://192.168.38.41:5000/${type}`;
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
    });
    const data = await response.json();
    // TabList.vue 에서 getData 속성 전달
    emit('getData', data);
  } catch (error) {
    console.error(error);
  } finally {
    // Spinner.vue 에서 watch trigger
    updateAppConfig({ loading: false });
  }
};
</script>

<style lang="sass">
.GPL
  &__page-container
    width: 64px

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368

    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px

  &__side-btn
    &__label
      font-size: 15px
      line-height: 32px
      letter-spacing: .01785714em
      font-weight: 700

  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>
