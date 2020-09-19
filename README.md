# Blog 展示页面开发流程

1. 导航栏
2. 网站背景图片
3. 网站内容展示
4. 网站版权信息
   // import NavBar from '../components/NavigationBar/NavBar'
// import ArticleCard from '../components/ArticleCard/ArticleCard'
// import PersonalInformation from '../components/PersonalInformation/PersonalInformation'
// import Category from '../components/Category/Category'
// import CopyRight from '../components/CopyRight/CopyRight'
// export default {
//   name: 'Home',
//   components: {
//     NavBar,
//     ArticleCard,
//     PersonalInformation,
//     Category,
//     CopyRight
//   }
// }

/***
 *  {
    path: '/',
    components: { default: Main, header: NavBar, footer: CopyRight },
    children: [
      { 
        path: '/',
        component: Home,
        children: [
          { path: ''}
        ]
      },
      { path: '/article/:id', component: Article }
    ]
  }
 */

 <!-- 
 .home {
    display: flex;
    .home_left {
      width: 35%;
    }
    .home_right {
      overflow: hidden;
      .view {
        height: 100vh;
        overflow-x: scroll;
        padding-bottom: 5rem;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
   @media (max-width: 992px) {
    .home {
      display: grid;
        .home_left {
          width: 100%;
      }
    }    
  }
  -->