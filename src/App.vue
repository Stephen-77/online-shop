<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-show="$route.meta.isFooter" />
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  name: "App",
  components: { Header, Footer },
  // 组件挂载完毕可以向服务器发送请求
  mounted() {
    this.$store.dispatch("home/categoryList");
    
  },
};
</script>

<style>
</style>