<template>
  <div class="contact_card m-x-s">
    <slot name="contact_card"></slot>
  </div>
        
</template>

<script>
// 三角形 矩形框
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
  .contact_card {
    width: 5rem;
    height: 5rem;
    line-height: 5rem;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 1rem #bdc3c7;
    transition: all .4s;
    
  }
  .contact_card:hover {
    background: black;
  }
</style>
