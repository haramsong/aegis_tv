// app.config.ts -> Vuex 와 흡사한 기능, 전역 변수 지정 가능
export default defineAppConfig({
  // 사이드 바 구성 데이터
  data: [
    {
      title: '입주자',
      type: 'residents',
      icon: 'group',
    },
    {
      title: '검침',
      type: 'inspects',
      icon: 'gas_meter',
    },
    {
      title: '부과',
      type: 'payments',
      icon: 'payments',
    },
    {
      title: '수납',
      type: 'storages',
      icon: 'storage',
    },
    {
      title: '회계',
      type: 'accountings',
      icon: 'receipt_long',
    },
    {
      title: '인사급여',
      type: 'payrolls',
      icon: 'local_atm',
    },
    {
      title: '기타',
      type: 'etcs',
      icon: 'more',
    },
  ],
  // TabList 제목
  tabTitle: '입주자',
  // 사이드 바 선택 종류
  typeName: 'residents',
  // 검색
  searchKeyword: '',
  // 로딩 스피너 처리
  loading: false,
  // 검색 리스트
  listData: [],
});
