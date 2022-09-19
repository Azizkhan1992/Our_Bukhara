const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       additionalData: `
  //       @import "@/assets/scss/style.scss";
  //       @import "@/assets/scss/_variables.scss";
  //       @import "@/assets/scss/_mixins.scss";
  //       `,
  //     }
  //   }
  // },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },
})
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader') 
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/style.scss'),
      ],
    })
}
