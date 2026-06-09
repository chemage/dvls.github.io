module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("media");
  return {
    dir: {
      input: ".11ty",
      includes: "_includes",
      data: "_data",
      output: "dist"
    }
  };
};
