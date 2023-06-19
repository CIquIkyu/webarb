export default {
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        products: './src/whatshypmic.html',
        products: './src/character.html',
        products: './src/story.html',
        products:'./src/sound.html'
      },
    },
  },
};
