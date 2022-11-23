module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            Assets: './assets',
            Config: 'src/Config',
            Constants: './src/Constants',
            Themes: './src/Themes',
            Navigation: './src/Navigation',
            Components: './src/Components',
            Screens: './src/Screens',
            Mock: './src/Mock',
          },
        },
      ],
    ],
  };
};
