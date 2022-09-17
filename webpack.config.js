const path = require("path")
module.exports = {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        // ... другие правила опущены
  
        // это правило будет применяться к обычным файлам `.scss`
        // А ТАКЖЕ к секциям `<style lang="scss">` в файлах `.vue`
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader',
            {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            }
        }
          ]
        }
      ]
    },
    // плагин опущен
  }