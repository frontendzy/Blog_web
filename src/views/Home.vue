<template>
  <div class="home container">
    <div class="home_left">
      <PersonalInformation></PersonalInformation>
    </div>
    <div class="home_right">
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
import PersonalInformation from '../components/PersonalInformation/PersonalInformation'

export default {
  data() {
    return {

    }
  },
  components: {
    PersonalInformation,
  }
}
</script>

<style scoped lang="scss">
   @media (min-width: 992px) {
    .home {
      display: flex;
      .home_right {
        .view {
          overflow-y: scroll;
          height: 100vh;
        &::-webkit-scrollbar {
            display: none;
            background: none;
            border: none;
          }
        }
      }
    }
  }
</style>