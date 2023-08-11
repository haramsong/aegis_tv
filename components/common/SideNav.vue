<template>
  <q-page-container class="GPL__page-container">
    <router-view />
    <q-page-sticky position="left">
      <div class="fit q-py-lg q-px-sm column">
        <q-btn
          round
          flat
          color="grey-8"
          stack
          no-caps
          size="26px"
          class="GPL__side-btn"
        >
          <q-icon size="22px" name="photo" />
          <div class="GPL__side-btn__label">Photos</div>
        </q-btn>

        <q-btn
          round
          flat
          color="grey-8"
          stack
          no-caps
          size="26px"
          class="GPL__side-btn"
        >
          <q-icon size="22px" name="collections_bookmark" />
          <div class="GPL__side-btn__label">Albums</div>
        </q-btn>

        <q-btn
          round
          flat
          color="grey-8"
          stack
          no-caps
          size="26px"
          class="GPL__side-btn"
        >
          <q-icon size="22px" name="assistant" />
          <div class="GPL__side-btn__label">Assistant</div>
          <q-badge
            floating
            color="red"
            text-color="white"
            style="top: 8px; right: 16px"
          >
            1
          </q-badge>
        </q-btn>

        <q-btn
          round
          flat
          color="grey-8"
          stack
          no-caps
          size="26px"
          class="GPL__side-btn"
        >
          <q-icon size="22px" name="group" />
          <div class="GPL__side-btn__label">Sharing</div>
        </q-btn>

        <q-btn
          round
          flat
          color="grey-8"
          stack
          no-caps
          size="26px"
          class="GPL__side-btn"
        >
          <q-icon size="22px" name="import_contacts" />
          <div class="GPL__side-btn__label">Photo books</div>
        </q-btn>

        <q-btn
          round
          flat
          color="grey-8"
          stack
          no-caps
          size="26px"
          class="GPL__side-btn"
        >
          <q-icon size="22px" name="check_circle" />
          <div class="GPL__side-btn__label">Check</div>
        </q-btn>

        <q-btn
          round
          flat
          color="grey-8"
          stack
          no-caps
          size="26px"
          class="GPL__side-btn"
        >
          <q-icon size="22px" name="login" />
          <div class="GPL__side-btn__label">Login</div>
        </q-btn>
      </div>
    </q-page-sticky>
  </q-page-container>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      tab: ref('mails'),
      splitterModel: ref(20),
    };
  },
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
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500

  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>
