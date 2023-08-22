<template>
  <q-layout view="hHr Lpr fFr">
    <div>
      <!-- 로딩 스피너 -> /common/Spinner.vue -->
      <CommonSpinner />
      <!-- 헤더 -> /common/Header.vue -->
      <CommonHeader />
      <!-- 본문 페이지 -> /pages/* -->
      <slot />
      <!-- 푸터 -> /common/Footer.vue -->
      <CommonFooter />
    </div>
  </q-layout>
</template>
