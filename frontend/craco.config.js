// craco.config.js
const path = require("path");

let webpackConfig = {
  eslint: {
    configure: {
      extends: ["plugin:react-hooks/recommended"],
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (config) => {
      // Strip react-refresh plugin and babel entries in production
      if (process.env.NODE_ENV === 'production') {
        config.plugins = (config.plugins || []).filter(
          (plugin) => plugin.constructor.name !== 'ReactRefreshPlugin'
        );
        if (config.module && config.module.rules) {
          const walkRules = (rules) => {
            for (const rule of rules) {
              if (rule.use) {
                const uses = Array.isArray(rule.use) ? rule.use : [rule.use];
                for (const use of uses) {
                  if (use.options && Array.isArray(use.options.plugins)) {
                    use.options.plugins = use.options.plugins.filter((p) => {
                      const name = typeof p === 'string' ? p : (Array.isArray(p) ? p[0] : '');
                      return !String(name).includes('react-refresh');
                    });
                  }
                }
              }
              if (rule.oneOf) walkRules(rule.oneOf);
              if (rule.rules) walkRules(rule.rules);
            }
          };
          walkRules(config.module.rules);
        }
      }

      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/node_modules/**', '**/.git/**', '**/build/**'],
      };

      return config;
    },
  },
};

module.exports = webpackConfig;
