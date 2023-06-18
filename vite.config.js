export default {
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        whatshypmic: './src/whatshypmic.html',
        story: './src/story.html',
        character: '/.character.html'
      },
    },
  },
};
