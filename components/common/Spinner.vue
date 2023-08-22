<script setup>
import { useQuasar } from 'quasar';

const app = useAppConfig();
const $q = useQuasar();

// app.config의 loading 값이 업데이트 될 때마다 이벤트 발생
watch(app, () => {
  if (app.loading) {
    $q.loading.show();
  } else {
    $q.loading.hide();
  }
});
</script>

<style></style>
