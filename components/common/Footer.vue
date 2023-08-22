<template>
  <q-footer elevated glossy class="bg-grey-5 footer" height-hint="64">
    <div class="row no-wrap">
      <q-toolbar class="col-5 text-weight-bolder text-h4 text-grey-9 footer">
        <q-space />
        <div>AegisTV</div>
      </q-toolbar>
      <q-space />
      <q-toolbar class="text-grey-9 footer">
        <div v-if="$q.screen.gt.xs" class="div-font">
          <div>
            08506 서울특별시 금천구 가산디지털2로 98 2동 714호
            이지스엔터프라이즈(주)
          </div>
          <div>
            사업자등록번호 : 120-86-14122 &#9; 통신판매번호
            제2008-서울금천-0412호
          </div>
          <div>대표이사 : 최병인</div>
          <br />
          <div>
            <strong
              >COPYRIGHT &copy; AEGIS ENTERPRISE ALL RIGHT RESERVED.</strong
            >
          </div>
        </div>
      </q-toolbar>
    </div>
  </q-footer>
</template>

<script setup></script>

<style scoped>
.footer {
  height: 130px;
}
.div-font {
  font-size: 10px;
}
</style>
