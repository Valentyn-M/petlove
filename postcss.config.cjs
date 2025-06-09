module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 1rem = 16px
      unitPrecision: 5,
      propList: ['*'], // всі CSS-властивості
      selectorBlackList: [], // не ігнорувати нічого
      replace: true,
      mediaQuery: true, // конвертувати й у @media
      minPixelValue: 1,
    },
  },
};
