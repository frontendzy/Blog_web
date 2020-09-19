<template>
  <div class="avatar_card flex justify-center">
    <div class="avatar_card_image">
      <slot name="avatar_card_image"></slot>
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
  .avatar_card {
    width: 100%;
    height: 17rem;
    .avatar_card_image {
      height: 100%;
      width: 17rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
</style>
