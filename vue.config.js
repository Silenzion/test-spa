module.exports = {
    publicPath: './',
    outputDir: "output/",
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
					@import "@/assets/styles/variables.scss";
					@import "@/assets/styles/mixins.scss";
				`,
            },
        },
    },
};
