module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: true, 
      browsers: ['last 2 versions', 'ie 11']
    }), // add vendor prefixes
    require('cssnano')({
      preset: ['default', {
        discardComments: {
            removeAll: true,
        },
      }]      
    }) // minify the result
  ]
}
