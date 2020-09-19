<template>
  <div class="article_list">
    <ArticleCard v-for="item in data" :key="item._id">
      <h1 slot="card_item_title">{{item.title}}</h1>
      <img slot="card_item_image" :src="item.image" alt="">
      <span slot="card_item_description">{{item.description}}</span>
      <span slot="card_item_time">{{item.updatedAt | date}}</span>
      <span slot="card_item_genre">{{item.belong.name}}</span>
      <button class="btn_color" @click="Jump(item._id)" slot="card_item_btn">阅读</button>
    </ArticleCard>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
export default {
  filters: {
    date(val){
      return dayjs(val).format('YYYY-MM-DD')
    }
  },
  data() {
    return {
      data: [{
        title: '',
        belong: {
          name: ''
        },
        description: '',
        image: '',
        body: '',
        updatedAt:''
      }]
    }
  },
  components: {
    ArticleCard
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
  .article_list {
    .btn_color {
      color: #3498db;
      &:hover {
        cursor:pointer;
      }
    }
  }
</style>
