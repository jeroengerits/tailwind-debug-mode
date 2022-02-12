module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('./src')({
      screensColor: '#000000cc',
      wireColor: '#000000cc',
      svgColor: '#000000cc',
      textColor: '#33333399',
      inputColor: '#33333322',
    }),
  ],
}
