// module.exports = {
//   configureWebpack: {
//     resolve : {
//       extensions : ['.js','.vue'],
//       alias : {
//         '@': 'src',
//         'assets': 'src/assets',
//         'img': 'src/assets/img',
//         'common': 'src/common',
//         'components': 'src/components',
//         'network': 'src/network',
//         'views': 'src/views'
//       }
//     }
//   }
// }
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', ],
      alias: {
        'assets': 'src/assets',
        'img': 'src/assets/img',
        'common': 'src/common',
        'components': 'src/components',
        'network': 'src/network',
        'views': 'src/views'
      }
    }
  }
}
// const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
// module.exports = {
//   lintOnSave: true,
//   chainWebpack: config => {
//     config.resolve.alias
//       .set('assets', resolve('src/assets'))
//       .set('img', resolve('src/assets/img'))
//       .set('common', resolve('src/assets/common'))
//       .set('components', resolve('src/components'))
//       .set('network', resolve('src/network'))
//       .set('views', resolve('src/views'))
//   }
// }