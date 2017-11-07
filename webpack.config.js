module.exports = {
  entry: './src/scripts.js',
  output: {
     filename: './build/bundle.js'
  },
  module: {
    rules: [
    // ...other loaders...
      {
         test: /\.scss$/,
         use: [
           {
             loader: 'style-loader'
           },
           {
             loader: 'css-loader'
           },
           {
             loader: 'sass-loader'
           }
         ]
      },
   ]
 }
};
