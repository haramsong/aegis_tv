<template>
  <div class="q-pa-xl q-ma-xl">
    <q-form
      class="q-gutter-md q-pt-lg q-ma-xl"
      @submit="onSubmit()"
      @reset="onReset"
    >
      <q-input
        v-model="createdBy"
        filled
        disable
        label="작성자 *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || '작성자를 입력해주세요.']"
      />
      <q-input
        v-model="title"
        filled
        label="제목 *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || '제목을 입력해주세요.']"
      />
      <q-input
        v-model="root"
        filled
        label="경로 *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || '경로를 입력해주세요.']"
      />
      <div>
        <q-btn label="등록" type="submit" color="primary" />
        <q-btn
          label="초기화"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { format } from 'date-fns';

const router = useRouter();
const route = useRoute();
const $q = useQuasar();

const today = new Date();

const id = ref(route.query.id);
const title = ref(null);
const createdAt = ref(format(today, 'yyyy-MM-dd'));
const createdBy = '관리자';
const cnt = 0;
const root = ref(null);

const onSubmit = async () => {
  updateAppConfig({ loading: true });

  try {
    const body = JSON.stringify({
      id: parseInt(id.value),
      title: title.value,
      createdAt: createdAt.value,
      createdBy,
      cnt,
      root: root.value,
    });
    const response = await fetch(`http://localhost:5000/${route.params.type}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    }).then(r => r.json());
    console.log(response);
  } catch (e) {
    console.log(e);
  } finally {
    updateAppConfig({ loading: false });

    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted',
      actions: [
        {
          label: '확인',
          color: 'white',
          handler: () => {
            router.push({ path: '/' });
          },
        },
      ],
    });
  }
};

function onReset() {
  title.value = null;
  root.value = null;
}
</script>
