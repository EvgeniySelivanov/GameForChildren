const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  transformer: {
    // Другие настройки трансформера...
    getTransformOptions: async () => {
      return {
        // Другие опции трансформации...
        minify: {
          // Опции Terser
          // Убедитесь, что укажите пути к файлам, которые вы хотите обфусцировать
          // Пример: 'path/to/your/code.js'
          path: ['**/*.js'],
          // Дополнительные настройки Terser можно добавить здесь
        },
      };
    },
  },
};