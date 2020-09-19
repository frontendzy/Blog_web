<template>
  <div class="personal_infomation_item m-y-t p-l">
    <AvatarCard><img slot="avatar_card_image" src="../../../assets/logo_title.png" alt=""></AvatarCard>
    <InfomationCard></InfomationCard>
  </div>
</template>

<script>
import AvatarCard from './card/AvatarCard'
import InfomationCard from './card/InfomationCard'
export default {
  data() {
    return {

    }
  },
  components: {
    AvatarCard,
    InfomationCard
  }
}
</script>

<style scoped lang="scss">
  .personal_infomation_item {
    box-shadow: 0 0 1rem #bdc3c7;
  }
</style>
