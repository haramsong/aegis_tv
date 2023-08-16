<template>
  <q-scroll-area
    visible
    class="q-mb-xl"
    :thumb-style="thumbStyle"
    :bar-style="barStyle"
    style="margin-top: -20px; padding-left: 110px; width: 100%; height: 700px"
  >
    <div class="text-h4 text-weight-bolder text-grey-9 q-mb-md">입주자</div>
    <div class="bg-red-14 line"></div>
    <ListItem></ListItem>
  </q-scroll-area>
</template>

<script setup>
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
.line {
  height: 5px;
  width: 90%;
}
</style>
