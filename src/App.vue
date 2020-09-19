<template>
  <div id="app">
    <router-view class="header" name="header"/>
    <router-view class="content"/>
    <router-view class="footer" name="footer"/>
  </div>
</template>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 9999 !important;
  }
  .footer {
    position: sticky;
    z-index: 9999 !important;
  }
</style>
