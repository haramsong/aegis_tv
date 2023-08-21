<template>
  <q-page-container class="GPL__page-container">
    <q-page-sticky position="left">
      <div class="fit q-py-lg q-px-md column">
        <q-btn
          v-for="(item, index) in app.data"
          :key="item.type"
          round
          flat
          color="grey-9"
          stack
          no-caps
          size="24px"
          class="GPL__side-btn"
          @click.prevent="getListItem(index)"
        >
          <q-icon size="24px" :name="item.icon" />
          <div class="GPL__side-btn__label">{{ item.title }}</div>
        </q-btn>
      </div>
    </q-page-sticky>
  </q-page-container>
</template>

<script setup>
const app = useAppConfig();

const emit = defineEmits(['getData', 'getTitle', 'getType']);

const getListItem = async index => {
  updateAppConfig({ searchKeyword: '' });
  updateAppConfig({ loading: true });

  const type = app.data[index].type;
  emit('getTitle', app.data[index].title);
  emit('getType', type);
  updateAppConfig({ type });

  const apiUrl = `http://localhost:5000/${type}`;
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
    });
    const data = await response.json();
    emit('getData', data);
  } catch (error) {
    console.error(error);
  } finally {
    updateAppConfig({ loading: false });
  }
};
</script>

<style lang="sass">
.GPL
  &__page-container
    width: 64px

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368

    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px

  &__side-btn
    &__label
      font-size: 15px
      line-height: 30px
      letter-spacing: .01785714em
      font-weight: 600

  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>
