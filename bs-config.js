module.exports = {
  server: 'dist',
  startPath: '/',
  files: [{
    match: ['dist/**/*.{html,js,json,css}'],
    fn: function (event, file) {
      this.reload('*.html')
    }
  }],
  https: true,
  reloadDebounce: 1000,
  notify: false
}
