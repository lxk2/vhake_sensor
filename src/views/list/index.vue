<template>
  <div class="container">
    <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
      <van-list
        :style="{
          color: '#e5e5e5'
        }"
        v-model="loading"
        :finished="finished"
        finished-text="'没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <div class="title">
          <span>
            {{ info.dataName }}
          </span>
        </div>
        <cell :name="item.create_time" :value="item.data_value ? item.data_value + '℃' : ''" v-for="(item) in list" :key="item.id"></cell>
      </van-list>
    </van-pull-refresh>
    <backTop></backTop>
  </div>
</template>

<script>
import data from './data'
import methods from './methods'
import Cell from '@/components/cell'
import backTop from '@/components/backTop'
export default {
  name: 'list',
  data,
  methods,
  components: {
    Cell,
    backTop
  },
  created () {
    this.d_id = this.$route.query.d_id || 0
    this.getList()
  },
  mounted () {

  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/style/list.scss';
</style>
