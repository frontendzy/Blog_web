<template>
  <div class="nav_list flex justify-end">
    <div class="left"><button @click="show()" class="left_btn"></button></div>
    <div class="right_item p-x-l p-y-xl">
      <ul>
        <li v-for="item in itemicon" :key="item._id"><NavItem><span slot="nav_item_btn"><i class="iconfont icon-wechat-fill"></i>{{item.name}}</span></NavItem></li>
        <li><NavItem><span slot="nav_item_btn"><i class="iconfont icon-github"></i>GitHub</span></NavItem></li>
        <li><NavItem><span slot="nav_item_btn"><i class="iconfont icon-tianchongxing-"></i>Admin</span></NavItem></li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavItem from './NavItem'
export default {
  props: ["itemicon"],
  data() {
    return {

    }
  },
  components: {
    NavItem
  },
  methods: {
    show() {
      this.$emit('show')
    }
  }
}
</script>

<style scoped lang="scss">
  @import'../../../assets/scss/variable.scss';
  button {
    border: none;
    outline:none;
    background: none;
  }
  .nav_list {
    height: 100vh;
    width: 100%;
    background: rgba( 0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    .left {
      width: 100%;
      height: 100%;
      .left_btn {
        height: 100%;
        width: 100%;
      }
    }
    .right_item {
      width: 20rem;
      height: 100%;
      background: white;
      ul {
        list-style: none;
        li{
          padding: 2px 0;
          border-bottom: 1px solid map-get($colors, 'secondary');
          button {
            width: 100%;
            height: 50px;
          }
        }
      }
    }
  }
</style>
