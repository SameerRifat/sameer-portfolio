// next.config.js
module.exports = {
    // Your other configuration options...
  
    webpack: (config) => {
      config.module.rules.push(
        // {
        //   test: /\.(png|jpg|jpeg|gif|svg)$/i,
        //   use: [
        //     {
        //       loader: 'file-loader',
        //       options: {
        //         publicPath: '/_next',
        //         name: 'static/media/[name].[hash].[ext]',
        //       },
        //     },
        //   ],
        // },
        {
          test: /\.(mp4|webm)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: '/_next',
                name: 'static/media/[name].[hash].[ext]',
              },
            },
          ],
        }
      );
  
      return config;
    },
  
    // Uncomment the following lines if you don't have them already
    // images: {
    //   domains: ['example.com'], // Add your domain(s) here
    // },
  };
  



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     webpack: (config) => {
//         config.module.rules.push({
//             test: /\.(mp4|webm)$/,
//             use: {
//                 loader: 'file-loader',
//                 options: {
//                     publicPath: '/_next',
//                     name: 'static/media/[name].[hash].[ext]',
//                 },
//             },
//         });

//         return config;
//     },
// };

// module.exports = nextConfig
