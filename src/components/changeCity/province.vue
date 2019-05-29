<template>
    <div>
      <span class="name">按省份选择：</span>
      <m-select
        :list="provinceList"
        title="省份"
        :value="province"
        :showWrapperActive="provinceActive"
        @change_active="changeProvinceActive"
        @change="changeProvince"
      />
      <m-select
        :list="cityList"
        title="城市"
        :value="city"
        :showWrapperActive="cityActive"
        @change_active="changeCityActive"
        @change="changeCity"
      />
      <span>直接搜索：</span>
      <el-select
        v-model="searchWord"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading">
        <el-option
          v-for="(item, index) in searchList"
          :key="index"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </div>
</template>

<script>
import MSelect from './select.vue'
export default {
  data () {
    return {
      province: '省份',
      provinceList: ['山东', '甘肃', '黑龙江', '湖北', '浙江', '沈阳'],
      cityList: ['哈尔滨', '佳木斯', '牡丹江', '鹤岗'],
      city: '城市',
      provinceActive:false,
      cityActive:false,
      searchList:['哈尔滨', '佳木斯', '牡丹江', '鹤岗'],
      searchWord: '',
      loading:false
    }
  },
  components: {
    MSelect
  },
  methods:{
    changeProvinceActive(flag){
      this.provinceActive = flag;
      if(flag == true){
        this.cityActive = false
      }
    },
    changeCityActive(flag){
      this.cityActive = flag;
      if(flag == true){
        this.provinceActive = false
      }
    },
    changeProvince(value){
      this.province = value;
    },
    changeCity(value){
      this.city = value;
    },
    remoteMethod(val){
      // 请求后端接口
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
