<template>
  <q-header elevated glossy class="bg-grey-10 text-grey-8" height-hint="64">
    <q-toolbar class="GPL__toolbar" style="height: 64px">
      <!-- 상단 버튼 -->
      <!-- <q-btn
        flat
        dense
        round
        aria-label="Menu"
        icon="menu"
        class="q-mx-md"
        @click="toggleLeftDrawer"
      /> -->

      <q-toolbar-title shrink class="row items-center no-wrap">
        <span class="q-ml-sm">
          <nuxt-link class="text-weight-bolder text-h5 text-white" to="/"
            >AegisTV</nuxt-link
          >
        </span>
      </q-toolbar-title>

      <q-space />

      <q-input
        v-if="$q.screen.gt.xs"
        v-model="search"
        class="GPL__toolbar-input"
        dark
        dense
        standout
        placeholder="Search"
      >
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

      <!-- <q-btn
        v-if="$q.screen.gt.xs"
        flat
        dense
        no-wrap
        color="primary"
        icon="cloud_upload"
        no-caps
        label="Upload"
        class="q-ml-sm q-px-md"
      /> -->

      <q-space />

      <div class="q-gutter-sm row items-center no-wrap">
        <q-btn round dense flat color="white" icon="apps">
          <q-tooltip>설정</q-tooltip>
        </q-btn>
        <q-btn round dense flat color="white" icon="notifications">
          <!-- <q-badge color="red" text-color="white" floating> 2 </q-badge> -->
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
const search = ref('');
</script>

<style lang="sass" scoped>
.GPL
  &__toolbar
    height: 64px

  &__toolbar-input
    width: 35%
</style>
