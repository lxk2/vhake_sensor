module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem-exclude')({
            remUnit: 75,
            exclude: /node_modules|backTop/i
          })
        ]
      }
    }
  }
}
