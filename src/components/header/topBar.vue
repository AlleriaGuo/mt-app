<template>
  <el-row class="top">
    <el-col :span="10">
      <geo />
    </el-col>
    <el-col :span="14">
      <m-nav />
    </el-col>
  </el-row>
</template>

<script>
  import Geo from "@/components/header/geo.vue";
  import MNav from "@/components/header/nav.vue";
  export default {
    name: 'topBar',
    components:{
      Geo,
      MNav
    }
  }
</script>

<style lang="scss">
@import "@/assets/css/public/header/topbar.scss";
</style>
