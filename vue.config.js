module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                  @import "@/assets/scss/_breakpoints.scss";
                  @import "@/assets/scss/_variables.scss";
                  @import "@/assets/scss/_mixins.scss";
                `,
      },
    },
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
