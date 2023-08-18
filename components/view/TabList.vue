<template>
  <q-scroll-area
    visible
    class="q-mb-xl"
    :thumb-style="thumbStyle"
    :bar-style="barStyle"
    style="margin-top: -20px; padding-left: 110px; width: 100%; height: 700px"
  >
    <div class="text-h4 text-weight-bolder text-grey-9 q-mb-md">
      {{ title }}
    </div>
    <div class="bg-red-14 line"></div>
    <ListItem :data="data" />
    <CommonFloatingButton :id-cnt="data.length" :type="type" />
  </q-scroll-area>
  <CommonSideNav
    @getData="handleData"
    @getTitle="handleTitle"
    @getType="handleType"
  />
</template>

<script setup>
const app = useAppConfig();

const idCnt = ref(0);
const title = ref('입주자');
const type = ref('residents');
const data = ref([]);

const items = await fetch(`http://localhost:5000/residents`, {
  method: 'GET',
})
  .then(r => r.json())
  .catch(e => e.data);
// console.log(this.$parent.currentTab);
data.value = items;
idCnt.value = items.length;

// parameter랑 const 변수명 겹치면 이상하게 안됨.
function handleData(d) {
  data.value = d;
}

function handleTitle(t) {
  title.value = t;
}

function handleType(t) {
  type.value = t;
}

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
const currentTab = app.typeName;
</script>

<style scoped>
.line {
  height: 5px;
  width: 90%;
}
</style>
