const withImages = require('next-images')
module.exports = withImages()

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//       },
//       use: ['@svgr/webpack'],
//     })

//     return config
//   },
// }

// const withSass = require('@zeit/next-sass')
// const withCSS = require('@zeit/next-css')

// module.exports = withCSS(
//   withSass({
//     webpack(config, options) {
//       config.module.rules.push({
//         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//         use: {
//           loader: 'url-loader',
//           options: {
//             limit: 100000,
//           },
//         },
//       })
//       return config
//     },
//   }),
// )
