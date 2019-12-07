export default {
  onLoad () {
    // onload 方法会自动把 loading 变为 ture
    this.loading = false
    this.finished = true
  },
  onRefresh () {
    this.page = 1
    this.list = []
    this.info = {}
    this.getList()
  },
  getList () {
    let that = this
    that.$http.request({
      url: 'Sensor/getDataList',
      data: {
        d_id: that.d_id,
        page: that.page,
        list_rows: that.list_rows
      },
      success: res => {
        that.finished = true
        that.loading = false
        that.isRefresh = false
        if (res.code === that.$statusCode.SUCCESS_CODE) {
          that.list = res.data.list
          that.info = res.data.data
        } else {
          that.$toast.fail(res.msg)
        }
      }
    })
  }
}
