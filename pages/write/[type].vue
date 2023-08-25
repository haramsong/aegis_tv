<!-- 글쓰기 페이지 : /write/[type]?id=[id] -->
<template>
  <div class="q-pa-xl q-ma-xl">
    <!-- 작성 form -->
    <q-form
      class="q-gutter-md q-pt-lg q-ma-xl"
      @submit="onSubmit()"
      @reset="onReset"
    >
      <!-- 작성자 input -->
      <q-input
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
        <!-- 등록 button -->
        <q-btn label="등록" type="submit" color="primary" />
        <!-- 초기화 button -->
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

// id : 다음 id, 경로 파라미터에서 가져옴
const id = ref(route.query.id);
const title = ref(null);
// 작성일 : 오늘
const createdAt = ref(format(today, 'yyyy-MM-dd'));
// 작성자 : 관리자 고정
// 조회수 : 신규 등록이니 조회수 0
const cnt = 0;
const root = ref(null);

// 등록 이벤트
const onSubmit = async () => {
  // Spinner.vue 에서 watch trigger
  updateAppConfig({ loading: true });

  try {
    // POST params
    const body = JSON.stringify({
      id: parseInt(id.value),
      title: title.value,
      createdAt: createdAt.value,
      cnt,
      root: root.value,
    });

    // POST api 호출
    const response = await fetch(
      `https://my-json-server.typicode.com/haramsong/aegis_tv_api/${route.params.type}`,
      {
        method: 'POST',
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
      message: '등록이 완료되었습니다.',
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

// 초기화 이벤트
function onReset() {
  // 제목, 경로 초기화
  title.value = null;
  root.value = null;
}
</script>
