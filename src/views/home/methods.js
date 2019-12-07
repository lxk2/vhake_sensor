import { mapActions } from 'vuex'
export default {
  ...mapActions([
    'changeCityIndex',
    'getCity'
  ]),
  onConfirm (value, index) {
    this.changeCityIndex(index)
    this.getData()
  },
  toList (id) {
    this.$router.push({
      path: '/list',
      query: {
        d_id: id
      }
    })
  },
  getData () {
    let that = this
    that.$http.request({
      url: 'Sensor/getData',
      data: {
        c_id: that.cityList[that.currentIndex].id
      },
      success: res => {
        if (res.code === that.$statusCode.SUCCESS_CODE) {
          that.list = res.data
        } else {
          that.list = []
          that.$toast.fail(res.msg)
        }
      }
    })
  }
}
