<template>
  <div class="q-pa-xl q-ma-xl">
    <q-form
      class="q-gutter-md q-pt-lg q-ma-xl"
      @submit="onSubmit"
      @reset="onReset"
    >
      <q-input
        v-model="name"
        filled
        label="제목 *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || '제목을 입력해주세요.']"
      />

      <q-input
        v-model="createdBy"
        filled
        disable
        label="작성자 *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || '작성자를 입력해주세요.']"
      />

      <!-- <q-input
        v-model="age"
        filled
        type="number"
        label="Your age *"
        lazy-rules
        :rules="[
          val => (val !== null && val !== '') || 'Please type your age',
          val => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      /> -->
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

const router = useRouter();

const $q = useQuasar();

const name = ref(null);
const createdBy = ref('관리자');
const root = ref(null);

function onSubmit() {
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

function onReset() {
  name.value = null;
  root.value = null;
}
</script>
