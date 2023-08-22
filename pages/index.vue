<!-- root 디렉토리, /components/view/TabList.vue 바라봄 -->
<template>
  <q-page-container>
    <q-page>
      <q-page-container>
        <q-page class="flex">
          <ViewTabList />
        </q-page>
      </q-page-container>
    </q-page>
  </q-page-container>
</template>

<script setup>
import { useQuasar } from 'quasar';
const $q = useQuasar();

// 사이즈 지정
$q.screen.setSizes({ sm: 400, md: 550, lg: 1000, xl: 2000 });
</script>
