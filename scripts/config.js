const { merge } = require("./utils");

module.exports = (hexo) => {
  const data = hexo.locals.get("data");

  /**
   * Merge configs from _data/nanoas.yml into hexo.theme.config.
   */
  if (data.nanoas) {
    merge(hexo.config, data.nanoas);
    merge(hexo.theme.config, data.nanoas);
    // hexo auto merge theme.config & config.theme_config
  }

  // config for test
  if (data.test && process.env.NODE_ENV === "test") {
    merge(hexo.theme.config, data.test);
  }
};
