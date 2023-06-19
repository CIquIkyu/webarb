export default {
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        whatshypmic: "./whatshypmic/whatshypmic.html",
        story: "./story/story.html",
        character: "./character/character.html",
        sound: "./sound/sound.html"
      },
  },
}
}
