module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Kenny Krosky Front End Developer'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/style.scss";
          `
      }
    }
  }
}