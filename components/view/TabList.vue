<template>
  <q-scroll-area
    visible
    class="q-mb-xl"
    :thumb-style="thumbStyle"
    :bar-style="barStyle"
    style="margin-top: -20px; padding-left: 110px; width: 100%; height: 700px"
  >
    <div class="text-h4 q-mb-md">Mails</div>
    <ListItem></ListItem>
  </q-scroll-area>
</template>

<script>
export default {
  setup() {
    return {
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75,
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2,
      },
    };
  },
};
</script>
