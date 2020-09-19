<template>
  <div class="article_card p-s">
    <div class="card_item m-y-t">
      <div class="card_item_image">
        <slot name="card_item_image"></slot>
      </div>
      <div class="card_item_description p-s">
      <div class="title m-y-l">
        <slot name="card_item_title"></slot>
      </div>
      <div class="description m-y-s">
        <slot name="card_item_description"></slot>
      </div>
      <div class="flex justify-between m-y-s">
        <div class="flex">
        <div class="writing_time">
          <slot name="card_item_time"></slot>
        </div>
        <div class="genre">
          -<slot name="card_item_genre"></slot>
        </div>
      </div>
      <div class="goto font-link_color m-x-l p-s">
        <slot name="card_item_btn"></slot>
      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
@import'../../assets/scss/variable.scss';
  .article_card {
    width: 100%;
    
  }
  .card_item {
    border-radius: 5px;
    width: 100%;
    box-shadow: 0 0 1rem #bdc3c7;

    .card_item_image {
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .card_item_description {
      .goto {
        transition: all .4s;
        &:hover {
          background: #bdc3c7;
        }
      }
    }
  }
</style>
