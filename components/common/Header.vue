<template>
  <q-header elevated glossy class="bg-grey-10 text-grey-8" height-hint="64">
    <q-toolbar class="GPL__toolbar" style="height: 64px">
      <q-toolbar-title shrink class="row items-center no-wrap">
        <span class="q-ml-sm">
          <nuxt-link class="text-weight-bolder text-h5 text-white" to="/"
            >AegisTV</nuxt-link
          >
        </span>
      </q-toolbar-title>

      <q-space />

      <q-input
        v-if="$q.screen.gt.sm"
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

      <q-space />

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
const search = ref('');
</script>

<style lang="sass" scoped>
.GPL
  &__toolbar
    height: 64px

  &__toolbar-input
    width: 35%
</style>
