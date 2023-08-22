<!-- 수정 페이지 : /edit/[type]?id=[id] -->
<template>
  <div class="q-pa-xl q-ma-xl">
    <!-- 수정 form -->
    <q-form class="q-gutter-md q-pt-lg q-ma-xl" @submit="onEdit()">
      <!-- 작성 input -->
      <q-input
        v-model="createdBy"
        filled
        disable
        label="작성자 *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || '작성자를 입력해주세요.']"
      />
      <!-- 제목 input -->
      <q-input
        v-model="title"
        filled
        label="제목 *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || '제목을 입력해주세요.']"
      />
      <!-- 경로 input -->
      <q-input
        v-model="root"
        filled
        label="경로 *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || '경로를 입력해주세요.']"
      />
      <!-- button group -->
      <div>
        <!-- 수정 button -->
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

// 수정할 data
const title = ref(null);
const createdAt = ref(format(today, 'yyyy-MM-dd'));
const root = ref(null);

// 수정할 페이지 정보 호출
onMounted(async () => {
  // Spinner.vue 에서 watch trigger
  updateAppConfig({ loading: true });

  const response = await fetch(
    `http://localhost:5000/${route.params.type}/${route.query.id}`,
    {
      method: 'GET',
    },
  ).then(r => r.json());

  // 제목, 경로 input의 value를 채워줌
  title.value = response.title;
  root.value = response.root;

  // Spinner.vue 에서 watch trigger
  updateAppConfig({ loading: false });
});

// 수정 이벤트
const onEdit = async () => {
  // Spinner.vue 에서 watch trigger
  updateAppConfig({ loading: true });

  try {
    // 수정할 data
    const body = JSON.stringify({
      title: title.value,
      createdAt: createdAt.value,
      root: root.value,
    });

    // PATCH api 호출
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
    // Spinner.vue 에서 watch trigger
    updateAppConfig({ loading: false });

    // 확인 alarm
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: '수정이 완료되었습니다.',
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
