export default {
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        src: './src/whatshypmic.html', 
        src:'./src/character.html'
      },
    },
  },
};
