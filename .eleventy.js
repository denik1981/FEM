const fs = require("fs");
const path = require("path");
const copyDirs = ["images", "assets"];
const config = {
  dir: { input: "demo", output: path.join("public", "demo") },
  templateFormats: ["html", "liquid", "njk"],
  pathPrefix: "/demo/",
};

module.exports = function (eleventyConfig) {
  fs.rmSync(config.dir.output, { recursive: true, force: true });
  copyDirs.forEach((dir) =>
    eleventyConfig.addPassthroughCopy(path.join(config.dir.input, dir))
  );
  return config;
};
