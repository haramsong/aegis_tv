<script setup>
import { useQuasar } from 'quasar';
import { onBeforeUnmount } from 'vue';

const $q = useQuasar();
let timer;

onBeforeUnmount(() => {
  if (timer !== void 0) {
    clearTimeout(timer);
    $q.loading.hide();
  }
});

function showLoading() {
  $q.loading.show();
}

function hideLoading() {
  $q.loading.hide();
}
</script>

<style></style>
