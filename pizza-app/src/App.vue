<template>
  <div id="app">
    <div class="container">
      <AppHeader></AppHeader>
    </div>
    <div class="container">
      <!-- 默认显示 -->
      <router-view></router-view>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/Header'
export default {
  // name: 'app',
  components:{
    AppHeader
  }
}
</script>

<style>

</style>
