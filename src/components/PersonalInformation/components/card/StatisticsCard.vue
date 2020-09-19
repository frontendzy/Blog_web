<template>
  <div class="statistics_card flex justify-center m-y-l">
    <div class="statistics_card_item p-x-z">
      <div class="digital font-l m-y-s"><slot name="digital"></slot></div>
      <div class="category"><slot name="category"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
  .statistics_card {
    .statistics_card_item {
    }
  }
</style>
