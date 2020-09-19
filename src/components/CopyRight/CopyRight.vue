<template>
  <div class="copy_right m-y-l p-s grid text-center p-y-t">
    <h1>Copyright © 2018 - {{date}} ZY's Blog</h1>
    <h2>Powered by AliyunDesigned by ZY</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
  .copy_right {
    box-shadow: 0 0 1rem #bdc3c7;
    border-radius: 0.5rem 0.5rem 0 0 ;
    width: 100%;
  }
</style>
