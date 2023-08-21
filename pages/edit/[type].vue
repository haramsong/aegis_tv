<template>
  <div class="q-pa-xl q-ma-xl">
    <q-form class="q-gutter-md q-pt-lg q-ma-xl" @submit="onSubmit()">
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
        <q-btn label="수정" type="submit" color="primary" />
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

const title = ref(null);
const createdAt = ref(format(today, 'yyyy-MM-dd'));
const createdBy = '관리자';
const root = ref(null);

onMounted(async () => {
  const response = await fetch(
    `http://localhost:5000/${route.params.type}/${route.query.id}`,
    {
      method: 'GET',
    },
  ).then(r => r.json());
  title.value = response.title;
  root.value = response.root;
});

const onSubmit = async () => {
  updateAppConfig({ loading: true });

  try {
    const body = JSON.stringify({
      title: title.value,
      createdAt: createdAt.value,
      root: root.value,
    });
    const response = await fetch(
      `http://localhost:5000/${route.params.type}/${route.query.id}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body,
      },
    ).then(r => r.json());
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
</script>
