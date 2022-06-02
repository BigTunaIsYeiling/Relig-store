const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  publicPath: "/Relig-store/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_fonts.scss";
          @import "@/assets/scss/_vars.scss";
        `,
      },
    },
  },
};
