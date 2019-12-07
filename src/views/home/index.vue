<template>
  <div class="container">
    <div class="city">
      <div class="info">
        <img :src="cityList[currentIndex] ? cityList[currentIndex].pic : ''" alt="">
        <div class="name">
          {{ columns[currentIndex] }}
        </div>
      </div>
      <van-icon name="arrow-down" @click.native="showPicker = true" :style="{
        fontSize: '16px'
      }" />
    </div>
    <cell :name="item.dataName" :value="item.data_value ? item.data_value + '℃' : ''" @click="toList(item.id)" v-for="(item) in list" :key="item.id"></cell>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import data from './data'
import methods from './methods'
import Cell from '@/components/cell'
export default {
  name: 'home',
  data,
  methods,
  components: {
    Cell
  },
  computed: {
    ...mapState([
      'cityList',
      'cityIndex'
    ]),
    columns () {
      return this.cityList.map(item => item['name'])
    },
    currentIndex () {
      return this.cityIndex
    }
  },
  created () {
    this.getCity()
      .then(res => {
        this.getData()
      })
      .catch(res => {
        this.$toast.fail('加载城市失败或城市数据为空')
      })
  },
  mounted () {

  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/style/home.scss';
</style>
