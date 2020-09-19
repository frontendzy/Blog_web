import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NavBar from '../components/NavigationBar/NavBar.vue'
import CopyRight from '../components/CopyRight/CopyRight.vue'

import Main from '../views/Main.vue'

// 页面
import Article from '../views/pages/Article.vue'
import ArticleList from '../views/pages/ArticleList.vue'
import ArticleArchive from '../views/pages/Archive.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: { default: Main, header: NavBar, footer: CopyRight },
    children: [
      { 
        path: '/',
        component: Home,
        children: [
          { path: '/', component: ArticleList}
        ]
      },
      { path: '/article/:id', component: Article, props: true },
      { path: '/articlearchive', component: ArticleArchive }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
