<template>
  <div class="m-istyle" :class="nav.class">
    <dl @mouseover="over">
      <dt>{{nav.title}}</dt>
      <dd v-for="(item, index) in nav.list" :key="index" :class="{active:kind == item.tab}" :data-type="item.tab">{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">
              {{item.sub_title}}
            </div>
            <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.current_price}}</span>
              </span>
              <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
              <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.avg_price}}
                  <span class="units">/{{item.price_info.units}}</span>
                </span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kind: 'all',
      list: [{
        image: '//p0.meituan.net/poi/f86c5e68803ca4d83d8d2acb81dbcc61108544.jpg@368w_208h_1e_1c',
        title: '储缘蛋糕（仁寿路店）',
        sub_title: '10英寸欧式水果生日蛋糕7选1-蛋糕店送货上门贴心服务,同城3公里可免费配送到家。1个，约10英寸，圆型',
        price_info: {
          current_price: null,
          old_price: null,
          avg_price: 18,
          units: '人均'
        },
        rentNum: 10,
        address: '硚口路'
      }, {
        image: '//p0.meituan.net/bbia/da656d4668d97a594ecef6e99c0cca12142804.jpg@368w_208h_1e_1c',
        title: '幸福西饼生日蛋糕（白沙洲店）',
        sub_title: '【蛋糕】S经典热荐四重奏/榴芒双拼/芒果茫茫/榴莲香雪（4选1）1个，约2磅，方形',
        price_info: {
          current_price: 198,
          old_price: 296,
          avg_price: null,
          units: null
        },
        rentNum: 20,
        address: '白沙洲'
      }]
    }
  },
  props: [
    'nav'
  ],
  methods: {
    over (e) {
      let dom = e.target
      let tagName = dom.tagName.toLowerCase()
      if (tagName != 'dd') {
        return false
      }
      this.kind = dom.getAttribute('data-type')
      // 动态获取数据 ajax 请求
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/index/artistic.scss";
</style>
