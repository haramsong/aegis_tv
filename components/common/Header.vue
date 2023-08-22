<!-- 헤더 영역 -->
<template>
  <q-header elevated glossy class="bg-grey-10 text-grey-8" height-hint="64">
    <q-toolbar class="GPL__toolbar" style="height: 64px">
      <!-- 제목 영역 -->
      <q-toolbar-title shrink class="row items-center no-wrap">
        <span class="q-ml-sm">
          <!-- 클릭 시, root 디렉토리로 이동 -->
          <nuxt-link class="text-weight-bolder text-h5 text-white" to="/">
            AegisTV
          </nuxt-link>
        </span>
      </q-toolbar-title>

      <q-space />

      <!-- 검색 input -->
      <q-input
        v-if="$q.screen.gt.sm"
        v-model.trim="search"
        class="GPL__toolbar-input"
        dark
        dense
        standout
        placeholder="Search"
        @keyup.enter="searchList"
      >
        <!-- 검색 focus 되었을 때 돋보기 아이콘에서 X 아이콘으로 변함 -->
        <template #prepend>
          <q-icon v-if="search === ''" name="search" />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="search = ''"
          />
        </template>
      </q-input>

      <q-space />

      <!-- 버튼 그룹(설정, 알림, 내 계정) -->
      <div class="q-gutter-sm row items-center no-wrap">
        <q-btn round dense flat color="white" icon="apps">
          <q-tooltip>설정</q-tooltip>
        </q-btn>
        <q-btn round dense flat color="white" icon="notifications">
          <q-tooltip>알림</q-tooltip>
        </q-btn>
        <q-btn round flat>
          <q-avatar size="26px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <q-tooltip>내 계정</q-tooltip>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
const app = useAppConfig();

const search = ref('');

// 검색 event, app.config 업데이트 시, 변경 이벤트를 ListItem.vue 에서 watch 함.
function searchList() {
  updateAppConfig({ searchKeyword: search.value });
}

// 페이지 이동 시 (/details/[type].vue, /write/[type].vue 등)
// 검색어가 있었다면 초기화 해줌
watch(app, () => {
  if (app.searchKeyword == '') {
    search.value = '';
  }
});
</script>

<style lang="sass" scoped>
.GPL
  &__toolbar
    height: 64px

  &__toolbar-input
    width: 35%
</style>
