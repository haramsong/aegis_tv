<template>
  <q-page-container class="GPL__page-container">
    <q-page-sticky position="left">
      <div class="fit q-py-lg q-px-md column">
        <q-btn
          round
          flat
          color="grey-9"
          stack
          no-caps
          size="24px"
          class="GPL__side-btn"
          @click.prevent="getListItem"
        >
          <q-icon size="24px" name="photo" />
          <div class="GPL__side-btn__label">입주자</div>
        </q-btn>

        <q-btn
          round
          flat
          color="grey-9"
          stack
          no-caps
          size="24px"
          class="GPL__side-btn"
        >
          <q-icon size="24px" name="collections_bookmark" />
          <div class="GPL__side-btn__label">검침</div>
        </q-btn>

        <q-btn
          round
          flat
          color="grey-9"
          stack
          no-caps
          size="24px"
          class="GPL__side-btn"
        >
          <q-icon size="24px" name="assistant" />
          <div class="GPL__side-btn__label">부과</div>
          <q-badge
            floating
            color="red-14"
            text-color="white"
            style="top: 8px; right: 16px"
          >
            1
          </q-badge>
        </q-btn>

        <q-btn
          round
          flat
          color="grey-9"
          stack
          no-caps
          size="24px"
          class="GPL__side-btn"
        >
          <q-icon size="24px" name="group" />
          <div class="GPL__side-btn__label">수납</div>
        </q-btn>

        <q-btn
          round
          flat
          color="grey-9"
          stack
          no-caps
          size="24px"
          class="GPL__side-btn"
        >
          <q-icon size="24px" name="import_contacts" />
          <div class="GPL__side-btn__label">회계</div>
        </q-btn>

        <q-btn
          round
          flat
          color="grey-9"
          stack
          no-caps
          size="24px"
          class="GPL__side-btn"
        >
          <q-icon size="24px" name="check_circle" />
          <div class="GPL__side-btn__label">인사급여</div>
        </q-btn>

        <q-btn
          round
          flat
          color="grey-9"
          stack
          no-caps
          size="24px"
          class="GPL__side-btn"
        >
          <q-icon size="24px" name="login" />
          <div class="GPL__side-btn__label">기타</div>
        </q-btn>
      </div>
    </q-page-sticky>
  </q-page-container>
</template>

<script setup></script>

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
