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

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
};
