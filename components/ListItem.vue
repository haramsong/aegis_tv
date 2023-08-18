<template>
  <div class="q-pa-md">
    <q-card
      v-for="item in props.data.slice().reverse()"
      :key="item.id"
      class="q-ma-lg q-pa-md my-card"
    >
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
const router = useRouter();

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

const updateCnt = async id => {
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
};
</script>

<style lang="sass" scoped>
.my-card
  width: 50%
  max-width: 320px
  min-width: 320px
  display: inline-block
</style>
