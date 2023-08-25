<!-- 상세 페이지 : /details/[type]?id=[id] -->
<template>
  <q-page-container>
    <q-page fit class="q-my-md">
      <!-- 제목 영역 -->
      <div class="bg-grey-2 q-mb-lg line">
        <!-- 제목 -->
        <div
          class="text-grey-14 q-pb-lg q-ma-sm text-bold text-h5 align-center inline-block"
        >
          {{ item.title }}
        </div>
        <div class="text-grey-14 q-ma-sm float-bottom">
          <!-- 작성자 -->
          <span>관리자</span>
          <!-- 작성일 -->
          <span class="relative float-right">{{ item.createdAt }}</span>
        </div>
      </div>
      <!-- 본문 영역 -->
      <div class="content q-mb-lg">
        <q-video
          style="height: 460px"
          :src="`https://www.youtube.com/embed/${item.root}`"
        />
      </div>
      <!-- button group -->
      <div class="button">
        <!-- 삭제 button -->
        <q-btn
          class="float-right q-ma-md q-pa-md"
          color="red-14"
          label="삭제하기"
          icon="delete"
          @click="confirm = true"
        />
        <!-- 수정 button, 클릭 시 수정 페이지로 이동 -->
        <q-btn
          color="primary"
          class="float-right q-ma-md q-pa-md"
          label="수정하기"
          icon="update"
          :to="{
            path: `/edit/${route.params.type}`,
            query: { id: parseInt(route.query.id) },
          }"
        />
      </div>

      <!-- 삭제 confirm modal -->
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
      <!-- 삭제 확인 alert modal -->
      <q-dialog v-model="alert">
        <q-card class="alert-modal">
          <q-card-section>
            <div class="text-h6">완료</div>
          </q-card-section>
          <q-card-section class="q-pt-none">삭제되었습니다.</q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="확인" color="primary" @click="confirmDelete" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
  </q-page-container>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

// 본문 data
const item = ref({});
// 삭제 확인 alert modal 노출 상태
const alert = ref(false);
// 삭제 confirm modal 노출 상태
const confirm = ref(false);

// 상세 페이지 정보 호출
onMounted(async () => {
  // Spinner.vue 에서 watch trigger
  updateAppConfig({ loading: true });

  const response = await fetch(
    `https://my-json-server.typicode.com/haramsong/aegis_tv_api/${route.params.type}/${route.query.id}`,
    {
      method: 'GET',
    },
  ).then(r => r.json());

  // 본문 정보를 채워줌
  item.value = response;

  // Spinner.vue 에서 watch trigger
  updateAppConfig({ loading: false });
});

// 삭제 이벤트 : confirm에서 확인을 눌렀을 시 호출
async function deleteItem() {
  // DELETE api 호출
  const response = await fetch(
    `https://my-json-server.typicode.com/haramsong/aegis_tv_api/${route.params.type}/${route.query.id}`,
    {
      method: 'DELETE',
    },
  ).then(r => r.json());
  console.log(response);

  // confirm modal 닫음
  confirm.value = false;
  // alert modal 열음
  alert.value = true;
}

// 삭제 확인 이벤트
function confirmDelete() {
  // alert modal 닫음
  alert.value = false;
  // root 경로로 이동
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
.alert-modal {
  width: 300px;
}
</style>
