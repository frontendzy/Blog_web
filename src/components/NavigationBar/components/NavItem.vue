<template>
  <div class="nav_item flex justify-start align-center">
    <button class="nav_item_btn"><slot name="nav_item_btn"></slot></button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
  button{
    border: none;
    outline:none;
    background: none;
  }
  .nav_item {
    width: 100%;
    .iconfont {
      font-size: 1.5rem;
      }
    .nav_item_btn {
      transition: all 0.5s;
      /* padding: 0.5rem 1rem; */
      height: 100%;
      min-width: 5rem;
      width: 100%;
      height: 5rem;
    }
    .nav_item_btn:hover {
      /* background-color: #bdc3c7; */
      cursor:pointer;
    }
  }
</style>
