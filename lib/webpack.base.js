const parseES6 = {
  // 使用 babel-loader
  // 更多 babel 配置：https://www.npmjs.com/package/babel-loader
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        options: {
          // 预设编译流程，由一系列 babel plugin 组成
          presets: ['@babel/preset-env'],
          // 额外配置 babel plugin
          plugins: ['@babel/proposal-class-properties']
        }
      }
    ]
  }
}

const parseReact = {
  // 使用 babel-loader
  // 更多 babel 配置：https://www.npmjs.com/package/babel-loader
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        options: {
          // 预设编译流程，由一系列 babel plugin 组成
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          // 额外配置 babel plugin
          plugins: [
            '@babel/proposal-class-properties'
          ]
        }
      }
    ]
  }
}

const parseVue = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  }
}

const parseCss = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

const parseLess = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  }
}

const parseImage = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          // 'file-loader',
          {
            loader: 'url-loader',
            options: {
              // 单位：字节
              // 限制以内，转换为 base64 
              limit: 1024
            }
          }
        ]
      }
    ]
  }
}

const parseFont = {
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}

module.exports = {
  parseES6, parseReact, parseVue
}