const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  // eslint-disable-next-line no-unused-vars
  chainWebpack: config => {
    // eslint-disable-next-line no-unused-labels
    plugins: [
      new GoogleFontsPlugin({
        fonts: [{ family: "Roboto", variants: ["400", "700"] }]
      })
    ];
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/variables.scss";`
      }
    }
  }
};
