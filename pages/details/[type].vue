<template>
  <q-page-container>
    <q-page fit class="q-my-md">
      <!-- <div class="text-h4 text-weight-bolder text-grey-9 q-mb-md">
        {{ title }}
      </div> -->
      <div class="bg-grey-2 q-mb-lg line">
        <div
          class="text-grey-14 q-pb-lg q-ma-sm text-bold text-h5 align-center inline-block"
        >
          {{ item.title }}
        </div>
        <div class="text-grey-14 q-ma-sm float-bottom">
          <span
            class="
          "
            >{{ item.createdBy }}</span
          >
          <span class="relative float-right">{{ item.createdAt }}</span>
        </div>
      </div>
      <div class="content q-mb-lg">
        <q-video
          style="height: 460px"
          :src="`https://www.youtube.com/embed/${item.root}`"
        />
      </div>
      <div class="button">
        <q-btn
          class="float-right q-ma-md q-pa-md"
          color="red-14"
          label="삭제하기"
          icon="delete"
          @click="confirm = true"
        />
        <q-btn
          color="primary"
          class="float-right q-ma-md q-pa-md"
          label="수정하기"
          icon="update"
        />
      </div>
      <q-dialog v-model="confirm" class="q-ma-lg" persistent>
        <q-card>
          <q-card-section class="q-ma-lg row items-center">
            <q-avatar icon="delete_forever" color="red-14" text-color="white" />
            <span class="q-ml-md text-bold">정말로 삭제하시겠습니까?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn v-close-popup flat label="아니요" color="primary" />
            <q-btn flat label="네" color="primary" @click="deleteItem" />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">완료</div>
          </q-card-section>

          <q-card-section class="q-pt-none"> 삭제되었습니다 </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" @click="confirmDelete" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
  </q-page-container>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

const item = ref({});
const alert = ref(false);
const confirm = ref(false);

onMounted(async () => {
  const response = await fetch(
    `http://localhost:5000/${route.params.type}/${route.query.id}`,
    {
      method: 'GET',
    },
  ).then(r => r.json());
  item.value = response;
});

async function deleteItem() {
  // const response = await fetch(
  //   `http://localhost:5000/${route.params.type}/${route.query.id}`,
  //   {
  //     method: 'DELETE',
  //   },
  // ).then(r => r.json());
  confirm.value = false;
  alert.value = true;
}

function confirmDelete() {
  alert.value = false;
  router.push('/');
}
</script>

<style scoped>
.line {
  height: 110px;
  width: 100%;
}
.content {
  height: 460px;
}
</style>
