<template>
  <div class="q-pa-md">
    <q-card
      v-for="item in props.data"
      :key="item.id"
      class="q-ma-lg q-pa-md my-card"
    >
      <q-video :src="`https://www.youtube.com/embed/${item.root}`" />
      <nuxt-link
        style="text-decoration: none; color: inherit"
        :to="`/details/${item.id}`"
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
const listData = ref([]);

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
// console.log(this.$parent.currentTab);
</script>

<style lang="sass" scoped>
.my-card
  width: 50%
  max-width: 320px
  min-width: 320px
  display: inline-block
</style>
