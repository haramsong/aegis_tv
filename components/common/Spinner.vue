<script setup>
import { useQuasar } from 'quasar';

const app = useAppConfig();
const $q = useQuasar();
let timer;

watch(app, () => {
  if (app.loading) {
    $q.loading.show();
  } else {
    $q.loading.hide();
  }
});

onBeforeUnmount(() => {
  if (timer !== void 0) {
    clearTimeout(timer);
    $q.loading.hide();
  }
});
</script>

<style></style>
