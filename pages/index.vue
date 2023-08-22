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

$q.screen.setSizes({ sm: 400, md: 550, lg: 1000, xl: 2000 });
</script>

<style></style>
