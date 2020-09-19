<template>
  <div class="archive p-s">
    <div class="p-y-l"><h1>归档</h1></div>
    <div class="block">
      <el-timeline>
        <el-timeline-item v-for="item in data" :key="item._id" :timestamp="item.createdAt | date" placement="top">
          <el-card>
            <h4 class="p-y-s" @click="Jump(item._id)"><span>{{item.title}}</span></h4>
            <p>更新时间：{{item.updatedAt | date}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    date(val){
      return dayjs(val).format('YYYY-MM-DD hh:mm:ss')
    }
  },
  data() {
    return {
      data: {}
    }
  },
  components: {
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('article');
      this.data = res.data;
    },
    Jump(val) {
      this.$router.push(`/article/${val}`)
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style scoped lang="scss">
  .archive {
    // 1500以上
  @media (min-width: 1500px) {
    padding: 0 20rem;
  }
// 1200-1500
  @media (min-width: 1200px) and (max-width: 1500px) {
    padding: 0 12rem;
  }
// 992-1200
  @media (min-width: 992px) and (max-width: 1200px) {
    padding: 0 4rem;
  }
  // 768-992
  @media (min-width: 768px) and (max-width: 992px) {
    padding: 0 7rem;
  }
  //屏幕小于768px时
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
    h4 {
      span{
        transition: all .4s;
        &:hover {
          cursor:pointer;
          border-bottom: 1px solid black;
        }
      }
    }
  }
</style>
