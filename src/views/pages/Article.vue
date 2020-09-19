<template>
  <div class="article_page m-l container">
    <div><button class="article_page_back p-x-l p-y-s" @click="$router.push('/')">返回</button></div>
    <div class="article_page_title m-y-t">
      <h1 class="article_page_title_text">{{data.title}}</h1>
    </div>
    <div class="article_page_description p-l">
      <span>{{data.updatedAt | date}}</span>
      <span>{{data.belong.name}}</span>
    </div>
    <div>
       <mavon-editor class="editor"
                  ref="md" 
                  :ishljs="prop.ishljs"
                  :shortCut="prop.shortCut" 
                  :previewBackground="prop.previewBackground" 
                  :editable="prop.editable" 
                  :codeStyle="prop.codeStyle" 
                  v-model="data.body" 
                  :defaultOpen = "prop.defaultOpen" 
                  :subfield = "prop.subfield" 
                  :toolbarsFlag = "prop.toolbarsFlag" />
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
  props: {
    id: {}
  },
  data() {
    return {
      data: {
        title: '',
        belong: {
          name: ''
        },
        description: '',
        image: '',
        body: '',
        updatedAt:''
      }
    }
  },
  computed: {
    prop () {
      let data = {
        ishljs: true,
        subfield: false,// 单双栏模式
        defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false,//是否编辑
        toolbarsFlag: false,//工具栏
        scrollStyle: true,
        codeStyle: 'github-gis',
        shortCut: false,
        previewBackground: '#bdc3c7',
      }
      return data
    }
  },
  methods: {
    async fetch(){
      const res = await this.$http.get(`article/${this.id}`)
      this.data = res.data
    }
  },
  created() {
    this.fetch();
  }
}
</script>

<style scoped lang="scss">
  .article_page {
    box-shadow: 0 0 1rem #bdc3c7;
    background: #ecf0f1;
    .v-note-wrapper {
      z-index: 1 !important;
    }
    .article_page_back {
      background: white;
      border-radius: 1rem;
      box-shadow: 0 0 1rem #bdc3c7;
    }
    .article_page_background {
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .article_page_title {
      .article_page_title_text {
        font-size: 2.5rem;
      }
    }
  }
</style>
