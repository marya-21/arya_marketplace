module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/script/bundle.js");
  // eleventyConfig.addLayoutAlias("default", "layouts/base.njk");
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      // layouts: "_includes/layouts",
    },
  };
};
