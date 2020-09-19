<template>
  <div class="infomation_card text-center m-y-l grid">
    <div v-for="(item, i) in data" :key="i">
    <div class="font-t"><span>{{item.name}}</span></div>
    <div class="m-y-s"><span>{{item.signature}}</span></div>
    <div>
      <StatisticsCard>
        <span slot="digital">{{article}}</span>
        <span slot="category">文章</span>
      </StatisticsCard>
    </div>
    <div class="contact_card flex justify-center">
      <ContactCard v-for="(icon, z) in item.contact" :key="z">
        <a slot="contact_card" :href="icon.link"><i :class="icon.icon" class="iconfont"></i></a>
      </ContactCard>
    </div>
    </div>
  </div>
</template>

<script>
import StatisticsCard from './StatisticsCard'
import ContactCard from './ContactCard'
export default {
  data() {
    return {
      data: {
        avatar: '',
        name: '',
        signature: '',
        contact: [{
          name: '',
          icon: '',
          link: ''
        }]
      },
      article: 0
    }
    
  },
  components: {
    StatisticsCard,
    ContactCard
  },
  methods: {
    async fetch(){
      const res = await this.$http.get('personal')
      this.data = res.data
    },
    async articlelength(){
      const res = await this.$http.get('article')
      this.article = res.data.length
    }
  },
   created() {
     this.fetch();
     this.articlelength()
   }
}
</script>

<style scoped lang="scss">
  .infomation_card {
    .contact_card {
      transition: all .4s;
      a {
        
        &:hover {
          color: white;
        }
      }
      .iconfont {
      font-size: 5rem;
    }
    }
  }
</style>
