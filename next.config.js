// // next.config.js
// const nextConfig = {
//   webpack: (config) => {
//       config.module.rules.push({
//           test: /\.(png|jpg|jpeg|gif|svg|mp4|webm)$/,
//           use: {
//               loader: 'file-loader',
//               options: {
//                   publicPath: '/_next',
//                   name: 'static/media/[name].[hash].[ext]',
//               },
//           },
//       });

//       return config;
//   },
// };

// module.exports = nextConfig;

  



/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config) => {
    //     config.module.rules.push({
    //         test: /\.(mp4|webm)$/,
    //         use: {
    //             loader: 'file-loader',
    //             options: {
    //                 publicPath: '/_next',
    //                 name: 'static/media/[name].[hash].[ext]',
    //             },
    //         },
    //     });

    //     return config;
    // },
};

module.exports = nextConfig
