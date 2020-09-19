<template>
  <div>
    <div v-for="item in data" :key="item._id">
      <div class="nav_bar p-x-max flex align-center">
      <div class="nav_bar_title flex align-center">
        <a href="/">
          <div class="nav_bar_title_logo"><img :src="item.logo"></div>
          <h1>{{item.name}}</h1>
        </a>
      </div>
      <div :class="{active: !list_icon}" class="nav_bar_navitem p-x-t flex">
        <!-- <NavItem><span class="nav_item_btn" slot="nav_item_btn"><i class="iconfont icon-category"></i>归档</span></NavItem> -->
        <!-- <button @click="Jump()" class="nav_btn"><span><i class="iconfont icon-category"></i>归档</span></button> -->
        <NavItem v-for="navitem in item.icon" :key="navitem._id"><a class="nav_item_btn" :href="navitem.link" slot="nav_item_btn"><i :class="navitem.icon" class="iconfont"></i>{{navitem.name}}</a></NavItem>
      </div>
      <div class="nav_bar_menu flex justify-end">
        <div :class="{active: list_icon}" class="nav_bar_menu_item delay">
          <span @click="list_btn"><i class="iconfont icon-caidan"></i></span>
        </div>
      </div>
    </div>
    <div :class="{active: list_icon, show: list_show}" class="item_list">
        <div class="nav_list flex justify-end">
          <div class="left"><button @click="show()" class="left_btn"></button></div>
          <div class="right_item p-x-l p-y-xl">
            <ul>
            <!-- <button @click="Jump()" class="nav_btn"><span><i class="iconfont icon-category"></i>归档</span></button> -->

              <!-- <li><NavItem><span slot="nav_item_btn"><i class="iconfont icon-category"></i>归档</span></NavItem></li> -->
              <li v-for="itemlist in item.icon" :key="itemlist._id"><NavItem><a :href="itemlist.link" slot="nav_item_btn"><i :class="itemlist.icon" class="iconfont icon-github"></i>{{itemlist.name}}</a></NavItem></li>
            </ul>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import List from './components/list'
import NavItem from './components/NavItem'
export default {
  data() {
    return {
      list_icon: false,
      list_show: false,
      screenWidth: document.body.clientWidth,
      data: {}
    }
  },
  components: {
    List,
    NavItem
  },
  methods: {
    onResponsiveInverted() {
      if (window.innerWidth > 992) {
        this.list_icon = true;
      } else {
        this.list_icon = false;
      }
    },
    list_btn() {
      if(this.list_show != true) {
        this.list_show = true;
      }else {
        this.list_show = false;
      }
    },
    show(){
      this.list_show = false;
    },
    Jump() {
      this.$router.push('/articlearchive')
      this.list_show = false;
    },
    async fetch() {
      const res = await this.$http.get('blogicon')
      this.data = res.data
    }

  },
  mounted() {
  this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  created() {
    this.fetch() 
  }
}
</script>

<style scoped lang="scss">
@import'../../assets/scss/variable.scss';
.iconfont {
      font-size: 1rem;
      }
  .nav_bar {
    height: 5rem;
    border-radius: 5px;
    box-shadow: 0 5px 5px map-get($colors, 'secondary');
    background: white;
    margin-bottom: 2rem;
    .nav_bar_title {
      &:hover {
        cursor:pointer;
      }
    }
    .nav_btn {
      height: 5rem;
      line-height: 5rem;
      min-width: 5rem;
      transition: all .5s;
      &:hover {
        background-color: #bdc3c7;
        cursor:pointer;
      }
    }
    .nav_item_btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 768px) {
    padding: 0 1rem;
    }
    @media (min-width: 768px) {
    padding: 0 5rem;
    }
    .nav_bar_title{
      .nav_bar_title_logo {
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        background: black;
        margin: 0 1rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .nav_bar_menu {
      width: 100%;
      .nav_bar_menu_item {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      text-align: center;
      line-height: 2.5rem;
    }
      .nav_bar_menu_item:hover {
      background-color: map-get($colors, 'item_color');
      }
    }
  }
  .item_list {
    position: relative;
    transition: all 0.5s;
    right: -100%;
    
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
  }
  .show {
    right: 0rem;
  }

</style>
