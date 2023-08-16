<template>
  <div class="q-pa-md">
    <q-card
      v-for="resident in residents"
      :key="resident.id"
      class="q-ma-md q-pa-md my-card"
    >
      <q-video :src="`https://www.youtube.com/embed/${resident.root}`" />

      <q-card-section>
        <div class="text-h6">{{ resident.title }}</div>
        <div class="text-subtitle2 text-bold">{{ resident.createdBy }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <span class="text-subtitle2 text-bold">{{ resident.createdAt }}</span>
        <span class="text-subtitle2 float-right">{{ resident.cnt }}</span>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
const residents = await fetch(`http://localhost:5000/residents`, {
  method: 'GET',
})
  .then(r => r.json())
  .catch(e => e.data);
console.log(residents);
</script>

<style lang="sass" scoped>
.my-card
  width: 50%
  max-width: 320px
  min-width: 320px
  display: inline-block
</style>
