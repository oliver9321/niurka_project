// craco.config.js
const path = require("path");
require("dotenv").config();

// Only apply visual edits in actual dev server mode, not during production build
// process.env.CRACO_COMMAND is 'start' for dev server, 'build' for production build
const isDevServer = process.env.CRACO_COMMAND === "start";

// Environment variable overrides
const config = {
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
    configure: (webpackConfig) => {

      // Strip react-refresh in production to prevent runtime errors
      if (process.env.NODE_ENV === 'production') {
        webpackConfig.plugins = (webpackConfig.plugins || []).filter(
          (plugin) => plugin.constructor.name !== 'ReactRefreshPlugin'
        );
        // Remove react-refresh babel plugin entries if present
        if (webpackConfig.module && webpackConfig.module.rules) {
          const walkRules = (rules) => {
            for (const rule of rules) {
              if (rule.use) {
                const uses = Array.isArray(rule.use) ? rule.use : [rule.use];
                for (const use of uses) {
                  if (use.options && Array.isArray(use.options.plugins)) {
                    use.options.plugins = use.options.plugins.filter(
                      (p) => {
                        const name = typeof p === 'string' ? p : (Array.isArray(p) ? p[0] : '');
                        return !String(name).includes('react-refresh');
                      }
                    );
                  }
                }
              }
              if (rule.oneOf) walkRules(rule.oneOf);
              if (rule.rules) walkRules(rule.rules);
            }
          };
          walkRules(webpackConfig.module.rules);
        }
      }

      // Add ignored patterns to reduce watched directories
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: ['**/node_modules/**', '**/.git/**', '**/build/**'],
        };

      return webpackConfig;
    },
  },
};

let webpackConfig = config;

webpackConfig.devServer = (devServerConfig) => {
  return devServerConfig;
};

// Wrap with visual edits ONLY in dev server mode, not during production build
if (isDevServer) {
  try {
    const { withVisualEdits } = require("@emergentbase/visual-edits/craco");
    webpackConfig = withVisualEdits(webpackConfig);
  } catch (e) {
    console.warn("Visual edits not available:", e.message);
  }
}

module.exports = webpackConfig;
